import React, { useEffect, useState } from "react";
import Comment from "./Comment";
import QuestionModel from './../models/Question';

function Comments({ comments, question }) {
   const questionModel = new QuestionModel(question.user_id);
  const [u, setU] = useState();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
      setLoading(true)
      const userPromise = questionModel.getUser();
      userPromise.then((user) => {
        setU(user);
        setLoading(false);
      })
  }, []);
  return (
    <>
     <div className="mb-4 answers-count ">
        <span className="text-dark-blue font-weight-bold">
          {comments && comments.length} reponses
        </span>
        <span className="d-flex align-items-center">
          <img
            src={process.env.PUBLIC_URL + "/img/avatar.png"}
            alt=""
            width="20"
            height="20"
          />
          <span className="text-black ml-2">{u ? u.name : null}</span>
        </span>
      </div>
      {comments &&
        comments.map((comment, i) => {
          return <Comment comment={comment} key={i} />;
        })}
    </>
  );
}

export default Comments;
