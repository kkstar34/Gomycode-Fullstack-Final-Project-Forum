import React from "react";
import Comment from './Comment';

function Comments({comments}) {

  return (
    <>
      {comments && comments.map((comment, i) => { return <Comment comment={comment} key={i}/>})}
    </>
  );
}

export default Comments;
