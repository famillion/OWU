import React, {Component} from "react";

import './App.css';
import MyRouter from "../../Router/MyRouter";
import NavMenu from "../nav-menu/Nav-Menu";
import {UsersProvider} from "../../services/UsersContextService";
import {UsersService} from "../../services/UsersService";

class App extends Component{

  state = {
    users: []
  };

  usersService = new UsersService();

  async componentDidMount() {
    this.setState({
      users: await this.usersService.getAllUsers().then(value => value)
    })
  }

  render(){
    let {users} = this.state;

    return (
      <div>
        <NavMenu/>
        <UsersProvider value={users}>
          <MyRouter/>
        </UsersProvider>

      </div>

    );
  }
}

export default App;
