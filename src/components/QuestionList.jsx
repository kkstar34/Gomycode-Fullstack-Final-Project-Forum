import React from 'react'
import Question from './Question';
import { Link } from 'react-router-dom';

function QuestionList() {
  return (
    <>
         <div className="col-lg-9 col-md-12">
                <div className="d-flex justify-content-between">
                    <span>
                       10 questions.
                    </span>
                    <Link className="btn btn-primary" to="add-question">Poser une question <i className="la la-arrow-right"></i></Link>
                   
                </div>
                
                    {/* <div className="empty-question">
                        <h2 className="empty-question__title text-center mt-4">Il n'y a pas encore de questions...</h2>
                        <div>
                            @include("illustrations.empty-questions")
                        </div>
                    </div> */}



                    {/* map Questions */}

                    <Question/>

                

                {/* @foreach($tab as $t)

                <p>{{$t}}</p>

                @endforeach
                 */}
                {/* <div>
                {{$questions->links()}}
                </div> */}
            </div>
    </>
  )
}

export default QuestionList