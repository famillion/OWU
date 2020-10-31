import React, {Component} from 'react';
import {CommentsService} from "../../services/comments-service";
import SingleComment from "./single-comment/single-comment";

class Comments extends Component {

  state = {
    comments: []
  }

  commentsAPI = new CommentsService();

  async componentDidMount() {
    this.setState({
      comments: await this.commentsAPI.getAllComments()
    });
  }

  render() {
    return (
      <div>
        {
          this.state.comments.map(comment=><SingleComment comment={comment} key={comment.id}/>)
        }
      </div>
    );
  }
}

export default Comments;
