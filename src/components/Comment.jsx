import React from 'react'
import { useEffect, useState } from 'react';
import { getDoc, doc} from 'firebase/firestore';
import db from '../config/firebaseConfig';
import moment from "moment";
import CommentModel from './../models/Comment';

function Comment({comment}) {
    const [u, setU] = useState();
    const [loading, setLoading] = useState(false);
    const commentModel = new CommentModel(comment.user_uid);

    useEffect(() =>{
      const userPromise =  commentModel.getUser();
      setLoading(true)
      userPromise.then((user) => {
        setU(user);
        setLoading(false)
      })
    }, [])
  return (
      <>
    {loading ? 'loading...' : <div className="comment "> 
    {/* good-answer */}
        <a href="#empty" className="comment__likes-count no-underline">
          <i className="la la-heart-o"></i>
          <span>7</span>
        </a>
        <div className="comment__content">
          <div className="comment__author">
            <div className="comment__author-info">
              <img
                src={process.env.PUBLIC_URL + "/img/avatar.png"}
                alt=""
                width="25"
                height="25"
              />
              <span className="comment__author-name">{u ? u.name : ""}</span>
            </div>
            <div className="comment__ago">
              <i className="la la-clock-o"></i>
              {/* {moment(comment.updated_at.toDate()).calendar()} */}
              il y'a 1min
            </div>
          </div>
          <div className="comment__text">
            <p>{comment.content}</p>
          </div>

          {/* <button className="btn btn-danger text-white text-right shadow-sm ms-1">Delete</button>
                            <button className="btn btn-primary text-white text-right shadow-sm ms-1" >Edit</button>
                            <button className="btn btn-success text-white text-right shadow-sm ms-1" >Best Answer</button> */}
        </div>
      </div>}

      </>
  )
}

export default Comment