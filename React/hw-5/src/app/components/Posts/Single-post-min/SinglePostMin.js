import React from "react";
import {Link, withRouter} from "react-router-dom";

const SinglePostMin = props => {

  let {url: path} = props.match;
  let {title, id, body} = props.post;
  return (
    <div
      className="jumbotron col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-sm-10 offset-sm-1 content-block p-5 mt-4">
      <h1 className="display-5">{title}</h1>
      <hr className="my-2"/>
      <p>{body.slice(0, 50)}</p>
      <div className="d-flex justify-content-end mt-3 pt-3">
        <Link to={`${path}/postId=${id}`} className="btn btn-secondary shadow w-25">Read more</Link>
      </div>
    </div>
  );
};

export default withRouter(SinglePostMin);
