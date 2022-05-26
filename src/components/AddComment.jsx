import React from "react";
import { useState } from "react";
import { useUserAuth } from "./../context/UserAuthContextProvider";
import { updateDoc, arrayUnion, where, collection, query, getDocs } from "firebase/firestore";
import db from "../config/firebaseConfig";
import { useDispatch } from 'react-redux';
import { addComment } from './../redux/actions/questionAction';
import UserModel from './../models/User';


function AddComment({ question }) {
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const { user } = useUserAuth();
  const [userF, setUserF] = useState();
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userModel = new UserModel();
    const userPromise = userModel.getUser(user.email);
    userPromise.then((user) => {
      setUserF(user);
    })
    if(comment === ""){
      return false;
     
    }
    let commentObj = {
      user_ref : userF.userRef,
      user_uid: userF.userId,
      content: comment,
      created_at : new Date(), 
      updated_at : new Date()
    };
    setLoading(true);
    await updateDoc(question.ref, {
      comments: arrayUnion(commentObj),
    });
    document.getElementById("commentInput").value = "";
    setLoading(false);
    dispatch(addComment(commentObj))
  };
  return (
    <>
      <div className="mt-3">
        <form onSubmit={handleSubmit}>
          <textarea
            name="content"
            id="commentInput"
            cols="30"
            rows="3"
            className="form-control"
            placeholder="Ajouter un commentaire..."
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
          <div className="d-flex justify-content-end mt-3">
            <button
              className="btn btn-primary text-white text-right shadow-sm"
              type="submit"
            >
              {loading ? (
                <>

                  <span
                    className="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  Loading...
                </>
              ) : (
                <>Commenter </>
              )}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddComment;
