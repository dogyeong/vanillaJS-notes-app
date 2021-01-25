import Event from '../utils/event.js';
import { VIEW_MODE } from '../utils/viewMode.js';
import * as templates from './templates.js';

const View = function ($target) {
  this.$target = $target;
  this.$container;

  this.noteAddEvent = new Event();
  this.noteSaveEvent = new Event();
  this.noteDelEvent = new Event();
  this.noteDetailEvent = new Event();
  this.cancelEvent = new Event();
  this.noteEditEvent = new Event();

  this.init();
  this.on();
};

View.prototype.init = function () {
  this.$target.innerHTML = `
    <div class="app-container">
      <h1>Notes App</h1> 
      <div class="container"></div>
    </div>
  `;

  this.$container = document.querySelector('.container');
};

View.prototype.on = function () {
  this.$target.addEventListener('click', ({ target }) => {
    if (target.classList.contains('add-btn')) {
      this.noteAddEvent.trigger();
    }
    if (target.classList.contains('save-btn')) {
      const title = document.querySelector('.note-title').value;
      const text = document.querySelector('.note-text').value;
      this.noteSaveEvent.trigger(title, text, target.dataset.id);
    }
    if (target.classList.contains('del-btn')) {
      this.noteDelEvent.trigger(target.dataset.id);
    }
    if (target.closest('.detail')) {
      this.noteDetailEvent.trigger(target.closest('.detail').dataset.id);
    }
    if (target.classList.contains('cancel-btn')) {
      this.cancelEvent.trigger();
    }
    if (target.classList.contains('edit-btn')) {
      this.noteEditEvent.trigger(target.dataset.id);
    }
  });
};

View.prototype.render = function (viewMode, payload) {
  switch (viewMode) {
    case VIEW_MODE.LIST:
      this.$container.innerHTML = templates.list(payload);
      break;
    case VIEW_MODE.ADD:
      this.$container.innerHTML = templates.addPage(payload);
      break;
    case VIEW_MODE.DETAIL:
      this.$container.innerHTML = templates.detailPage(payload);
      break;
    case VIEW_MODE.EDIT:
      this.$container.innerHTML = templates.editPage(payload);
      break;
    default:
  }
};

export default View;
