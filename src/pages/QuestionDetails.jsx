import React from 'react'
import QuestionHeader from '../components/QuestionHeader';
import { Link } from 'react-router-dom';
import AddComment from '../components/AddComment';
import Comments from './../components/Comments';

function QuestionDetails() {
  return (
    <div className="w-100 h-100 bg-white">
        <div className="container" style={{marginTop: "3.5rem"}}>
            <div className="row">
                <div className="col-md-12 col-lg-9">
                        <QuestionHeader/>
                        <hr />
                        <Comments/>
                        <AddComment/>
                </div>
                <div className="col-md-12 col-lg-3">
                    <Link to='/'>
                        Retour <i className="la la-arrow-left"></i>
                    </Link>
                </div>
            </div>
        </div>
    </div>

  )
}

export default QuestionDetails