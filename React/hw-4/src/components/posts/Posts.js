import React, {Component} from 'react';
import {PostsService} from "../../services/PostsService";
import SinglePost from "./single-post/single-post";

class Posts extends Component {

  state = {
    posts: [],
  };


  postsAPI = new PostsService();

  async componentDidMount() {
    this.setState({
      posts: await this.postsAPI.getAllPosts().then(value => value),
    })
  }


  render() {

    return (
      <div>
        {
          this.state.posts.map(post => <SinglePost post={post} isSingle={this.state.isSingle} key={post.id}/>)
        }
      </div>
    );
  }
}

export default Posts;
