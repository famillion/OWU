import React, {Component} from 'react';
import Users from "../users/Users";
import closeImg from "./close.png"
import './nav-menu.css';
import Posts from "../posts/posts";
import Comments from "../comments/comments";

class NavMenu extends Component {

  state = {
    menuItem: 0
  };

  render() {
    let value = this.state.menuItem;
    return (
      <div>
        <div className="d-flex flex-row justify-content-center jumbotron rounded shadow-lg">
          <div className="p-2 col-3">
            <button type="button" className="btn btn-dark btn-lg btn-block"
                    onClick={() => this.choose(1)}
            >Users
            </button>
          </div>
          <div className="p-2 col-3">
            <button type="button" className="btn btn-dark btn-lg btn-block"
                    onClick={() => this.choose(2)}
            >Posts
            </button>
          </div>
          <div className="p-2 col-3">
            <button type="button" className="btn btn-dark btn-lg btn-block"
                    onClick={() => this.choose(3)}
            >Comments
            </button>
          </div>
          <div className="p-2 col-1">
            <img src={closeImg} alt="close" className="rounded shadow close-img w-100 h-100"
                 onClick={() => this.choose(0)}
            />
          </div>
        </div>
        {
          (() => {
            switch (value) {
              case 1:
                return (
                  <div className="d-flex flex-row justify-content-center jumbotron mt-2 rounded shadow-lg">
                    <Users/>
                  </div>);
              case 2:
                return (
                  <div className="d-flex flex-row justify-content-center jumbotron mt-2 rounded shadow-lg">
                    <Posts/>
                  </div>);
              case 3:
                return (
                  <div className="d-flex flex-row justify-content-center jumbotron mt-2 rounded shadow-lg">
                    <Comments/>
                  </div>);
              default:
                return;
            }
          })()
        }
      </div>
    );
  }

  choose(number) {
    this.setState({
      menuItem: number
    });

  }
}

export default NavMenu;
