import React from "react";
import { Link } from "react-router-dom";
import "../../assets/css/index.css";
import logo from "../../assets/images/logo-pictures/nav-zug-vogel-color-logo.png";
import "./navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <div className="row w-100 align-items-center">

          {/* Logo */}
          <div className="col-4 d-flex justify-content-start">
            <Link to="/" className="navbar-brand">
              <img className="nav-logo mx-3" src={logo} alt="Logo" />
            </Link>
          </div>

          <div className="col-4 d-flex justify-content-center">
            <form className="d-flex w-100">
              <input
                className="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </div>

          {/* Burger Menu & Navbar Links */}
          <div className="col-4 d-flex justify-content-end">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Navbar Links (inside the same column) */}
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link mx-3" to="/signup-login">
                    Signup
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle mx-3"
                    to="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Unsere Dienste
                  </Link>
                  <ul className="dropdown-menu text-center" aria-labelledby="navbarDropdown">
                    <li>
                      <Link className="dropdown-item" to="/Unterkunft">
                        Unterkunft
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/touren">
                        Tours
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/überNamibia">
                    Über Namibia
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link mx-3" to="/überUns">
                    Über uns
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div> {/* End row */}
      </div>
    </nav>
  );
};

export default Navbar;
