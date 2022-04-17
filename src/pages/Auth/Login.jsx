import React from 'react'
import AuthSideBar from './../../components/AuthSideBar';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUserAuth } from './../../context/UserAuthContextProvider';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { cleanError } from '../../redux/actions/questionAction';

function Login() {
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const {logIn} = useUserAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();


  let errorConnexion = useSelector((state) => {
      return state.questions.error;
  })


  useEffect(() => {

    return ()=> {
      dispatch(cleanError());
    }
  }, [])
  const handleSubmit= async(e) =>{
    e.preventDefault();
    setLoading(true);
    try {

      await logIn(email, password);
      setLoading(false);
      navigate('/home');

    }

    catch(err) {
      setError(err.message )
      setLoading(false);
    }
  }



  return (
    <>
    
    <div className="container-fluid">
      <ToastContainer/>
        <div className="row p-3" style={{height: '100vh'}}>
          <AuthSideBar />
          <div className="col-md-12 col-lg-6">
          <div className="container h-100">
        <div className="row justify-content-center h-100">
            <div className="col-sm-12 col-md-8 d-flex flex-column justify-content-center">
              {/* {errorConnexion && <div className="alert alert-danger">{errorConnexion}</div>} */}
              {errorConnexion && toast(errorConnexion)}
                <h1 style={{color: "#1E1E64"}}>Se connecter</h1>
                {error && <div className="alert alert-danger">{error}</div> }
                <form method="POST"  className="w-100" onSubmit={handleSubmit}>
                   
                    <div className="form-group">
                        <label htmlFor="email" className="col-form-label ">Email</label>
                        <div className="">
                            <input id="email" type="text" className="form-control" name="email"   autoComplete="email" autoFocus onChange={(e) => setEmail(e.target.value)} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className="col-form-label " >Mot de passe</label>
                        <div className="">
                            <input id="password" type="password" className="form-control" name="password"  autoComplete="name" autoFocus onChange={(e) => setPassword(e.target.value)} />
                        </div>
                    </div>

                    <div className="form-group row mb-0">
                        <div className="col-md-12">
                            <button type="submit" className="btn btn-primary btn-block shadow">
                            {loading ?  <> <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>Loading...</> : "Connexion"
                            }
                            </button>
                        </div>
                        <div className="col-md-12 mt-2">
                            Si vous n'avez pas de compte, vous pouvez vous 
                            <Link to="/register">
                              inscrire
                            </Link>
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
  )
}

export default Login