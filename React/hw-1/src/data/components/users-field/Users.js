import React, {Component} from 'react';
import {users} from "../../users-data/users-data";
import SingleUser from "./single-user/single-user";

class Users extends Component {
    render() {
        return (
            <div className={'jumbotron'}>
                {
                    users.map(user => <SingleUser user={user} key={user.id}/>)
                }
            </div>
        );
    }
}

export default Users;

