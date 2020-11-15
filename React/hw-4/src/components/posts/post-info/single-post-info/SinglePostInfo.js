import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class SinglePostInfo extends Component {


  render() {
    let {title, body, id, userId} = this.props.post;
    let {url} = this.props.params;
    let postCommUrl = url;
    let urlArr = url.split('/');
    urlArr.pop();
    url = urlArr.join('/');

    return (
      <div className="text-field-mini col-8 offset-2 p-5">
        <span className="font-goldman font-weight-bold">{title}</span>
        <div>
          <small className="lead text-muted">User ID: {userId} | Post ID: {id}</small>
        </div>
        <hr className="my-2"/>
        <span className="lead small text-muted p-4">{body}</span>
        <div className="mt-4 d-flex justify-content-between align-items-center">
          <NavLink className="btn btn-secondary shadow"
                  to={`${postCommUrl}/comments`}
          >
            Comments
          </NavLink>
          <NavLink className="btn btn-secondary shadow" to={url}>Back</NavLink>
        </div>
      </div>
    );
  }
}

export default SinglePostInfo;
