import React from "react";
import {withRouter} from "react-router";


const SingleComment = props => {

  let {name, id, postId, email, body} = props.comment;

  return (
    <div className="jumbotron col-lg-8 offset-lg-2 col-md-8 offset-md-2 col-sm-12 content-block p-5 mt-4">
      <h2 >{name}</h2>
      <p className="lead">Post ID: {postId} | Comment ID: {id}</p>
      <p className="lead">{email}</p>
      <hr className="my-2"/>
        <p>{body}</p>
    </div>
  );
};

export default withRouter(SingleComment);
