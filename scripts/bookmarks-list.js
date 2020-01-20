import store from '.store.js';
// import api from '.api.js';

const generateBookmarkElement = function(bookmark) {
    

  return `
    <li class='bookmark-list-element'>
        <button type="button" class="condense">${bookmark.title} | ${bookmark.rating}</button>
        <div class="expand">
            <p>${bookmark.description}</p>
            <p>${bookmark.url}</p>
            <button type='button' value='delete'>Delete</button>
         </div>
    </li>
    `;

}; 

const generateBookmarksListString = function (bookmkarList) {
  const bookmarks = bookmkarList.map((bookmark) => generateBookmarkElement(bookmark));
  return bookmarks.join('');
};

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
  

const render = function() {
  renderError();
  let bookmarks = [...store.bookmarks];

  const bookmarksListString = generateBookmarksListString(bookmarks);

  $('.bookmark-list').html(bookmarksListString);
}


$(render);



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




// $('#new-bookmark').click(function() {
//   $('.bookmark-form-section').css('display', 'block');
// });

// $('.bookmark-item').click(function() {
//   $('.expand').css('display', 'block');
// });
  

// const render = function() {
// };


// const bindEventListeners = function() {
// };

// $(bindEventListeners);


// export default {
//   render,
//   bindEventListeners
// };




