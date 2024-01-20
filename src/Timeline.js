/*import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import "../src/Timeline.css";
import timelineGif from "./timeline_gif.gif"; // Import the images here
import gff from "./gff.jpg";

const Timeline = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();
  if (inView) {
    controls.start("visible");
  }
  const [currentIndex, setCurrentIndex] = useState(0);

  const imageAddresses = [  
//    timelineGif,
    gff,

    // Add more image addresses as needed
  ];

  const targetTimes = [
    "2024-01-06T21:05:00",
    "2024-01-07T12:30:00",
    "2024-01-08T15:45:00",
  ]; // Specify target date and times

  useEffect(() => {
    const updateIndex = () => {
      const currentTime = new Date();
      const targetTime = new Date(targetTimes[currentIndex]);

      if (currentTime >= targetTime) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imageAddresses.length);
      }
    };

    const intervalId = setInterval(updateIndex, 1000); // Check every second

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex, imageAddresses.length, targetTimes]);

  return (
    <div id="timeline" style={{ backgroundColor: "#000" }}>
      <div className="container px-4 py-5">
        <h2 className="border-bottom">Timeline</h2>
      </div>
      <motion.div
        ref={ref}
        variants={{
          hidden: { scale: 0.6 },
          visible: { scale: 1 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.8 }}
      >
        <img src="https://picsum.photos/1000" />
      </motion.div>
    </div>
  );
};

export default Timeline;*/
import React from "react";

const Timeline = () => {
  return (
    <div>
      <div
        id="agu"
        class="carousel slide"
        data-bs-ride="carousel"
        data-bs-touch="true"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#agu"
            data-bs-slide-to="0"
            class="active"
          ></button>
          <button
            type="button"
            data-bs-target="#agu"
            data-bs-slide-to="1"
          ></button>
          <button
            type="button"
            data-bs-target="#agu"
            data-bs-slide-to="2"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://picsum.photos/200"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="https://picsum.photos/200"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="https://picsum.photos/200"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>
        <button
          id="prev-slide"
          class="carousel-control-prev"
          type="button"
          data-bs-target="#agu"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon"></span>
        </button>
        <button
          id="next-slide"
          class="carousel-control-next"
          type="button"
          data-bs-target="#agu"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon"></span>
        </button>
      </div>
    </div>
  );
};

export default Timeline;
