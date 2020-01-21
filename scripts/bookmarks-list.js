import api from './api.js';
import store from './store.js';


// const generateBookmarkElement = function(bookmark) {
    
//   return `
//     <li class='bookmark-list-element'>
//         <div class = 'js-bookmark' data-bookmark-id = ${bookmark.id}>
//         <button type="button" class="condense">${bookmark.title} | ${bookmark.rating}</button>
//         <div class="expand" id="${bookmark.id}>
//             <p>${bookmark.description}</p>
//             <a href="${bookmark.url}" target="_blank" class="visit-site">Visit Site</a>
//             <button type='button' value='delete'>Delete</button>
//          </div>
//     </li>
//     `;
// }; 

// const generateBookmarksListString = function (bookmkarList) {
//   const bookmarks = bookmkarList.map((bookmark) => generateBookmarkElement(bookmark));
//   return bookmarks.join('');
// };

// const generateError = function (message) {
//   return `
//         <section class="error-content">
//           <button id="cancel-error">X</button>
//           <p>${message}</p>
//         </section>
//       `;
// };

// const renderError = function () {
//   if (store.error) {
//     const el = generateError(store.error);
//     $('.error-container').html(el);
//   } else {
//     $('.error-container').empty();
//   }
// };

// const handleCloseError = function () {
//   $('.error-container').on('click', '#cancel-error', () => {
//     store.handleError(null);
//     renderError();
//   });
// };
  

// const render = function() {
//   renderError();
//   let bookmarks = [...store.bookmarks];

//   const bookmarksListString = generateBookmarksListString(bookmarks);

//   $('.bookmark-list').html(bookmarksListString);
// };

const handleNewBookmarkButton = function() {
  $('#new-bookmark').click(function() {
    $('.addBookmark-form-section').slideToggle('slow');
  });
};


// const handleAddBookmarkSubmit = function() {
//   $('.addBookmark-form').submit(function (event) {
//     event.preventDefault();
    
//     const title = $('#title-input').val();
//     $('#title-input').val('');

//     const url = $('#url-input').val();
//     $('#url-input').val('http://');

//     const description = $('#description-input').val();
//     $('#description-input').val('');

//     const rating = $('#rating-input').val();
//     $('#rating-input').val('');

//     const bookmark = {
//       title,
//       description,
//       url,
//       rating
//     };

//     $('.bookmark-list').html(generateBookmarksListString(bookmark));

    // let error = '';
    // api.createBoomark(bookmark)
    //   .then(res => {
    //     if(!res.ok) {
    //       error = {code: res.status};
    //     }
    //     return res.json();
    //   })
    //   .then(res => {
    //     if(error) {
    //       error.message = res.message;
    //       return Promise.reject(error);
    //     }

    // $(newBookmarkTitle());
    // $(newBookmarkURL());
    // $(newBookmarkDescription());
//   });
// };



// const getItemIdFromElement = function (item) {
//   return $(item)
//     .closest('.bookmark-list-element');
// };




// for (let i = 0; i < $('.condense').length; i++) {
//   $('.condense')[i].addEventListener('click', function() {
//     this.classList.toggle('active');
//     var expand = this.nextElementSibling;
//     if (expand.style.display === 'block') {
//       expand.style.display = 'none';
//     } else {
//       expand.style.display = 'block';
//     }
//   });
// }




const bindEventListeners = function() {
  handleNewBookmarkButton();
//   handleAddBookmarkSubmit();
};

// $(bindEventListeners);


export default {
//   render,
  bindEventListeners
};










    