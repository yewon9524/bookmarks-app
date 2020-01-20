const bookmarksList = [];
let addNewBookmark = false;
let ratingFilter = 0;
let error = null;


const findBookmarkById = function(id) {
  return this.bookmarksList.find(currentItem => currentItem.id === id);
};


const findAndDelete = function(id) {
  this.bookmarksList = this.bookmarksList.filter(currentItem => currentItem.id !== id);
};


const addBookmark = function(bookmark) {
  this.bookmarksList.push(bookmark);
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
  bookmarksList,
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