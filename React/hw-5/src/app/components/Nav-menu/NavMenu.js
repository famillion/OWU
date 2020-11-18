import React from "react";
import Navbar from "react-bootstrap/Navbar";
import {Link, NavLink} from "react-router-dom";
import Nav from "react-bootstrap/Nav";

import './NavMenu.css';

const NavMenu = () => {
  return (
    <Navbar bg="dark" expand="sm" variant="dark">
      <NavLink className="navbar-brand"
      to={'/'}
      >
        HOME
      </NavLink>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" style={{marginLeft:'40px'}}>
          <div className="nav-item">
            <Link className="nav-link" to={'/users'}>Users</Link>
          </div>
          <div className="nav-item">
            <Link className="nav-link" to={'/posts'}>Posts</Link>
          </div>
          <div className="nav-item">
            <Link className="nav-link" to={'/comments'}>Comments</Link>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}


export default NavMenu;
