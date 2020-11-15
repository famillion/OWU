import React, {Component} from 'react';

import {UsersConsumer} from "../../services/UsersContextService";

class HomePage extends Component {
  render() {
    return (
      <div className="text-field col-8 offset-2">
        <span className="font-goldman">React Router</span>
      </div>
    );
  }
}

export default HomePage;
