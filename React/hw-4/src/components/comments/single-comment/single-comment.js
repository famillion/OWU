import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class SingleComment extends Component {

  render() {
    let {name, postId, id, email, body} = this.props.comment;
    return (
      <div className="text-field-mini col-8 offset-2 p-5">
        <span className="font-goldman font-weight-bold">{name}</span>
        <div>
          <small className="lead text-muted">Post ID: {postId} | Comment ID: {id}</small>
        </div>
        <div>
          <small className="lead text-muted">{email}</small>
        </div>
        <hr className="my-2"/>
        <span className="lead small text-muted p-4">{body}</span>
        <div className="mt-4 d-flex justify-content-between align-items-center">
        </div>
      </div>
    );
  }
}

export default SingleComment;
