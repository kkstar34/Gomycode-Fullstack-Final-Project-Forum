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
    const [u, setU] = useState();
    const question = useSelector((state)=> {
        return state.questions;
    } )

    // console.log(question.user_id)
    
    // let qe = doc(db, "users", question.user_ref);

   
    useEffect(() => {
        const sub = async()=>{
         const doc =await getDoc(q);
        // const userDoc = await getDoc(qe);
        // console.log(userDoc);
        // for(let i=0; i<userDoc.length; i++){
        //     console.log(userDoc[i].data());
        // }
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
            {question ?
            

            <div className="row">
                <div className="col-md-12 col-lg-9">
                        <QuestionHeader question={question}/>
                        <hr />
                        <div className="mb-4 answers-count ">
                            <span className="text-dark-blue font-weight-bold">{question.comments && question.comments.length} reponses</span>
                            <span className="d-flex align-items-center">
                            <img
                                src={process.env.PUBLIC_URL + "/img/avatar.png"}
                                alt=""
                                width="20"
                                height="20"
                            />
                            <span className="text-black ml-2">{u ? u.email : null}</span>
                            </span>
                        </div>
                        <Comments comments={question.comments} />
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