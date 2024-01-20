import { motion, animate, useInView, useAnimation } from "framer-motion";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
function Progressbar({ value }) {
  const threeContainerRef = useRef(null);
  const progressRef = useRef(null);
  const controls = useAnimation();
  let animationId;
  if (value === 100) {
    setTimeout(() => {
      controls.start("fading");
    }, 500);
  }
  useEffect(() => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#000");
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
    loader.load(
      "plain white 3d logo.gltf",
      (gltf) => {
        const model = gltf.scene;
        if (window.innerWidth < 400) {
          model.scale.set(22, 26, 25);
        } else {
          model.scale.set(27, 27, 27);
        }
        scene.add(model);
        camera.position.set(0, 2 * 2, 5 * 2);
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(0, 1, 0);
        scene.add(directionalLight);
        const animate = function () {
          animationId = requestAnimationFrame(animate);

          // Rotate the model
          model.rotation.y += 0.02;

          renderer.render(scene, camera);
        };

        renderer.setSize(
          threeContainerRef.current.clientWidth,
          threeContainerRef.current.clientHeight
        );
        const handleResize = () => {
          const newWidth = window.innerWidth;
          const newHeight = window.innerHeight;

          camera.aspect = newWidth / newHeight;
          camera.updateProjectionMatrix();

          renderer.setSize(newWidth, newHeight);
        };

        window.addEventListener("resize", handleResize);
        animate();
        return () => {
          window.removeEventListener("resize", handleResize);
          document
            .getElementById("three-container")
            .removeChild(renderer.domElement);
        };
      },
      undefined
    );
  }, []);
  return (
    <motion.div
      className="progressbar-container"
      ref={progressRef}
      variants={{
        fading: { opacity: 0 },
      }}
      initial={{
        opacity: 1,
      }}
      animate={controls}
      transition={{ duration: 1 }}
    >
      <div id="three-container" ref={threeContainerRef}></div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="progressbar">
          <motion.div
            className="bar"
            animate={{
              width: `${value}%`,
            }}
            transition={{
              ease: "linear",
            }}
          />
        </div>
        <div className="percent">{value}%</div>
      </div>
    </motion.div>
  );
}

export default Progressbar;
