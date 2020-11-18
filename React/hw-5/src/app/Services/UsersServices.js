class UsersServices {
  _url = 'https://jsonplaceholder.typicode.com/users';

  getAllUsers(){
    return fetch(this._url).then(res=>res.json());
  }

  getUserByID(userId){
    return fetch(`${this._url}/${userId}`).then(res => res.json());
  }
}

export default UsersServices;
