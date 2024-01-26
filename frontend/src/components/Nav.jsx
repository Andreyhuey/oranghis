import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light text-light sticky-top mb-2"
      style={{ backgroundColor: "#2d2e2eff" }}
    >
      <div className="container-fluid">
        <div className="navbar-brand">
          <Link to="/" className="navbar-brand fw-bold mx-3">
            <img
              src={require("../images/logo.png")}
              height="30"
              width={30}
              alt="logo"
            />
          </Link>
        </div>
        <button
          className="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/cs" className="nav-link fw-bold mx-3 text-white">
                CS
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/irs" className="nav-link fw-bold mx-3 text-white">
                IRS
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/lg" className="nav-link fw-bold mx-3 text-white">
                LGSC
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/sb" className="nav-link fw-bold mx-3 text-white">
                SB
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/tc" className="nav-link fw-bold mx-3 text-white">
                TC
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/uth" className="nav-link fw-bold mx-3 me-5 text-white">
                UTH
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
