import React from 'react';

import logo from './img/logo.png';
import cart from './img/cart_icon.png';
import './Header.css';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {Link} from "react-router-dom";
import {withRouter} from "react-router";

const Header = (props) => {
  let {cartCount, likeCount} = props;
  let navMenuClasses = `shadow nav-menu pl-3 pr-3 navbar fixed-top`;

  return (
    <header>
      <Navbar className={navMenuClasses} collapseOnSelect expand="sm" variant="dark">
        <Navbar.Brand onClick={() => props.history.push('/')} className="nav-menu-brand">
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="logo"
          />
          Tisto
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto ml-5">
            <Nav.Link className="nav-menu-links" onClick={() => props.history.push('/')}>Головна</Nav.Link>
            <Nav.Link className="nav-menu-links" onClick={() => props.history.push('/liked')}>Вибране <span className="badge badge-light">{likeCount}</span></Nav.Link>
          </Nav>
          <Nav className="ml-5">
            <Link to={'/cart'} className="m-0 p-1"> <img
              src={cart}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="logo"
            /><span className="badge badge-light ml-1 mt-2">{cartCount}</span></Link>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default withRouter(Header);
