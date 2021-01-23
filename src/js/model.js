import Event from './event.js';

const VIEW_MODE = {
  LIST: 0,
  ADD: 1,
  DETAIL: 2,
};

const NoteApp = function () {
  this.notes = [];
  this.viewMode = VIEW_MODE.LIST;
  this.noteUpdateEvent = new Event();
  this.noteViewEvent = new Event();
  this.routeEvent = new Event();
};

NoteApp.prototype.init = function () {
  this.noteUpdateEvent.trigger(this.viewMode, this.notes);
};

NoteApp.prototype.addNote = function (title, text, id) {
  this.notes.push({ id, title, text });
  this.viewMode = VIEW_MODE.LIST;
  this.noteUpdateEvent.trigger(this.viewMode, this.notes);
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

export default NoteApp;
