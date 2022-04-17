import React, { useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useUserAuth } from './../context/UserAuthContextProvider';
import AuthLoader from './loaders/AuthLoader';

function Header() {
  const {user, logOut} = useUserAuth();



  const navigate = useNavigate();
  const handleLogout = async(e) =>

  {
    e.preventDefault();

    try {
      await logOut();
      navigate('/');
    }catch(e) {

    }
   



  }
  return (
    <div id="app" className="">
      <nav className="navbar navbar-expand-md navbar-light bg-white shadow-sm">
        <div className="container">
          <Link  to="/home" className="navbar-brand">
            Baroland
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto"></ul>
            {user?  
            <ul className="navbar-nav ml-auto">
              {user.email ? 
               <>
                <li className="nav-item">
                <Link className="nav-link" to="/profil">
                  {user.email}
                </Link>
              </li>

                <li className="nav-item">
                <a className="nav-link" onClick={handleLogout} href="#empty">
                 Logout
                </a>
              </li>
              </>
                : 
                <>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Login
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/register">
                      Register
                  </Link>
                </li>
              </>
              }
              
            </ul>
            
            : <AuthLoader/> }
           
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
