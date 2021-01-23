import Event from './event.js';

const View = function ($target) {
  this.$target = $target;
  this.noteAddEvent = new Event();
  this.noteSaveEvent = new Event();
  this.noteDelEvent = new Event();
  this.noteDetailEvent = new Event();
  this.cancelEvent = new Event();

  this.init();
};

View.prototype.init = function () {
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
    if (target.classList.contains('detail')) {
      this.noteDetailEvent.trigger(target.dataset.id);
    }
    if (target.classList.contains('cancel-btn')) {
      this.cancelEvent.trigger();
    }
  });
};

View.prototype.render = function (viewMode, notes) {
  if (viewMode === 0) {
    this.$target.innerHTML = `
    <div class="container">
      <button type="button" class="add-btn">추가</button>
      ${notes
        .map(
          (note) => `
          <li><button class='detail' data-id=${note.id}>${note.title}</button></li>
          `,
        )
        .join('')}
    </div>
  `;
  } else if (viewMode === 1) {
    const id = notes;
    this.$target.innerHTML = `
      <div class="container">
        <input type="text" class="note-title" />
        <textarea class="note-text"></textarea>
        <button class="save-btn" data-id=${id}>추가</button>
        <button class="cancel-btn">취소</button>
      </div>
    `;
  } else if (viewMode === 2) {
    this.$target.innerHTML = `
      <div class="container">
        <button class="cancel-btn">뒤로가기</button>
        <button class="edit-btn" data-id=${notes.id}>수정</button>
        <button class="del-btn" data-id=${notes.id}>삭제</button>
        <h3>${notes.title}</h3>
        <p>${notes.text}</p>
      </div>
    `;
  }
};

export default View;
