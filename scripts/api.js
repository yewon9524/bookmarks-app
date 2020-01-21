const BASE_URL = 'https://thinkful-list-api.herokuapp.com/raina/bookmarks';

const listApiFetch = function(...args) {
  let error;
  return fetch(...args)
    .then(res => {
      if (!res.ok) {
        error = { code: res.status };
  
        if (!res.headers.get('content-type').includes('json')) {
          error.message = res.statusText;
          return Promise.reject(error);
        }
      }
      return res.json();
    })
    .then(data => {
      if (error) {
        error.message = data.message;
        return Promise.reject(error);
      }
      return data;
    });
};
  
const createBoomark = function(title, description, url, rating) {
  let newBookmark = JSON.stringify({
    title,
    description,
    url,
    rating
  });
  console.log(newBookmark);

  return listApiFetch(`${BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: newBookmark
  });
};

const getBookmark = function() {
  return listApiFetch(`${BASE_URL}`);
};
  
const deleteBookmark = function(id) {
  return listApiFetch(`${BASE_URL}/${id}`, {
    method: 'DELETE'
  });
};
  
export default {
  createBoomark,  
  getBookmark,
  deleteBookmark
};