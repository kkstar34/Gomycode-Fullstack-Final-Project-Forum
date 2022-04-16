import React from "react";
import { Link } from "react-router-dom";
import TagField from "./../components/TagField";
import { query, collection, onSnapshot, addDoc, getDocs, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import db from "./../config/firebaseConfig";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useUserAuth } from './../context/UserAuthContextProvider';

function AddQuestion() {
  const [suggestions, setsuggestions] = useState();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedCats, setSelectedCats] = useState([]);
  const [titleError, setTitleError] = useState("");
  const [contentError, setContentError] = useState("");
  const {user} = useUserAuth();

  const [Addloading, setAddloading] = useState(false);

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

  

  const handleSubmit = async(event) => {

    event.preventDefault();


    let tab = selectedCats.map((s) => {
       return  s.id;
    })

    let q = query(collection(db, "users"), where('email', '==', user.email) );
    let u = await getDocs(q);
    u = u.docs;
    let userId ;
    let userRef;
    for (let i = 0; i < u.length; i++) {
      userRef = u[i].ref;
      userId =  u[i].id;
      
    }
    

    let question = {
        title : title,
        content : content,
        categories : tab,
        user_id : userId,
        user_ref : userRef
    }

    if(title === ""){

      setTitleError("le champs titre est requis")
      return false;
    }else{
      setTitleError("")
    }

    if(content === ""){

      setContentError("le champs content doit être rempli")
      return false;

    }else{
      setContentError("")
    }


  
    
    setAddloading(true)

    const addQuiz = () => {
      return addDoc(collection(db, "questions"), question)
      .then((doc)=>{ 
         console.log("question crée avec succes: ", doc.id);
         document.getElementById("quizForm").reset();
         setAddloading(false)
      })
      .catch((err)=>{
         console.error("erreur lors de l'ajout: de la question ", err);
         setAddloading(false)
      })
    }



    toast.promise(
      addQuiz(),
      {
        pending: 'ajout de la question en cours',
        success: 'Question ajouté avec succès 👌',
        error: 'Erreur lors de ajout: de la question🤯'
      }
  );
    

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
              <ToastContainer />
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
                  className={titleError ? "form-control is-invalid" : "form-control" }
                  id="title"
                  name="title"
                  onChange={(e) => setTitle(e.target.value)}
                />
                {titleError && <span className="invalid-feedback">{titleError}</span>}
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
                  className={contentError ? "form-control is-invalid" : "form-control" }
                  onChange={(e) => setContent(e.target.value)}
                ></textarea>
                {contentError && <span className="invalid-feedback">{contentError}</span>}
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
                  

                  {Addloading ?  <> <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>Loading...</> : <>Poser ma question <i className="la la-arrow-right"></i></>
                            }
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
