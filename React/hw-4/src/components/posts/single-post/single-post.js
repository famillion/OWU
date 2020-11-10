import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class SinglePost extends Component {
  render() {
    let {title, body, id} = this.props.post;
    return (
      <div className="text-field-mini col-8 offset-2 p-5">
          <span className="font-goldman font-weight-bold">{title}</span>
          <hr className="my-2"/>
          <span className="lead small text-muted p-4">{body.substr(0,50)}...</span>
        <div className="mt-4 d-flex justify-content-center align-items-center">
          <NavLink className="btn btn-secondary"
          to={`/posts/${id}`}
          >
            Read More
          </NavLink>
        </div>
      </div>

    );
  }
}

export default SinglePost;
