import Controller from './controller/controller.js';

const $app = document.getElementById('app');
const app = new Controller($app);

app.run();
