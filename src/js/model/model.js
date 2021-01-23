import Event from '../utils/event.js';
import { VIEW_MODE } from '../utils/viewMode.js';

const NoteApp = function () {
  this.notes = [];
  this.viewMode = VIEW_MODE.LIST;
  this.noteUpdateEvent = new Event();
  this.noteViewEvent = new Event();
  this.routeEvent = new Event();
};

NoteApp.prototype.init = function () {
  const notes = localStorage.getItem('notes');
  this.notes = notes ? JSON.parse(notes) : [];
  this.noteUpdateEvent.trigger(this.viewMode, this.notes);
};

NoteApp.prototype.addNote = function (title, text, id) {
  const index = this.notes.findIndex((note) => note.id === id);
  const note = { id, title, text };

  if (index === -1) {
    this.notes.push(note);
  } else {
    this.notes[index] = note;
  }

  this.viewMode = VIEW_MODE.DETAIL;
  this.noteUpdateEvent.trigger(this.viewMode, note);
  localStorage.setItem('notes', JSON.stringify(this.notes));
};

NoteApp.prototype.deleteNote = function (id) {
  if (!confirm('삭제하시겠습니까?')) return;

  const idx = this.notes.findIndex((note) => note.id === id);
  this.notes.splice(idx, 1);
  this.viewMode = VIEW_MODE.LIST;
  this.noteUpdateEvent.trigger(this.viewMode, this.notes);
};

NoteApp.prototype.routeDetailPage = function (id) {
  const note = this.notes.find((note) => note.id === id);
  this.viewMode = VIEW_MODE.DETAIL;
  this.noteViewEvent.trigger(this.viewMode, note);
};

NoteApp.prototype.routeAddPage = function () {
  this.viewMode = VIEW_MODE.ADD;
  const id = Math.random().toString(16).slice(2);
  this.routeEvent.trigger(this.viewMode, id);
};

NoteApp.prototype.routeListPage = function () {
  this.viewMode = VIEW_MODE.LIST;
  this.routeEvent.trigger(this.viewMode, this.notes);
};

NoteApp.prototype.routeEditPage = function (id) {
  const idx = this.notes.findIndex((note) => note.id === id);
  this.viewMode = VIEW_MODE.EDIT;
  this.routeEvent.trigger(this.viewMode, this.notes[idx]);
};

export default NoteApp;
