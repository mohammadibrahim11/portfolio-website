import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <nav className="navbar container navbar-expand-lg ">
        <div className="container-fluid mt-4">
          <Link className="navbar-brand" to="#">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="#">
                  <span className="navlink-counter">01.</span>
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  <span className="navlink-counter">02.</span>
                  Experience 
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link">
                  {" "}
                  <span className="navlink-counter">03.</span>
                  Work
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link">
                  {" "}
                  <span className="navlink-counter">04.</span>
                 Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <button className="btn">Resume</button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
