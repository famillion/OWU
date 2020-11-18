import React, {useEffect, useState} from "react";
import FullSinglePost from "../../../Posts/Full-Single-Post/FullSinglePost";
import {withRouter} from "react-router";
import {getCommentByPostId, getPostByPostId} from "../../../../Services/ServicesALL";


const SingleUserPostWithComments = props => {

  let [post, setPost] = useState({});
  let [comments, setComments] = useState([]);

  let {postId} = props.match.params;
  postId = postId.split('=').pop();

  useEffect(() => {
    let resPost = {};
    let resComm = [];
    const fetchData = async()=>{
      await getPostByPostId(postId)
        .then(value => resPost = value);
      await getCommentByPostId(postId)
        .then(comms => resComm = comms);

      setPost(resPost);
      setComments(resComm);
    }

    fetchData().then();

  }, [postId])
  return (
    <React.Fragment>
      <FullSinglePost post={post} postComments={comments}/>
    </React.Fragment>
  );
};

export default withRouter(SingleUserPostWithComments);
