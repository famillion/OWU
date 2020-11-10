import React, {Component} from 'react';
import {NavLink} from "react-router-dom";


class SingleUser extends Component {
  render() {
    let {id, name, username, email, address: {city}, website} = this.props.user;
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
        <div className="d-flex justify-content-center mt-3 pt-3">
         <NavLink className="btn btn-secondary shadow"
          to={`users/${id}`}
         >
           More info
         </NavLink>
        </div>

      </div>
    );
  }
}

export default SingleUser;
