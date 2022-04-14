import React from 'react'
import Header from '../components/Header';
import Banner from '../components/Banner';
import Categories from '../components/Categories';
import QuestionList from '../components/QuestionList';

import { collection, onSnapshot, query } from 'firebase/firestore';
import { useEffect, useState } from 'react'
import db from './../config/firebaseConfig';
import CategoryLoader from '../components/loaders/CategoryLoader';


function Home() {

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect( () =>{

    const q = query(collection(db, "categories"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let catArray = [];
      querySnapshot.forEach((doc) => {
        catArray.push({ ...doc.data(), id: doc.id });
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
        <Header/>
        <Banner/>

        <div className="container my-4">
            <div className="row">
                    {loading ? <CategoryLoader/> : <Categories categories={categories}/>}
                    <QuestionList/>
            </div>
        </div>


    </>
  )
}

export default Home;