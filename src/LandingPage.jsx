import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

import { MotionConfig, motion, useAnimation } from "framer-motion";
import "./LandingPage.css";
import { animate, useInView } from "framer-motion";

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
      if (window.innerWidth < 400) {
        model.scale.set(22, 22, 22);
      } else {
        model.scale.set(28, 28, 28);
      }
      scene.add(model);

      camera.position.set(0, 4, 10);

      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
      directionalLight.position.set(0, 1, 0);
      scene.add(directionalLight);

      const animate = function () {
        requestAnimationFrame(animate);

        model.rotation.y += 0.01;

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
              Vortex360 is an event organised by RoboVITics and powered by AutoDesk is a 3-day CAD modelling design-a-thon where participants think outside the box and come up with amazing designs and expand the horizons of innovation to solve real-world problems.
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
            <h1 className="heading">Registration</h1>
            <a href="https://www.instagram.com/robovitics/">
              
            
            <button class="btn-53" >
              <div class="original">Register</div>
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
          
          </a></div>
        </motion.div>
      </div>
    </MotionConfig>
  );
};

export default LandingPage;
