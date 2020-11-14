const Model = function () {
  this.notes = [];
  this.observer = '';
};

Model.prototype.addNote = function (note) {
  this.notes.push(note);
  this.observer( this.notes);
  console.log(this.observer);


};

export default Model;
