import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";

import Users from "../components/users/Users";
import HomePage from "../components/home-page/HomePage";
import UserInfo from "../components/users/user-info/UserInfo";
import Oops404 from "../components/404/Oops404";
import Posts from "../components/posts/Posts";
import PostInfo from "../components/posts/post-info/PostInfo";

class MyRouter extends Component {
  render() {
    return (
      <Switch>
        <Route path='/posts/:id' exact component={PostInfo}/>
        <Route path='/users/:id' exact component={UserInfo}/>
        <Route path='/posts' exact component={Posts}/>
        <Route path='/users' exact component={Users}/>
        <Route path='/' exact render={() => <HomePage/>}/>
        <Route render={() => <Oops404/>}/>
      </Switch>
    );
  }
}

export default MyRouter;
