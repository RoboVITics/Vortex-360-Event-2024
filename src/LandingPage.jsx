import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { MotionConfig, motion, useAnimation } from "framer-motion";
import styled from 'styled-components';
import "./LandingPage.css";

const StyledButton = styled(motion.button)`
  font-size: 2.5rem;
  border: none;
  margin-top: 20px;
  background-color: #000;
  color: #fff;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: transform 0.5s ease;
  border-radius: 12px;

  &:hover {
    transform: rotateX(360deg) scale(1.1);
    transition: transform 0.5s ease, opacity 1s ease;
  }

  &::before {
    content: "Register";
    position: absolute;
    top: -10px;
    right: -10px;
    bottom: -10px;
    left: -10px;
    border: 2px solid #fff;
    border-radius: 20px;
    padding: 10px;
    opacity: 0;
    background-color: rgb(207, 159, 255);
    transition: opacity 1s ease;
  }
`;
const LandingPage = () => {
  const threeContainerRef = useRef(null);
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

      window.addEventListener("resize", handleResize);

      animate();

      textAnimationControls.start({
        y: 0,
        opacity: 1,
        transition: { duration: 1, ease: "easeOut", delay: 0.5 },
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
          initial={{ y: 50, opacity: 0 }}
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
        <div
          id="three-container"
          ref={threeContainerRef}
          className="three-container"
          style={{ backgroundColor: "#000000", width: "100%", height: "60vh" }}
        ></div>

        {/* Right Section */}
        <motion.div
          className="right-section "
          initial={{ y: 50, opacity: 0 }}
          animate={textAnimationControls}
        >
          <div className="text-section">
          <h1 className="heading">Registration</h1>
          <StyledButton
            whileHover={{ scale: 0.8, translate: "0.6rem -0.6rem" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            whileTap={{ scale: 0.6 }}
            style={{ fontSize: "2.5rem", border: "none", marginTop: "20px" }}
            className="custom-btn"
          >
            Register
          </StyledButton>
        </div>

        </motion.div>
      </div>
    </MotionConfig>
  );
};

export default LandingPage;