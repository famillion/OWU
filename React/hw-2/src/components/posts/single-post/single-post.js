import React, {Component} from 'react';

class SinglePost extends Component {

  render() {
    let {userId, id, title, body} = this.props.post;
    return (
      <div>
        <div className="jumbotron m-2 rounded shadow-lg">
          <h1 className="display-4">{title}</h1>
          <p className="lead text-muted">User ID: {userId} | Post ID: {id}</p>
          <hr className="my-2"/>
            <p>{body}</p>
        </div>
      </div>
    );
  }
}

export default SinglePost;
