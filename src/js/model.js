const Model = function () {
  this.notes = [];
};

Model.prototype.addNote = function (note) {
  this.notes.push(note);
  console.log(this.notes);
};

export default Model;
