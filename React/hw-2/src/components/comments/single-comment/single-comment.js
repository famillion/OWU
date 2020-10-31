import React, {Component} from 'react';

class SingleComment extends Component {
  render() {

    let {postId, id, name, email, body} = this.props.comment;

    return (
      <div className="jumbotron m-2 rounded shadow-lg">
        <h1 className="display-4">{name}</h1>
        <p className="lead text-muted">Email: {email} | Post ID: {postId} | Comment ID: {id}</p>
        <hr className="my-2"/>
          <p>{body}</p>
      </div>
    );
  }
}

export default SingleComment;
