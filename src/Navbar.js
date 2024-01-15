import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const controls = useAnimation();
  useEffect(() => {
    setTimeout(() => {
      controls.start("visible");
    }, 2000);
  });
  return (
    <div id="home">
      <motion.nav
        class="navbar navbar-expand-lg navbar-dark fixed-top bg-none"
        id="home"
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: -30 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 1 }}
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
                <button
                  className="btn"
                  onClick={() => {
                    setValue(0);
                    console.log(value);
                  }}
                >
                  <Link to="#home" class="link">
                    Home
                  </Link>
                </button>
              </li>
              <li class="nav-item">
                <button
                  className="btn"
                  onClick={() => {
                    setValue(20);
                    console.log(value);
                  }}
                >
                  <Link to="#about" class="link">
                    About US
                  </Link>
                </button>
              </li>
              <li class="nav-item">
                <button
                  className="btn"
                  onClick={() => {
                    setValue(34);
                    console.log(value);
                  }}
                >
                  <Link to="#domains" class="link">
                    Domains
                  </Link>
                </button>
              </li>

              <div className="mainIcon">
                <div className="mainLogo">
                  <a class="navbar-brand" href="#">
                    <img src="./Robovitics logo 1.png" alt="" height="40px" />
                  </a>
                </div>
              </div>
              <li class="nav-item">
                <button
                  className="btn"
                  onClick={() => {
                    setValue(71);
                    console.log(value);
                  }}
                >
                  <Link to="#timeline" class="link">
                    Timeline
                  </Link>
                </button>
              </li>
              <li class="nav-item">
                <button
                  className="btn"
                  onClick={() => {
                    setValue(83);
                    console.log(value);
                  }}
                >
                  <Link to="#prizes" class="link">
                    Prizes
                  </Link>
                </button>
              </li>
              <li class="nav-item">
                <button
                  className="btn"
                  onClick={() => {
                    setValue(100);
                    console.log(value);
                  }}
                >
                  <Link to="#contact" class="link">
                    Contact US
                  </Link>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </motion.nav>
      <div className="pls">
        <motion.div
          className="mainIcon2"
          variants={{
            hidden: { opacity: 0, y: -30 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 1 }}
        >
          <div className="mainLogo2">
            <a class="navbar-brand" href="#">
              <img src="./Robovitics logo 1.png" alt="" height="40px" />
            </a>
          </div>
        </motion.div>
      </div>
      <br />
      <br />
      <div className="navbarProgress">
        <motion.div
          className="navbarProgressBar"
          animate={{
            width: `${value}%`,
          }}
          transition={{
            ease: "linear",
          }}
        />
      </div>
    </div>
  );
};

export default Navbar;
