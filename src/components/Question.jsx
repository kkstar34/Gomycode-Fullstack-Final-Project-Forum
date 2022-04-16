import React from 'react'
import { Link } from 'react-router-dom';
import Tag from './Tag';
import moment from 'moment';
function Question({question}) {
    
  return (
    <>

<div className="card no-border p-3 my-3">
                    <div className="question ">
                        <h2 className="question__title">
                            <Link to={`/question/${question.id}/details`} className="question__link">
                            {question.title}
                            </Link>
                        </h2>
                        <div className="question__time">{moment(question.updated_at.toDate()).calendar()}</div>
                        <p className="question__description my-2">
                            {question.content}
                        </p>
                        <div className="d-flex justify-content-between">
                            <span className="question__answers-count">{ question.comments ? question.comments.length : 0} reponses</span>
                            <div>
                                {/* map tags */}
                              {question.categories.map((category) =>{
                                  return  <Tag tag={category.title}  key={category.id}/>
                              })}
                               
                            </div>
                        </div>
                    </div>
                </div>
    </>
  )
}

export default Question