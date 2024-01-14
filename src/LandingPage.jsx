import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js"; // Import GLTFLoader

const LandingPage = () => {
  const threeContainerRef = useRef(null);
  useEffect(() => {
    // Set up scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#0c062d");
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
      "/skull_salazar_downloadable/scene.gltf",
      (gltf) => {
        const model = gltf.scene;
        model.scale.set(2, 2, 2);
        scene.add(model);

        // Set camera position
        camera.position.set(0, 2 * 2, 5 * 2);

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
        renderer.setSize(
          threeContainerRef.current.clientWidth,
          threeContainerRef.current.clientHeight
        );
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
      ref={threeContainerRef} // Attach ref to the container
      style={{ backgroundColor: "#0c062d", width: "100%" }} // Set width to 100% of viewport
    ></div>
  );
};

export default LandingPage;
