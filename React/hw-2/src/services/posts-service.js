export class PostsService {
    _url = 'https://jsonplaceholder.typicode.com/posts';

    async getAllPosts(){
        return (await fetch(this._url)).json();
    }
}
