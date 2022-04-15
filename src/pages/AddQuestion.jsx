import React from "react";
import { Link } from "react-router-dom";
import TagField from "./../components/TagField";
import { query, collection, onSnapshot, addDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import db from "./../config/firebaseConfig";

function AddQuestion() {
  const [suggestions, setsuggestions] = useState();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedCats, setSelectedCats] = useState([]);
  useEffect(() => {
    const q = query(collection(db, "categories"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let catArray = [];
      querySnapshot.forEach((doc) => {
        catArray.push({ value: doc.data().title, id: doc.ref });
      });
      setsuggestions(catArray);
      setLoading(false);
    });
    return () => {
      unsub();
    };
  }, []);
  const handleChangeAdd = (event) => {
    setSelectedCats(event);
    console.log(selectedCats, event);
  };

  

  const handleSubmit = (event) => {

    event.preventDefault();


    let tab = selectedCats.map((s) => {
       return  s.id;
    })

    console.log(tab);
    

    let question = {
        title : title,
        content : content,
        categories : tab
    }

    document.getElementById("quizForm").reset();
    

    addDoc(collection(db, "questions"), question)
    .then((doc)=>{ 
       console.log("question crée avec succes: ", doc.id);
    })
    .catch((err)=>{
       console.error("erreur lors de l'ajout: de la question ", err);
    });

  }
  return (
    <div>
      <div className="container mt-4 pb-4">
        <div className="col-md-12 col-lg-8 mx-auto">
          <div className="bg-white shadow-md p-4 row">
            <div className="col-10">
              <h1 className="question__title mb-0">Poser une question</h1>
              <span style={{ color: "#5b6987" }}>
                Vous rencontrez des problèmes? Notre communauté de développeurs
                est là pour vous aider!
              </span>
            </div>

            <div className="col-2">
              <Link to="/home">
                Retour <i className="la la-arrow-left"></i>
              </Link>
            </div>
            <form method="POST" className="col-12 row" id='quizForm' onSubmit={handleSubmit}>
              <div className="col-12 form-group mt-4">
                <label htmlFor="title" className="questions__form-label">
                  Titre de la question
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  name="title"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="col-12 form-group">
                <label htmlFor="content" className="questions__form-label">
                  Contenu de la question
                </label>
                <textarea
                  name="content"
                  id="content"
                  cols="30"
                  rows="10"
                  className="form-control "
                  onChange={(e) => setContent(e.target.value)}
                ></textarea>
              </div>

              <div className="col-12 form-group">
                <label htmlFor="content" className="questions__form-label">
                  Technologies / Categories
                </label>
                {loading ? (
                  <input
                    type="text"
                    className="input-tag form-control"
                    name="tags"
                    id="content"
                  />
                ) : (
                  <TagField
                    suggestions={suggestions}
                    onChange={handleChangeAdd}
                  />
                )}
              </div>

              <div className="col-12 form-group">
                <button
                  type="submit"
                  className="btn btn-primary d-block shadow-md w-100 btn-lg"
                >
                  Poser ma question <i className="la la-arrow-right"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddQuestion;
