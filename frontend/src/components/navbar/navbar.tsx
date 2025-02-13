// frontend/src/components/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/index.css';
import './navbar.css';


const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        {/* Logo */}
        <div className="col-4">
          <Link to="/" className="navbar-brand">Zug Vogel Namibia</Link>
        </div>

        {/* Search Bar */}
        <div className="col-4">
          <form className="d-flex">
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        </div>

        {/* Burger Menu */}
        <div className="col-4 text-end">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/signup-login">Signup/Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Services
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item" to="/music">Accomdation</Link></li>
                  <li><Link className="dropdown-item" to="/videos">Acctivities</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/services">About Us </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/projects">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;