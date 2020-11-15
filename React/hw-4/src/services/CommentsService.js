export class CommentsService {

  _url = 'https://jsonplaceholder.typicode.com/comments';

  getAllComments(){
    return fetch(this._url).then(res => res.json());
  }

  getCommentsByPostID(postID){
    return fetch(`${this._url}?postId=${postID}`).then(res => res.json());
  }
}
