export class PostsService {

  _url = 'https://jsonplaceholder.typicode.com/posts';

  getAllPosts(){
    return fetch(this._url).then(response => response.json());
  }

  getPostById(id){
    return fetch(`${this._url}/${id}`).then(resp=>resp.json());
  }

  getPostsByUserID(id){
    return fetch(`${this._url}?userId=${id}`).then(resp=>resp.json());
  }
}
