const View = function ($target, Model) {
  this.$target = $target;
  this.Model = Model;

  this.init();
  this.render([]);

  this.Model.observer = this.render.bind(this);
};

View.prototype.init = function () {
  this.$target.addEventListener('click', ({ target }) => {
    if (!target.classList.contains('add-btn')) {
      return;
    }
    this.Model.addNote(document.querySelector('input').value);
  });
};

View.prototype.render = function (modelNote) {

  this.$target.innerHTML = `
    <div class="container">
      <input type="text" />
      <button type="button" class="add-btn">추가</button>
      <ul class="noteList">
        ${modelNote.map( (v)=>`<li>${v}</li>`).join('')}
      </ul>
    </div>
  `;

  
  
  

  


};

export default View;
