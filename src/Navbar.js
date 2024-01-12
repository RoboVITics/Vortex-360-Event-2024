import React from "react";
import { HashLink as Link } from "react-router-hash-link";
const Navbar = () => {
  return (
    <div id="home">
      <nav
        class="navbar navbar-expand-lg navbar-dark fixed-top bg-none"
        id="home"
      >
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav me-auto mb-2">
              <li class="nav-item">
                <Link to="#home" class="link">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link to="#about" class="link">
                  About US
                </Link>
              </li>
              <li class="nav-item">
                <Link to="#domains" class="link">
                  Domains
                </Link>
              </li>

              <div className="mainIcon">
                <div className="mainLogo">
                  <a class="navbar-brand" href="#">
                    <img src="./Robovitics logo 1.png" alt="" height="30px" />
                  </a>
                </div>
              </div>
              <li class="nav-item">
                <Link to="#timeline" class="link">
                  Timeline
                </Link>
              </li>
              <li class="nav-item">
                <Link to="#prizes" class="link">
                  Prizes
                </Link>
              </li>
              <li class="nav-item">
                <Link to="#contact" class="link">
                  Contact US
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="pls">
        <div className="mainIcon2">
          <div className="mainLogo2">
            <a class="navbar-brand" href="#">
              <img src="./Robovitics logo 1.png" alt="" height="30px" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
