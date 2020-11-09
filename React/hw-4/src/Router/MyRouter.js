import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import Users from "../components/users/Users";

class MyRouter extends Component {
  render() {
    return (
        <Switch>
          <Route path='/users' exact component={Users}/>
          <Route path='/' exact render={()=>(<div className="text-field">
            <span className="font-goldman">React Router</span>
          </div>)}/>
        </Switch>
    );
  }
}

export default MyRouter;
