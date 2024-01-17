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
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById("three-container").appendChild(renderer.domElement);
    const loader = new GLTFLoader();
    loader.load("skull_salazar_downloadable/scene.gltf", (gltf) => {
      const model = gltf.scene;
      model.scale.set(2, 2, 2);
      scene.add(model);

      camera.position.set(0, 2 * 2, 5 * 2);

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
            <h1 className="name">VORTEX 360</h1>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
              modi laborum quae sint soluta illo inventore ut ad et nesciunt
              consequuntur delectus quia earum illum molestias, deserunt ipsa
              nihil laudantium?
            </p>
          </div>
        </motion.div>

        {/* Three.js Container */}
        <motion.div
          id="three-container"
          ref={threeContainerRef}
          style={{
            backgroundColor: "#000",
            width: "100%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "-230px",
            paddingRight: "0px",
          }}
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
          <div className="text-section">
            <h1 className="heading">Registration</h1>
            <button class="btn-53">
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
          </div>
        </motion.div>
      </div>
    </MotionConfig>
  );
};

export default LandingPage;
