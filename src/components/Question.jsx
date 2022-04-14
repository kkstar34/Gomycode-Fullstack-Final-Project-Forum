import React from 'react'
import { Link } from 'react-router-dom';
import Tag from './Tag';

function Question() {
  return (
    <>

<div className="card no-border p-3 my-3">
                    <div className="question ">
                        <h2 className="question__title">
                            <Link to={`question/1/details`} className="question__link">
                                Question 1
                            </Link>
                        </h2>
                        <div className="question__time">il y'a 2 min</div>
                        <p className="question__description my-2">
                            Contenu de la question
                        </p>
                        <div className="d-flex justify-content-between">
                            <span className="question__answers-count">2 reponses</span>
                            <div>
                                {/* map tags */}
                                <Tag/>
                            </div>
                        </div>
                    </div>
                </div>
    </>
  )
}

export default Question