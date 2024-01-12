import React, { useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js"; // Import GLTFLoader

const LandingPage = () => {
  useEffect(() => {
    // Set up scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById("three-container").appendChild(renderer.domElement);

    // Load glTF model
    const loader = new GLTFLoader();
    loader.load(
      "/bmw_m3_e46/scene.gltf",
      (gltf) => {
        const model = gltf.scene;
        scene.add(model);

        // Set camera position
        camera.position.set(0, 2, 5);

        // Add ambient light
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        scene.add(ambientLight);

        // Add directional light
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(0, 1, 0);
        scene.add(directionalLight);

        // Animation function
        const animate = function () {
          requestAnimationFrame(animate);

          // Rotate the model
          model.rotation.y += 0.01;

          renderer.render(scene, camera);
        };

        // Handle window resize
        const handleResize = () => {
          const newWidth = window.innerWidth;
          const newHeight = window.innerHeight;

          camera.aspect = newWidth / newHeight;
          camera.updateProjectionMatrix();

          renderer.setSize(newWidth, newHeight);
        };

        window.addEventListener("resize", handleResize);

        // Start animation
        animate();

        // Clean up on component unmount
        return () => {
          window.removeEventListener("resize", handleResize);
          document
            .getElementById("three-container")
            .removeChild(renderer.domElement);
        };
      },
      undefined
    ); // Pass undefined as the second argument to avoid the progress callback
  }, []);

  return (
    <div
      id="three-container"
      style={{ backgroundColor: "#0c062d", width: "200px" }}
    ></div>
  );
};

export default LandingPage;
