import React from "react";
import {Route, Switch} from "react-router-dom";

import Home from "../components/Home/Home";
import {oops404} from "../components/404/oops404";
import Users from "../components/Users/Users";
import FullUserInfo from "../components/Users/Full-User-Info/FullUserInfo";
import UserPosts from "../components/Users/User-Posts/UserPosts";
import SingleUserPostWithComments from "../components/Users/User-Posts/User-Post-Comments/SingleUserPostWithComments";
import Comments from "../components/Comments/Comments";


const RoutesComponent = () => {
  return (
    <Switch>
      <Route path={'/users/:id/:name/:postId'} exact component={SingleUserPostWithComments}/>
      <Route path={'/users/:id/:name'} exact component={UserPosts}/>
      <Route path={'/posts/:postId'} exact component={SingleUserPostWithComments}/>
      <Route path={'/users/:id'} exact component={FullUserInfo}/>
      <Route path={'/comments'} exact component={Comments}/>
      <Route path={'/posts'} exact component={UserPosts}/>
      <Route path={'/users'} exact component={Users}/>
      <Route path={'/'} exact component={Home}/>

      <Route exact component={oops404}/>
    </Switch>
  );
}

export default RoutesComponent;
