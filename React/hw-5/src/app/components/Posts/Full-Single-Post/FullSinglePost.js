import React, {useState} from "react";
import {Link, withRouter} from "react-router-dom";

import {backBTN} from "../../../Services/backBTN";
import SinglePostMin from "../Single-post-min/SinglePostMin";
import SingleComment from "../../Comments/Single-comment/SingleComment";

const FullSinglePost = props => {

  let [commentToggle, setCommentToggle] = useState(false)

  let {url: path} = props.match;

  let backPath = backBTN(path);

  let {title, userId, id, body} = props.post;

  let {postComments} = props

  return (
    <div className="jumbotron col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-sm-10 offset-sm-1 content-block-noclickble p-5 mt-4">
      <h1 className="display-5">{title}</h1>
      <p className="lead">User ID: {userId} | Post ID: {id}</p>
      <hr className="my-2"/>
        <p>{body}</p>

      <div className="d-flex justify-content-between mt-3 pt-3">
        <button onClick={()=>setCommentToggle(!commentToggle)} className="btn btn-secondary shadow w-25">Comments</button>
        <Link to={`${backPath}`} className="btn btn-secondary shadow w-25">Back</Link>
      </div>
      {
        commentToggle && postComments.map(comment=><SingleComment comment={comment} key={comment.id}/>)
      }
    </div>
  );
};

export default withRouter(FullSinglePost);
