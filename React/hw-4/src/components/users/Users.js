import React, {Component} from 'react';

import {UsersConsumer} from "../../services/UsersContextService";
import SingleUser from "./single-user/Single-User";

class Users extends Component {


  render() {
    return (
      <UsersConsumer>

          {
            (value)=>value.map(user => <SingleUser user={user} key={user.id}/>)
          }

      </UsersConsumer>

    );
  }
}

export default Users;
