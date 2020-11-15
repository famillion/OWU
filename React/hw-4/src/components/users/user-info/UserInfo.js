import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import {UsersService} from "../../../services/UsersService";

class UserInfo extends Component {

  state = {
    user: {}
  };


  usersService = new UsersService();

  async componentDidMount() {
    const {id} = this.props.match.params;
    this.setState({
      user: await this.usersService.getUserByID(id)
    })
  }

  getUser = async ()=>{
    const {id} = this.props.match.params;
    this.state.user = await this.usersService.getUserByID(id);
  }

  render() {

    let {name, username, id, email, city, website} = this.state.user;
    return (
      <div className="text-field-mini col-8 offset-2 p-5">
        <div className="d-flex">
          <span className="w-50 font-goldman font-weight-bold">Name: </span>
          <span className="w-50 text-monospace">{name}</span>
        </div>
        <hr className="my-2"/>
        <div className="d-flex">
          <span className="w-50 font-goldman font-weight-bold">Username: </span>
          <span className="w-50 text-monospace">{username}</span>
        </div>
        <hr className="my-2"/>
        <div className="d-flex">
          <span className="w-50 font-goldman font-weight-bold">ID: </span>
          <span className="w-50 text-monospace">{id}</span>
        </div>
        <hr className="my-2"/>
        <div className="d-flex">
          <span className="w-50 font-goldman font-weight-bold">Email: </span>
          <span className="w-50 text-monospace">{email}</span>
        </div>
        <hr className="my-2"/>
        <div className="d-flex">
          <span className="w-50 font-goldman font-weight-bold">City: </span>
          <span className="w-50 text-monospace">{city}</span>
        </div>
        <hr className="my-2"/>
        <div className="d-flex">
          <span className="w-50 font-goldman font-weight-bold">Website: </span>
          <span className="w-50 text-monospace">{website}</span>
        </div>
        <hr className="my-2"/>
        <div className="d-flex justify-content-between mt-3 pt-3">
          <NavLink className="btn btn-secondary shadow"
                   to={`${id}/user_posts`}
          >
            Posts
          </NavLink>
          <button className="btn btn-secondary shadow" onClick={()=>this.props.history.push('/users')}>Back</button>
        </div>

      </div>
    );
  }
}

export default UserInfo;
