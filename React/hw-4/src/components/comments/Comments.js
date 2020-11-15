import React, {Component} from 'react';
import {CommentsService} from "../../services/CommentsService";
import SingleComment from "./single-comment/single-comment";

class Comments extends Component {

  state = {
    comments: []
  }

  commentsService = new CommentsService();

  async componentDidMount() {
    this.setState({
      comments: await this.commentsService.getAllComments()
    })
  }

  render() {
    return (
      <React.Fragment>
        {
          this.state.comments.map(comment => <SingleComment comment={comment} key={comment.id}/>)
        }
      </React.Fragment>
    );
  }
}

export default Comments;
