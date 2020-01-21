import api from './api.js';
import store from './store.js';

/* generarting html elements */
const generateBookmarkElement = function(bookmark) {
  let starRating = showStarRating(bookmark.rating);
  return `
    <li class='bookmark-list-element' data-item-id="${bookmark.id}">
        <div class = 'js-bookmark'>
            <button type="button" class="condense">${bookmark.title} <span class='ratingStar'>${starRating}</span></button>
        </div>
        ${bookmark.expand ? `<div class="expand">
            <p class='description'>${bookmark.desc}</p>
            <a href="${bookmark.url}" class="visit-site">Visit Site</a>
            <button class='delete' type='button' value='delete'>X</button>
        </div>` : ''}
    </li>
    `;
}; 

const generateBookmarksListString = function (bookmarksList) {
  const bookmarks = bookmarksList.map((bookmark) => generateBookmarkElement(bookmark));
  return bookmarks.join('');
};


/* handling errors */
const generateError = function (message) {
  return `
        <section class="error-content">
          <button id="cancel-error">X</button>
          <p>${message}</p>
        </section>
      `;
};

const renderError = function () {
  if (store.error) {
    const el = generateError(store.error);
    $('.error-container').html(el);
  } else {
    $('.error-container').empty();
  }
};

const handleCloseError = function () {
  $('.error-container').on('click', '#cancel-error', () => {
    store.handleError(null);
    renderError();
  });
};

const render = function () {  
  renderError();

  let bookmarks = store.bookmarks.filter(bookmark => {
    return bookmark.rating >= store.minRating;
  });

  let bookmarksListString = generateBookmarksListString(bookmarks);
  $('.bookmark-list').html(bookmarksListString);
};


/* handling submit/delete/add buttons */
const handleNewBookmarkButton = function() {
  $('#new-bookmark').click(function() {
    $('.addBookmark-form-section').slideToggle('slow');
  });
};

const showStarRating = function(rating) {
  if (rating === 5) {
    return '★ ★ ★ ★ ★';
  } else if (rating === 4) {
    return '★ ★ ★ ★';
  } else if (rating === 3) {
    return '★ ★ ★';
  } else if (rating === 2) {
    return '★ ★';
  } else if (rating === 1) {
    return '★';
  } else {
    return '';
  }
};

const handleAddBookmarkSubmit = function() {
  $('.addBookmark-form').submit(function (event) {
    event.preventDefault();
    const id = store.findBookmarkById();
    const title = $('#title-input').val();
    const url = $('#url-input').val();
    const desc = $('#description-input').val();
    const rating = $('input[type=radio][name=star]:checked').val();

    console.log(rating);

    api.createBoomark(id, title, desc, url, rating)
      .then((newBookmark) => {
        store.addBookmark(newBookmark);
        $('.addBookmark-form').addClass('hidden');

        render();
      })
      .catch(err => {
        store.handleError(err.message);
        renderError();
      });

    $('.addBookmark-form')[0].reset();
  });
};

function handleFilterRating(){
  $('#filter-by-rating').on('change', event => {
    let rating = $(event.target).val();
    store.minRating = rating;
    render();
  });
}
  
const getItemIdFromBookmark = function(bookmark) {
  return $(bookmark)
    .closest('.bookmark-list-element')
    .data('item-id');
};

const handleExpandButton = function() {
  $('.bookmark-list').on('click', '.condense', (event) => {
    const id = getItemIdFromBookmark(event.currentTarget);
    store.toggleExpandBookmark(id);
    render();
  });
};


const handleBookmarkDeleteButton = function() {
  $('.bookmark-list').on('click', '.delete', event => {
    const id = getItemIdFromBookmark(event.currentTarget);

    api.deleteBookmark(id)
      .then (() => {
        store.findAndDelete(id);
        render();
      })
      .catch(error => {
        console.log(error);
        store.handleError(error.message);
        renderError();
      });
  });
};


const bindEventListeners = function() {
  handleNewBookmarkButton();
  handleExpandButton();
  handleAddBookmarkSubmit();
  handleFilterRating();
  handleBookmarkDeleteButton();
  handleCloseError();
};


export default {
  render,
  bindEventListeners
};










    