import React from 'react'
import { Link } from 'react-router-dom';
import Tag from './Tag';

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
                        <div className="question__time">il y'a 2 min</div>
                        <p className="question__description my-2">
                            {question.content}
                        </p>
                        <div className="d-flex justify-content-between">
                            <span className="question__answers-count">2 reponses</span>
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