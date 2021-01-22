import Event from './event.js';

const View = function ($target) {
  this.$target = $target;
  this.noteAddEvent = new Event();
  this.noteDelEvent = new Event();

  this.init();
};

View.prototype.init = function () {
  this.$target.addEventListener('click', ({ target }) => {
    if (target.classList.contains('add-btn')) {
      this.noteAddEvent.trigger(document.querySelector('input').value);
    }
    if (target.classList.contains('del-btn')) {
      this.noteDelEvent.trigger(target.dataset.id);
    }
  });
};

View.prototype.render = function (notes) {
  this.$target.innerHTML = `
    <div class="container">
      <input type="text" />
      <button type="button" class="add-btn">추가</button>
      ${notes
        .map(
          (note) => `
          <li>
            ${note.text}
            <button class="del-btn" data-id=${note.id}>X</button>
          </li>
          `,
        )
        .join('')}
    </div>
  `;
};

export default View;
