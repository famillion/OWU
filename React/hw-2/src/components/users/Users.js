import React, {Component} from 'react';
import SingleUser from "./single-user/single-user";
import {UsersService} from "../../services/users-service";


class Users extends Component {

    state = {
        users: [],
    };
    usersAPI = new UsersService();

    async componentDidMount() {
        this.setState({
            users: await this.usersAPI.getAllUsers(),
        });
    }

    render() {

        return (
            <div>
                {
                    this.state.users.map(user=><SingleUser user={user} key={user.id}/>)
                }
            </div>
        );
    }
}

export default Users;
