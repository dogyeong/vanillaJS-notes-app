import View from '../view/view.js';
import NoteApp from '../model/model.js';

const Controller = function ($target) {
  this.View = new View($target);
  this.NoteApp = new NoteApp();

  this.View.noteAddEvent.addListener(this.NoteApp.routeAddPage.bind(this.NoteApp)); // 노트 추가 페이지 이동
  this.View.noteSaveEvent.addListener(this.NoteApp.addNote.bind(this.NoteApp)); // 노트 저장
  this.View.noteDelEvent.addListener(this.NoteApp.deleteNote.bind(this.NoteApp)); // 노트 삭제
  this.View.noteDetailEvent.addListener(this.NoteApp.routeDetailPage.bind(this.NoteApp)); // 노트 클릭 시
  this.View.cancelEvent.addListener(this.NoteApp.routeListPage.bind(this.NoteApp)); // 취소 버튼 클릭 시
  this.View.noteEditEvent.addListener(this.NoteApp.routeEditPage.bind(this.NoteApp)); // 수정 버튼 클릭 시

  this.NoteApp.noteUpdateEvent.addListener(this.View.render.bind(this.View));
  this.NoteApp.noteViewEvent.addListener(this.View.render.bind(this.View));
  this.NoteApp.routeEvent.addListener(this.View.render.bind(this.View));
};

Controller.prototype.run = function () {
  this.NoteApp.init();
};

export default Controller;
