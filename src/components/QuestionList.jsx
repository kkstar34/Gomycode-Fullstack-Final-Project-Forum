import React from "react";
import Question from "./Question";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import IllustrationEmptyQuiz from "./illustrations/IllustrationEmptyQuiz";
import QuestionLoader from "./loaders/QuestionLoader";
import { cleanFilter } from './../redux/actions/questionAction';
import QuestionModel from './../models/Question';

function QuestionList() {
  const [questions, setquestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  let filter = useSelector((state) => {
    return state.questions.filter
  });
  useEffect(() => {
    setLoading(true);
    const questionModel = new QuestionModel();
    const questionPromise = questionModel.getQuestionsWithCategories();
    questionPromise.then((questions) => {
      setquestions(questions);
      console.log(questions);
      setLoading(false);
    })
     // const q = query(collection(db, "questions"));
    // const unsub = onSnapshot(q, async (querySnapshot) => {
    //   let quizArray = [];
    //   let querySnapshotArray = querySnapshot.docs;
    //   let cat = [];
    //   for (let i = 0; i < querySnapshotArray.length; i++) {
    //     let catdocs = [];
    //     for (let j = 0; j < querySnapshotArray[i].data().categories.length;j++) {
    //       cat = await getDoc(querySnapshotArray[i].data().categories[j]);
    //       catdocs.push({ ...cat.data(), id: cat.id });
    //     }
    //     quizArray.push({
    //       ...querySnapshotArray[i].data(),
    //       id: querySnapshotArray[i].id,
    //       categories: catdocs,
    //     });
    //   }
    //   setquestions(quizArray);
    //   setLoading(false);
    // });
    // sub()

    return () => {
      dispatch(cleanFilter());
    };
  }, []);

  return (
    <>
      <div className="col-lg-9 col-md-12">
        <div className="d-flex justify-content-between">
          <span>{questions.filter((q) =>
            q.title.toLowerCase().includes(filter.toLowerCase())
          ).length} questions.</span>
          <Link className="btn btn-primary" to="/add-question">
            Poser une question <i className="la la-arrow-right"></i>
          </Link>
        </div>

        {/* map Questions */}
        {loading ? (
          <QuestionLoader />
        ) : questions.filter((q) =>
            q.title.toLowerCase().includes(filter.toLowerCase())
          ).length > 0 ? (
          questions
            .filter((q) => q.title.toLowerCase().includes(filter.toLowerCase()))
            .map((question) => {
              return <Question question={question} key={question.id} />;
            })
        ) : (
          <IllustrationEmptyQuiz />
        )}
        {/* <div>
                {{$questions->links()}}
                </div> */}
      </div>
    </>
  );
}

export default QuestionList;
