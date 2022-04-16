import React from 'react'
import Tag from './Tag';

function QuestionHeader({question}) {
  return (
    <>
        <span className="question-detail__head">
                        {question.title}
                    </span>
                    <div className="question-detail__title">
                        <a href="#empty" className="d-flex flex-column align-items-center no-underline ">
                            <i className="la la-heart-o"></i>
                            <span>
                                10
                            </span>
                        </a>
                        <div>
                            <h1>
                                {question.title}
                            </h1>
                            <div>
                                {/* map Questions tags  */}
                                <Tag/>
                            </div>
                        </div>
                    </div>

                    <div className="question-detail__content">
                        <pre>
                            {question.content}
                        </pre>
                       
                        {/* <button className="btn btn-danger text-white text-right shadow-sm ms-1" >Delete</button>
                        <button className="btn btn-primary text-white text-right shadow-sm ms-1">Edit</button>
                        <button className="btn btn-danger text-white text-right shadow-sm ms-1" >🔒Fermer</button> */}
                    </div>
    </>
  )
}

export default QuestionHeader