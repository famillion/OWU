import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";

import Users from "../components/users/Users";
import HomePage from "../components/home-page/HomePage";
import UserInfo from "../components/users/user-info/UserInfo";
import Oops404 from "../components/404/Oops404";
import Posts from "../components/posts/Posts";
import UserPostsInfo from "../components/posts/post-info/UserPostsInfo";
import PostInfo from "../components/posts/post-info/PostInfo";
import Comments from "../components/comments/Comments";
import PostComments from "../components/comments/post-comments/post-comments";


class MyRouter extends Component {
  render() {
    return (
      <Switch>
        <Route path='/users/:id/user_posts/comments' exact component={PostComments}/>
        <Route path='/users/:id/user_posts' exact component={UserPostsInfo}/>
        <Route path='/posts/:id/comments' exact component={PostComments}/>
        <Route path='/posts/:id' exact component={PostInfo}/>
        <Route path='/users/:id' exact component={UserInfo}/>
        <Route path='/posts' exact component={Posts}/>
        <Route path='/comments' exact component={Comments}/>
        <Route path='/users' exact render={()=><Users/>}/>
        <Route path='/' exact render={() => <HomePage/>}/>
        <Route render={() => <Oops404/>}/>
      </Switch>
    );
  }
}

export default MyRouter;
