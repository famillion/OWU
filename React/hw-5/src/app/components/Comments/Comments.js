import React, {useEffect, useState} from "react";
import {getAllComments} from "../../Services/ServicesALL";
import SingleComment from "./Single-comment/SingleComment";

const Comments = props => {

  let [comments, setComments] = useState([]);

  useEffect(() => {
    let res = [];
    const fetchData = async () => {
      await getAllComments().then(value => res = value);
      setComments(res);
    };

    fetchData().then();

  }, []);

  return (
    <React.Fragment>
      {
        comments.map(comment => <SingleComment comment={comment}/>)
      }
    </React.Fragment>
  );
};

export default Comments;
