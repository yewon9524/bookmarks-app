
const bookmarks = [];
let addNewBookmark = false;
let ratingFilter = 0;
let error = null;


const findBookmarkById = function(id) {
  return this.bookmarks.find(currentItem => currentItem.id === id);
};


const findAndDelete = function(id) {
  this.bookmarks = this.bookmarks.filter(currentItem => currentItem.id !== id);
};


const addBookmark = function(bookmark) {
  this.bookmark.push(bookmark);
};


const toggleAddNewBookmark = function() {
  this.addNewBookmark = !this.addNewBookmark;
};


const toggleExpandBookmark = function(id) {
  let currentBookmark = findBookmarkById(id);
  currentBookmark.expand = !currentBookmark.expand;
};

const toggleRatingFilter = function(rating) {
  this.ratingFilter = rating;
};


const handleError = function(error) {
  this.error = error;
};

export default {
  bookmarks,
  addNewBookmark,
  ratingFilter,
  error,
  findBookmarkById,
  addBookmark,
  findAndDelete,
  toggleAddNewBookmark,
  toggleExpandBookmark,
  toggleRatingFilter,
  handleError
};