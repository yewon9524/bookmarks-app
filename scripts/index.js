import api from './api.js';
import store from './store.js';
import bookmarksList from './bookmarks-list.js';


const main = function() {
  api.getBookmark()
    .then((bookmarks) => {
      bookmarks.forEach((bookmark) => store.addBookmark(bookmark));
      bookmarksList.render();
    });
  bookmarksList.bindEventListeners();
  bookmarksList.render();
};

$(main);