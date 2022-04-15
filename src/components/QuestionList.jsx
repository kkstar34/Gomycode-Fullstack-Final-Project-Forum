import React from 'react'
import Question from './Question';
import { Link } from 'react-router-dom';
import { query, collection, onSnapshot, getDoc, getDocs } from 'firebase/firestore';
import { useState } from 'react';
import { useEffect } from 'react';
import db from '../config/firebaseConfig';
import { useDispatch, useSelector } from 'react-redux';
import IllustrationEmptyQuiz from './illustrations/IllustrationEmptyQuiz';
import QuestionLoader from './loaders/QuestionLoader';

function QuestionList() {

const [questions, setquestions] = useState([]);
const [update, setUpdate] = useState([]);
const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  let filter = useSelector((state) => state.questions.filter);

  const sub = async ()=>{
    const q = query(collection(db, "questions"));
    setLoading(true);
    let querySnapshot = await getDocs(q);
    let quizArray = []
      querySnapshot.forEach( async(doc) => {
        let catArray = [];
         doc.data().categories.forEach( async(category) => {
          let data = await getDoc(category);
          catArray.push({...data.data() , id : data.id});
          setUpdate([]);
      })

      quizArray.push({...doc.data(), id: doc.id, categories: catArray});
    });

    console.log(quizArray)
    setquestions(quizArray);
    setLoading(false);

  }
    


  useEffect( () =>{


    

    var filter = "";
    
      const q = query(collection(db, "questions"));
      setLoading(true);
      const unsub = onSnapshot(q, (querySnapshot) => {
        let quizArray = [];
        querySnapshot.forEach((doc) => {
          let catArray = [];
          doc.data().categories.forEach(async (category) => {
                let data = await getDoc(category)
                catArray.push({...data.data() , id : data.id});
                setUpdate([]);
          })
          quizArray.push({ ...doc.data(), id: doc.id , categories: catArray});
        });
        setquestions(quizArray);
        setLoading(false);
      });
      // sub()

      // try with then after code all in then
      
      
  return() =>{
    // sub()
     unsub();
  }

    

  }, []);



 


  
  return (
    
    <>
    {console.log('render')}
         <div className="col-lg-9 col-md-12">
                <div className="d-flex justify-content-between">
                    <span>
                       {questions.length} questions.
                    </span>
                    <Link className="btn btn-primary" to="/add-question">Poser une question <i className="la la-arrow-right"></i></Link>
                   
                </div>
                
                   


                    {/* map Questions */}
                        {loading ? <QuestionLoader/> : questions.filter((q)=>q.title.toLowerCase().includes(filter.toLowerCase())).length >0 ? questions.filter((q)=>q.title.toLowerCase().includes(filter.toLowerCase())).map((question) =>{
                         return <Question question={question} key={question.id}/>
                        }) : <IllustrationEmptyQuiz/>}
                {/* <div>
                {{$questions->links()}}
                </div> */}
            </div>
    </>
  )
}

export default QuestionList