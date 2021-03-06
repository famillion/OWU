import React, {Component} from 'react';
import {PostsService} from "../../../services/PostsService";
import SinglePostInfo from "./single-post-info/SinglePostInfo";

class PostInfo extends Component {

  state = {
    post: []
  }

  postsService = new PostsService();

  async componentDidMount() {
    let {id} = this.props.match.params;
    this.setState({post: await this.postsService.getPostById(id)})
  }

  render() {

    return (
      <React.Fragment>
        <SinglePostInfo post={this.state.post} params={this.props.match}/>
      </React.Fragment>
    );
  }
}

export default PostInfo;
