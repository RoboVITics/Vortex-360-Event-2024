import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

import { MotionConfig, motion, useAnimation } from "framer-motion";
import "./LandingPage.css";
import { animate, useInView } from "framer-motion";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const LandingPage = () => {
  const threeContainerRef = useRef(null);
  const inView = useInView(threeContainerRef, { once: true });
  const controls = useAnimation();
  if (inView) {
    controls.start("visible");
  }
  const textAnimationControls = useAnimation();

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(newWidth, newHeight);
    };

    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#000000");
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      2,
      1000
    );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById("three-container").appendChild(renderer.domElement);
    const loader = new GLTFLoader();
    loader.load("plain white 3d logo.gltf", (gltf) => {
      const model = gltf.scene;
      model.rotation.x = -0.3;
      model.rotation.y = 0;
      model.rotation.z = 0;
      if (window.innerWidth < 900) {
        model.scale.set(18, 18, 18);
      } else {
        model.scale.set(31, 31, 31);
      }
      scene.add(model);

      camera.position.set(0, 4, 10);
      if (window.innerWidth > 300) {
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.25;
        controls.screenSpacePanning = false;
        controls.maxPolarAngle = Math.PI * 4;
        controls.enableZoom = false;
      }
      const ambientLight = new THREE.AmbientLight(0xffffff, 1);
      scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
      directionalLight.position.set(0, 1, 0);
      scene.add(directionalLight);

      const animate = function () {
        requestAnimationFrame(animate);

        model.rotation.y += 0.005;

        renderer.render(scene, camera);
      };
      renderer.setSize(
        threeContainerRef.current.clientWidth - 20,
        threeContainerRef.current.clientHeight
      );
      const handleResize = () => {
        const newWidth = window.innerWidth;
        const newHeight = window.innerHeight;

        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();

        renderer.setSize(newWidth - 20, newHeight);
      };
      window.addEventListener("resize", handleResize);

      animate();

      textAnimationControls.start({
        y: 0,
        opacity: 1,
        transition: { duration: 1, ease: "easeOut", delay: 2 },
      });
    });

    return () => {
      window.removeEventListener("resize", handleResize);
      document
        .getElementById("three-container")
        .removeChild(renderer.domElement);
    };
  }, [textAnimationControls]);

  return (
    <MotionConfig>
      <div className="landing-page">
        {/* Left Section */}
        <motion.div
          className="left-section"
          initial={{ opacity: 0 }}
          animate={textAnimationControls}
        >
          <div className="text-section">
            <h2 className="name">VORTEX 360</h2>
            <p className="description">
              Vortex360 is an event organised by RoboVITics and powered by
              AutoDesk is a 3-day CAD modelling design-a-thon where participants
              think outside the box and come up with amazing designs and expand
              the horizons of innovation to solve real-world problems.
            </p>
          </div>
        </motion.div>

        {/* Three.js Container */}
        <motion.div
          id="three-container"
          ref={threeContainerRef}
          variants={{
            hidden: { scale: 0.6 },
            visible: { scale: 1 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 2 }}
        ></motion.div>

        {/* Right Section */}
        <motion.div
          className="right-section"
          initial={{ y: 50, opacity: 0 }}
          animate={textAnimationControls}
        >
          <div className="text-section-right">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdh-xcsVzrt4Zel-XiyBtD3jBIDEHAHM7bfnMMl7YloOPjGyw/formrestricted" target="_blank">
              <button class="btn-53">
                <div
                  class="original"
                  style={{
                    textShadow: "3px 3px 4px rgb(207, 159, 255)",
                    fontSize: "30px",
                    border: "2px solid white",
                    borderRadius: "50px",
                    paddingBottom: "10px",
                  }}
                >
                  Register
                </div>
                <div class="letters">
                  <span>R</span>
                  <span>e</span>
                  <span>g</span>
                  <span>i</span>
                  <span>s</span>
                  <span>t</span>
                  <span>e</span>
                  <span>r</span>
                </div>
              </button>
              <button className="mobile-button">Register</button>
            </a>
          </div>
        </motion.div>
      </div>
    </MotionConfig>
  );
};

export default LandingPage;
