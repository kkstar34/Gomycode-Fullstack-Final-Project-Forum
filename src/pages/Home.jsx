import React from 'react'
import Header from '../components/Header';
import Banner from '../components/Banner';
import Categories from '../components/Categories';
import QuestionList from '../components/QuestionList';

import { collection, onSnapshot, query, getDocs, where } from 'firebase/firestore';
import { useEffect, useState } from 'react'
import db from './../config/firebaseConfig';
import CategoryLoader from '../components/loaders/CategoryLoader';


function Home() {

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const[categoryQuestions, setCategoryQuestions] = useState([])

  useEffect( () =>{

    const q = query(collection(db, "categories"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let catArray = [];
      querySnapshot.forEach( async(doc) => {
        let categoryQuestionsArray = [];
        
        console.log(doc.data().title)
        const quer = query(collection(db, "questions"), where('categories', 'array-contains',doc.ref));
        
        let snapshots = await getDocs(quer);
        snapshots.forEach(doc =>{
            console.log(doc.data())
            categoryQuestionsArray.push(doc.data());
            setCategoryQuestions([])
          })
          catArray.push({ ...doc.data(), id: doc.id , categoryQuestions : categoryQuestionsArray});
      });
      setCategories(catArray);
      setLoading(false);
    });

  

  return() =>{
    unsub();
  }

    

  }, [])


  return (
    <>
      <Header />
      <Banner />

      <div className="container my-4">
        <div className="row">
          {loading ? (
            <CategoryLoader />
          ) : (
            <Categories categories={categories}   />
          )}
          <QuestionList />
        </div>
      </div>
    </>
  );
}

export default Home;