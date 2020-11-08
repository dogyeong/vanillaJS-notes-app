import View from './view.js';
import Model from './model.js';

const $app = document.getElementById('app');

const NoteModel = new Model();
const NoteView = new View($app, NoteModel);
