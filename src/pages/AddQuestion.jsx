import React from 'react'
import { Link } from 'react-router-dom';
import TagField from './../components/TagField';

function AddQuestion() {


    
    const suggestions = [
        "apple",
        "banana",
        "cucumber",
        
      ];


  return (
    <div>
          <div className="container mt-4 pb-4">
              <div className="col-md-12 col-lg-8 mx-auto">
                  <div className="bg-white shadow-md p-4 row">
                      <div className="col-10">
                          <h1 className="question__title mb-0">Poser une question</h1>
                          <span style={{ color: "#5b6987" }}>
                              Vous rencontrez des problèmes? Notre communauté de développeurs est là pour vous aider!
                          </span>
                      </div>

                      <div className='col-2'>
                          <Link to="/home">
                              Retour <i className="la la-arrow-left"></i>
                          </Link>
                      </div>
                      <form action="" method="POST" className="col-12 row">


                          <div className="col-12 form-group mt-4">
                              <label htmlFor="title" className="questions__form-label">Titre de la question</label>
                              <input type="text" className="form-control" id="title" name="title" />


                              {/* @error('title')
                            <span className="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                            @enderror */}
                          </div>

                          <div className="col-12 form-group">
                              <label htmlFor="content" className="questions__form-label">Contenu de la question</label>
                              <textarea name="content" id="content" cols="30" rows="10" className="form-control " ></textarea>
                              {/* @error('content')
                            <span className="invalid-feedback" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                            
                            @enderror */}
                          </div>

                          <div className="col-12 form-group">
                              <label htmlFor="content" className="questions__form-label">Technologies / Categories</label>
                              {/* <input type="text" className="input-tag form-control" name="tags" id="content" /> */}
                              <TagField suggestions={suggestions}/>
                              {/* @error('tags')
                            <span className="invalid-feedback" role="alert">
                                <strong>Veuillez choisir une catégorie svp </strong>
                            </span>
                            
                            @enderror */}
                          </div>

                          <div className="col-12 form-group">
                              <button type="submit" className="btn btn-primary d-block shadow-md w-100 btn-lg">
                                  Poser ma question <i className="la la-arrow-right"></i>
                              </button>
                          </div>
                      </form>

                  </div>
              </div>
          </div>



      </div>
  )
}

export default AddQuestion