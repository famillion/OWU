import React, {useEffect, useState} from "react";

import {getAllPosts, getPostByUserId} from "../../../Services/ServicesALL";
import SinglePostMin from "../../Posts/Single-post-min/SinglePostMin";

const UserPosts = props => {

  let {id: userId} = props.match.params;

  let [posts, setPosts] = useState([]);

  useEffect(() => {
    let res = [];
    const fetchData = async () => {
      if (userId) {
        await getPostByUserId(userId)
          .then(value => res = value);
      } else {
        await getAllPosts().then(value => res = value);
      }
      setPosts(res);
    }

    fetchData().then();
  },[userId]);

  return (
    <React.Fragment>
      {
        posts && posts.map(post => <SinglePostMin post={post} key={post.id}/>)
      }
    </React.Fragment>
  );
};

export default UserPosts;
