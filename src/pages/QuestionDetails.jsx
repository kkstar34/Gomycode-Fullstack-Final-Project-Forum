import React from 'react'
import QuestionHeader from '../components/QuestionHeader';
import { Link, useParams } from 'react-router-dom';
import AddComment from '../components/AddComment';
import Comments from '../components/Comments';
import { useEffect, useState } from 'react';
import { getDoc, doc, onSnapshot } from 'firebase/firestore';
import db from '../config/firebaseConfig';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleQuestion } from '../redux/actions/questionAction';

function QuestionDetails() {

    // const [question, setQuestion] = useState();
    const dispatch = useDispatch();
    let id = useParams().id;
    let q = doc(db, "questions", id);
   
    const question = useSelector((state)=> {
        return state.questions;
    } )
    
  

   
    useEffect(() => {
        const sub = async()=>{
         const doc =await getDoc(q);
        dispatch(getSingleQuestion({...doc.data(), ref  : doc.ref}));
        }
        // const unsb =  onSnapshot(q, async(querySnapshot)=>{
        //     setQuestion({...querySnapshot.data(), ref  : querySnapshot.ref})
        // })

        sub()

        return ()=>{
            // unsb();
        }
    }, [dispatch])
  return (
    <div className="w-100 h-100 bg-white">
        <div className="container" style={{marginTop: "3.5rem"}}>
            {question.title ?
            

            <div className="row">
                <div className="col-md-12 col-lg-9">
                        <QuestionHeader question={question}/>
                        <hr />
                        <Comments comments={question.comments} question={question}/>
                        <AddComment question={question}/>
                </div>
                <div className="col-md-12 col-lg-3">
                    <Link to='/home'>
                        Retour <i className="la la-arrow-left"></i>
                    </Link>
                </div>
            </div>
            
            
            : "loading..."}
            
        </div>
    </div>

  )
}

export default QuestionDetails