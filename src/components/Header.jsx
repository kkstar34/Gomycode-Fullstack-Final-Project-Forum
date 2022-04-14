import React from "react";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div id="app" className="">
      <nav className="navbar navbar-expand-md navbar-light bg-white shadow-sm">
        <div className="container">
          <Link  to="/" className="navbar-brand">
            Forum
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

            <ul className="navbar-nav ml-auto">
              

              <li className="nav-item">
                <a className="nav-link" href="#empty">
                  Login
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#empty">
                  Register
                </a>
              </li>

              {/* <li className="nav-item dropdown">
                <a
                  id="navbarDropdown"
                  className="nav-link dropdown-toggle"
                  href="#empty"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  v-pre
                >
                  Kouyate Karim
                </a>

                <div
                  className="dropdown-menu dropdown-menu-right"
                  aria-labelledby="navbarDropdown"
                >
                  <a className="dropdown-item" href="#empty">
                    Deconnexion
                  </a>
                </div>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
