const KEY = '_notes_';

const DB = {
  load() {
    return JSON.parse(window.localStorage.getItem(KEY)) || [];
  },
  save(notes) {
    window.localStorage.setItem(KEY, JSON.stringify(notes));
  },
};

export default DB;
