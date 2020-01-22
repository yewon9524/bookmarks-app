const bookmarks = [];
let addNewBookmark = false;
let error = null;
let minRating = 0;

const findBookmarkById = function(id) {
  return this.bookmarks.find(currentItem => currentItem.id === id);
};

const findAndDelete = function(id) {
  this.bookmarks = this.bookmarks.filter(currentItem => currentItem.id !== id);
};

const addBookmark = function(bookmark) {
  this.bookmarks.push(bookmark);
};

const toggleAddBookmarkForm = function() {
  this.addNewBookmark = !this.addBookmark; 
};

const toggleExpandBookmark = function(id) {
  let currentBookmark = this.findBookmarkById(id);
  currentBookmark.expand = !currentBookmark.expand;
};
  
const handleError = function(error) {
  this.error = error;
};

export default {
  bookmarks,
  addNewBookmark,
  minRating,
  error,
  findBookmarkById,
  addBookmark,
  toggleAddBookmarkForm,
  findAndDelete,
  toggleExpandBookmark,
  handleError
};