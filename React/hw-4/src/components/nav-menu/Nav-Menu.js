import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

import SearchBtn from "./search-btn/SearchBTN";


class NavMenu extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark navbar-expand bg-dark font-goldman">

        <div className="col-10 offset-1 d-flex justify-content-between align-items-center">
          <div className="col-2">
            <NavLink className="navbar-brand" to={'/'}>HW-4</NavLink>
          </div>

          <div className="col-2">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink className="nav-item nav-link mr-2 p-1" to={'/users'}>Users</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-item nav-link mr-2 p-1" to={'/posts'}>Posts</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-item nav-link mr-2 p-1" to={'/comments'}>Comments</NavLink>
              </li>
            </ul>
          </div>

          <SearchBtn/>
        </div>
        
      </nav>
    );
  }
}

export default NavMenu;
// <NavLink className="nav-item mr-2 p-1" to={'/users'}>Users</NavLink>
// <NavLink className="nav-item mr-2 p-1" to={'/posts'}>Posts</NavLink>
// <NavLink className="nav-item mr-2 p-1" to={'/comments'}>Comments</NavLink>
