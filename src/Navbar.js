import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
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
                <Link to="#home" class="link">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link to="#domains" class="link">
                  Tracks
                </Link>
              </li>
              <li class="nav-item">
                <Link to="#timeline" class="link">
                  Timeline
                </Link>
              </li>
              <div className="mainIcon">
                <div className="mainLogo">
                  <a class="navbar-brand" href="#">
                    <img src="./robvitcs logo website-3.png" alt="" height="40px" />
                  </a>
                </div>
              </div>
              <li class="nav-item">
                <Link to="#prizes" class="link">
                  Prizes
                </Link>
              </li>
              <li class="nav-item">
                <Link to="#faqs" class="link">
                  FAQs
                </Link>
              </li>
              <li class="nav-item">
                <Link to="#contact" class="link">
                  Contact Us
                </Link>
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
              <img src="./robvitcs logo website-3.png" alt="" height="40px" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
