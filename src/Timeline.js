import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import "../src/Timeline.css";
import timelineGif from "./timeline_gif.gif"; // Import the images here
import gff from "./gff.jpg";

const Timeline = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const imageAddresses = [
    timelineGif,
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
    <div id="timeline">
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

export default Timeline;
