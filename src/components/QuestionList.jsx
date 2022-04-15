import React from 'react'
import Question from './Question';
import { Link } from 'react-router-dom';
import { query, collection, onSnapshot, getDoc } from 'firebase/firestore';
import { useState } from 'react';
import { useEffect } from 'react';
import db from '../config/firebaseConfig';

function QuestionList() {

const [questions, setquestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect( () =>{

    const q = query(collection(db, "questions"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let quizArray = [];
      let catArray = [];
      querySnapshot.forEach((doc) => {
        
        
        doc.data().categories.forEach((category) => {
            getDoc(category).then(data => {
                catArray.push(data.data());
            })       
        })
        
        quizArray.push({ ...doc.data(), id: doc.id , categories: catArray});
      });
      setquestions(quizArray);
      setLoading(false);
    });

  

  return() =>{
    unsub();
  }

    

  }, [])
  return (
    <>
         <div className="col-lg-9 col-md-12">
                <div className="d-flex justify-content-between">
                    <span>
                       10 questions.
                    </span>
                    <Link className="btn btn-primary" to="/add-question">Poser une question <i className="la la-arrow-right"></i></Link>
                   
                </div>
                
                    {/* <div className="empty-question">
                        <h2 className="empty-question__title text-center mt-4">Il n'y a pas encore de questions...</h2>
                        <div>
                            @include("illustrations.empty-questions")
                        </div>
                    </div> */}


                    {/* map Questions */}
                        {questions.map((question) =>{
                        return <Question question={question} key={question.id}/>
                        })}
                  

                

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