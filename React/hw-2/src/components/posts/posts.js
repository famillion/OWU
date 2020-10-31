import React, {Component} from 'react';
import {PostsService} from "../../services/posts-service";
import SinglePost from "./single-post/single-post";

class Posts extends Component {

  state = {
    posts: []
  };

  postsAPI = new PostsService();

  async componentDidMount() {
    this.setState({
      posts: await this.postsAPI.getAllPosts()
    });
  }

  render() {
    return (
      <div>
        {
          this.state.posts.map(post => <SinglePost post={post} key={post.id}/>)
        }
      </div>
    );
  }
}

export default Posts;
