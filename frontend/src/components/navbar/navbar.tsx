import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../assets/css/index.css";
import logo from "../../assets/images/logo-images/nav-zug-vogel-color-logo.png";
import "./navbar.css";

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  // Check if the user is logged in by looking for the token in localStorage
  const token = localStorage.getItem('token');
  const userName = localStorage.getItem('userName');

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
    navigate('/'); // Redirect to the homepage after logging out
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <div className="navbar-content">

          {/* Logo */}
          <div className="nav-logo-container mx-3">
            <Link to="/" className="navbar-brand">
              <img className="nav-logo" src={logo} alt="Logo" />
            </Link>
          </div>

          {/* Search Bar */}
          <div className="nav-search-container">
            <form className="d-flex">
              <input
                className="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </div>

          {/* Burger Menu & Navbar Links */}
          <div className="nav-links-container">
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

            {/* Navbar Links */}
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav">
                {token ? (
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle mx-3"
                      to="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {userName} {/* Display user's name */}
                    </Link>
                    <ul className="dropdown-menu text-center" aria-labelledby="navbarDropdown">
                      <li>
                        <Link className="dropdown-item" to="/profile">
                          Profile
                        </Link>
                      </li>
                      <li>
                        <button className="dropdown-item" onClick={handleLogout}>
                          Logout
                        </button>
                      </li>
                    </ul>
                  </li>
                ) : (
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle mx-3"
                      to="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Signup/Login
                    </Link>
                    <ul className="dropdown-menu text-center" aria-labelledby="navbarDropdown">
                      <li>
                        <Link className="dropdown-item" to="/login">
                          Login
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/signup">
                          Signup
                        </Link>
                      </li>
                    </ul>
                  </li>
                )}
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
                      <Link className="dropdown-item" to="/touren">
                        Touren
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/Unterkunft">
                        Unterkunft
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link mx-3" to="/aktivitäten">
                    Aktivitäten
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
                    Nützlich
                  </Link>
                  <ul className="dropdown-menu info-dropdown-menu text-center" aria-labelledby="navbarDropdown">
                    <li>
                      <Link className="dropdown-item" to="/überUns">
                        Über uns
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/überNamibia">
                        Über Namibia
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div> {/* End navbar-content */}
      </div>
    </nav>
  );
};

export default Navbar;
