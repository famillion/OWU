import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class NavMenu extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark font-goldman">
        <NavLink className="navbar-brand" to={'/'}>HW-4</NavLink>
        <div className="col-8">
          <NavLink className="nav-item mr-2 p-1" to={'/users'}>Users</NavLink>
          <NavLink className="nav-item mr-2 p-1" to={'/posts'}>Posts</NavLink>
          <NavLink className="nav-item mr-2 p-1" to={'/comments'}>Comments</NavLink>
        </div>
      </nav>
    );
  }
}

export default NavMenu;
