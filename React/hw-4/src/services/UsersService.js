export class UsersService {

  _usersURL = 'https://jsonplaceholder.typicode.com/users';

  getAllUsers(){
    return fetch(this._usersURL)
      .then(response => response.json());
  }

  getUserByID(id){
    return fetch(this._usersURL + '/' + id)
      .then(response => response.json());
  }

}
