import React, {Component} from 'react';
import {CommentsService} from "../../../services/CommentsService";
import SingleComment from "../single-comment/single-comment";

class PostComments extends Component {

  state={
    comments:[]
  }

  commentsService = new CommentsService();

  async componentDidMount() {
    let {id} = this.props.match.params;

    this.setState({
      comments: await this.commentsService.getCommentsByPostID(id).then(value => value)
    })
  }

  render() {
    return (
      <React.Fragment>
        {
          this.state.comments.map(comment => <SingleComment comment={comment} key={comment.id} />)
        }
      </React.Fragment>
    );
  }
}

export default PostComments;
