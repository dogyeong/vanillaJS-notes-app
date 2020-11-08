const View = function ($target, Model) {
  this.$target = $target;
  this.Model = Model;

  this.init();
  this.render();
};

View.prototype.init = function () {
  this.$target.addEventListener('click', ({ target }) => {
    if (!target.classList.contains('add-btn')) {
      return;
    }
    this.Model.addNote(document.querySelector('input').value);
  });
};

View.prototype.render = function () {
  this.$target.innerHTML = `
    <div class="container">
      <input type="text" />
      <button type="button" class="add-btn">추가</button>
    </div>
  `;
};

export default View;
