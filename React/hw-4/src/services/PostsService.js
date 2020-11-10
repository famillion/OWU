export class PostsService {

  _url = 'https://jsonplaceholder.typicode.com/posts';

  getAllPosts(){
    return fetch(this._url).then(response => response.json());
  }

}
