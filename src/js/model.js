import Event from './event.js';

const Model = function () {
  this.notes = [];
  this.noteUpdateEvent = new Event();
};

Model.prototype.init = function () {
  console.log(this.notes);
  this.noteUpdateEvent.trigger(this.notes);
};

Model.prototype.addNote = function (text) {
  this.notes.push({
    id: Math.random().toString(16).slice(2),
    text,
  });
  this.noteUpdateEvent.trigger(this.notes);
};

Model.prototype.deleteNote = function (id) {
  const idx = this.notes.findIndex((note) => note.id === id);
  this.notes.splice(idx, 1);
  this.noteUpdateEvent.trigger(this.notes);
};

export default Model;
