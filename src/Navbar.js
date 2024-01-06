import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-xl navbar-dark fixed-top bg-dark" id="home">
        <div className="container-fluid">
          <Link to="#" className="navbar-brand">
            <img src="./Robovitics logo 1.png" alt="" height="30px" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded={!isNavCollapsed ? true : false}
            aria-label="Toggle navigation"
            onClick={handleNavCollapse}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`} id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2">
              <li className="nav-item">
                <Link to="#home" className="link" onClick={handleNavCollapse}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#about" className="link" onClick={handleNavCollapse}>
                  About US
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#domains" className="link" onClick={handleNavCollapse}>
                  Domains
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#timeline" className="link" onClick={handleNavCollapse}>
                  Timeline
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#prizes" className="link" onClick={handleNavCollapse}>
                  Prizes
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#faqs" className="link" onClick={handleNavCollapse}>
                  FAQs
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#contact" className="link" onClick={handleNavCollapse}>
                  Contact US
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </BrowserRouter>
  );
};

export default Navbar;
