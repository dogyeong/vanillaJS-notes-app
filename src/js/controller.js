import View from './view.js';
import Model from './model.js';

const Controller = function ($target) {
  this.View = new View($target);
  this.Model = new Model();

  this.View.noteAddEvent.addListener(this.Model.addNote.bind(this.Model));
  this.View.noteDelEvent.addListener(this.Model.deleteNote.bind(this.Model));

  this.Model.noteUpdateEvent.addListener(this.View.render.bind(this.View));
};

Controller.prototype.run = function () {
  this.Model.init();
};

export default Controller;
