import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar dark-color-background navbar-expand shadow-sm px-2">
      <div className="container d-inline-block">
        <ul className="navbar-nav d-flex justify-content-center ">
          <li className="nav-item h4">
            <Link
              to="/"
              className={
                window.location.pathname === "/" 
                  ? "nav-link active light-color-text"
                  : "nav-link text-muted"
              }
            >
              Home
            </Link>
          </li>
          <li className="nav-item h4">
            <Link
              to="about"
              className={
                window.location.pathname === "/about"
                  ? "nav-link active light-color-text"
                  : "nav-link text-muted"
              }
            >
              About
            </Link>
          </li>
          <li className="nav-item h4">
            <Link
              to="/projects"
              className={
                window.location.pathname === "/projects"
                  ? "nav-link active light-color-text"
                  : "nav-link text-muted"
              }
            >
              Projects
            </Link>
          </li>
          <li className="nav-item h4">
            <Link
              to="/contact"
              className={
                window.location.pathname === "/contact" 
                  ? "nav-link active light-color-text"
                  : "nav-link text-muted"
              }
            >
              Contact
            </Link>
          </li>
          <a className="navbar-brand ml-3 mt-1" href="mailto:musovirova@yahoo.com"><span className="email-icon"><i className="fas fa-envelope fa-lg"></i></span></a>
            
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;