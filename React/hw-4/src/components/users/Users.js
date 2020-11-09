import React, {Component} from 'react';
import SingleUser from "./single-user/Single-User";
import {UsersService} from "../../services/UsersService";

class Users extends Component {

  state = {
    users: []
  };

  usersService = new UsersService();

  async componentDidMount() {
    this.setState({
      users: await this.usersService.getAllUsers().then(value => value)
    })
  }




  render() {
    return (
      <div>
        {
          this.state.users.map(user => <SingleUser user={user} key={user.id}/>)
        }
      </div>
    );
  }
}

export default Users;
