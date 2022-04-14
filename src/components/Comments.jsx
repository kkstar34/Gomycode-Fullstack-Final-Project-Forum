import React from "react";

function Comments() {
  return (
    <>
      <div className="mb-4 answers-count ">
        <span className="text-dark-blue font-weight-bold">3 reponses</span>
        <span className="d-flex align-items-center">
          <img
            src={process.env.PUBLIC_URL + "/img/avatar.png"}
            alt=""
            width="20"
            height="20"
          />
          <span className="text-black ml-2">Kouyate Karim</span>
        </span>
      </div>

      {/* map comments */}

      <div className="comment good-answer">
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
              <span className="comment__author-name">Kouyate Karim</span>
            </div>
            <div className="comment__ago">
              <i className="la la-clock-o"></i>
              il y'a 1min.
            </div>
          </div>
          <div className="comment__text">
            <p>Content</p>
          </div>

          {/* <button className="btn btn-danger text-white text-right shadow-sm ms-1">Delete</button>
                            <button className="btn btn-primary text-white text-right shadow-sm ms-1" >Edit</button>
                            <button className="btn btn-success text-white text-right shadow-sm ms-1" >Best Answer</button> */}
        </div>
      </div>
    </>
  );
}

export default Comments;
