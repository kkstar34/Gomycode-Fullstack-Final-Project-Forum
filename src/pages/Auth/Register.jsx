import React, { useState } from "react";
import AuthSideBar from "./../../components/AuthSideBar";
import { Link, useNavigate } from 'react-router-dom';
import { useUserAuth } from './../../context/UserAuthContextProvider';

function Register() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const {signUp} = useUserAuth();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit= async(e) =>{
    e.preventDefault();
    setLoading(true);
    try {

      await signUp(email, password);
      setLoading(false);
      navigate('/');

    }

    catch(err) {
      setError(err.message )
      setLoading(false);
    }
  }
  return (
    <>
      <div className="container-fluid">
        <div className="row p-3" style={{height: '100vh'}}>
          <AuthSideBar />
          <div className="col-md-12 col-lg-6">
            <div className="container h-100">
              <div className="row justify-content-center h-100">
                <div className="col-sm-12 col-md-8 d-flex flex-column justify-content-center">
                  <h1 style={{color: "#1E1E64"}}>Créer mon compte</h1>
                  {error && <div className="alert alert-danger">{error}</div> }
                  <form
                    method="POST"
                    action=""
                    className="w-100"
                    onSubmit={handleSubmit}
                  >
                    <div className="form-group">
                      <label htmlFor="name" className="col-form-label">
                        Nom
                      </label>
                      <div className="">
                        <input
                          id="name"
                          type="text"
                          className="form-control "
                          name="name"
                          
                          autoComplete="name"
                          autoFocus
                          
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="email" className="col-form-label ">
                        Email
                      </label>
                      <div className="">
                        <input
                          id="email"
                          type="text"
                          className="form-control "
                          name="email"
                          
                          autoComplete="email"
                          autoFocus
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="password" className="col-form-label ">
                        Mot de passe
                      </label>
                      <div className="">
                        <input
                          id="password"
                          type="password"
                          className="form-control"
                          name="password"
                          
                          autoComplete="name"
                          autoFocus
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label
                        htmlFor="password_confirmation"
                        className="col-form-label "
                      >
                        Mot de passe (confirmation)
                      </label>
                      <div className="">
                        <input
                          id="password_confirmation"
                          type="password"
                          className="form-control"
                          name="password_confirmation"
                          
                          autoComplete="password_confirmation"
                          autoFocus
                        />
                      </div>
                    </div>

                    <div className="form-group row mb-0">
                      <div className="col-md-12">
                        <button
                          type="submit"
                          className="btn btn-primary btn-block shadow"
                        >

                            {loading ?  <> <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>Loading...</> : "Inscription"
                            }
                          
                        </button>

                        
                      </div>
                      <div className="col-md-12 mt-2">
                        Si vous avez déjà un compte, vous pouvez vous
                        <Link to="/" >connecter</Link>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
