export class CommentsService {
    _url = 'https://jsonplaceholder.typicode.com/comments';

    async getAllComments(){
        return (await fetch(this._url)).json();
    }
}
