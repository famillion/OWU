const USERS_API_URL = 'https://jsonplaceholder.typicode.com/users';

const POSTS_API_URL = 'https://jsonplaceholder.typicode.com/posts';

const COMMENTS_API_URL = 'https://jsonplaceholder.typicode.com/comments';

// Users Services
export function getAllUsers() {
  return fetch(USERS_API_URL).then(response => response.json());
}

export function getUserByID(userId) {
  return fetch(`${USERS_API_URL}/${userId}`).then(response => response.json());
}


// Posts Services
export function getAllPosts() {
  return fetch(POSTS_API_URL).then(response => response.json());
}

export function getPostByPostId(postId) {
  return fetch(`${POSTS_API_URL}/${postId}`).then(response => response.json());
}

export function getPostByUserId(userId) {
  return fetch(`${POSTS_API_URL}?userId=${userId}`).then(response => response.json());
}


// Comments Services
export function getAllComments() {
  return fetch(COMMENTS_API_URL).then(response => response.json());
}

export function getCommentByPostId(postId) {
  return fetch(`${COMMENTS_API_URL}?postId=${postId}`).then(response => response.json());
}
