export class UsersApiService {
  _url = 'https://jsonplaceholder.typicode.com/users';

  getAllUsers(){
   return fetch(this._url).then(res => res.json());
  }
}
