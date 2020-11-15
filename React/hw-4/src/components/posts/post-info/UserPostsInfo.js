import React, {Component} from 'react';

import {PostsService} from "../../../services/PostsService";
import SinglePostInfo from "./single-post-info/SinglePostInfo";

class UserPostsInfo extends Component {

  state = {
    posts: []
  }

  postsService = new PostsService();

  async componentDidMount() {
    let {id} = this.props.match.params;

    this.setState({
      posts: await this.postsService.getPostsByUserID(id).then(value => value)
    })
  }

  render() {
    return (
      <React.Fragment>
        {
          this.state.posts.map(post=><SinglePostInfo post={post} params={this.props.match} key={post.id}/>)
        }
      </React.Fragment>
    );
  }
}

export default UserPostsInfo;
