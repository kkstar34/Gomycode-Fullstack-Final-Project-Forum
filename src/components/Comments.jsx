import React, { useEffect, useState } from "react";
import Comment from "./Comment";
import { doc, getDoc } from "firebase/firestore";
import db from "../config/firebaseConfig";

function Comments({ comments, question }) {
   let qe = doc(db, "users", question.user_id);
  const [u, setU] = useState();

  useEffect(() => {
   
     getDoc(qe).then((doc) => {
        setU(doc.data());
     });
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
