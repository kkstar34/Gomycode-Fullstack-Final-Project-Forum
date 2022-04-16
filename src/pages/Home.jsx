import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import QuestionList from "../components/QuestionList";

import {
  collection,
  onSnapshot,
  query,
  getDocs,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import db from "./../config/firebaseConfig";
import CategoryLoader from "../components/loaders/CategoryLoader";

function Home() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, "categories"));
    const unsub = onSnapshot(q, async(querySnapshot) => {
      let catArray = [];
      let querySnapshotArray = querySnapshot.docs;
      for(let i=0; i<querySnapshotArray.length;i++) {
        let categoryQuestionsArray = [];
        const quer = query(
          collection(db, "questions"),
          where("categories", "array-contains", querySnapshotArray[i].ref)
        );
        let snapshots = await getDocs(quer);
        let snapshotsArray =   snapshots.docs;
        for(let j=0; j< snapshotsArray.length; j++){
           categoryQuestionsArray.push(snapshotsArray[j].data());
         }
         catArray.push({
              ...querySnapshotArray[i].data(),
              id: querySnapshotArray[i].id,
              categoryQuestions: categoryQuestionsArray,
            });
      }
      setCategories(catArray);
      setLoading(false);
    });

    return () => {
      unsub();
    };
  }, []);

  return (
    <>
      <Header />
      <Banner />

      <div className="container my-4">
        <div className="row">
          {loading ? (
            <CategoryLoader />
          ) : (
            <Categories categories={categories} />
          )}
          <QuestionList />
        </div>
      </div>
    </>
  );
}

export default Home;
