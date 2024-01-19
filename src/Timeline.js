import "./Timeline.css";
import React, { useState, useEffect, useRef } from "react";
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
    <div className="speaker-session-by-autodesk-parent">
      <div className="speaker-session-by-autodesk">
        <div className="introduction-to-the-container">
          <p className="introduction">{`Introduction `}</p>
          <p className="introduction">to the event</p>
        </div>
      </div>
      <div className="am">10:00AM</div>
      <div className="am1">09:00AM</div>
      <div className="participants-registration">
        <p className="introduction">Participants</p>
        <p className="introduction">Registration</p>
      </div>
      <div className="frame-child" />
      <div className="frame-item" />
      <div className="frame-inner" />
      <div className="ellipse-div" />
      <div className="frame-child1" />
      <div className="frame-child2" />
      <div className="frame-child3" />
      <div className="frame-child4" />
      <div className="frame-child5" />
      <div className="frame-child6" />
      <div className="frame-child7" />
      <div className="frame-child8" />
      <div className="pm">04:15PM</div>
      <div className="final-pitches">
        <p className="introduction">{`Final `}</p>
        <p className="introduction">Pitches</p>
      </div>
      <div className="pm1">07:30PM</div>
      <div className="results">Results</div>
      <div className="pm2">12:00PM</div>
      <div className="review-three">
        <p className="introduction">Review:</p>
        <p className="introduction">Three</p>
      </div>
      <div className="am2">01:30AM</div>
      <div className="pm3">08:30PM</div>
      <div className="project-showcase">
        <p className="introduction">Project</p>
        <p className="introduction">Showcase</p>
      </div>
      <div className="review-one">
        <p className="introduction">Review:</p>
        <p className="introduction">One</p>
      </div>
      <div className="am3">10:30AM</div>
      <div className="pm4">04:00PM</div>
      <div className="crisis-challenge">
        <p className="introduction">Crisis</p>
        <p className="introduction">Challenge</p>
      </div>
      <div className="am4">01:00AM</div>
      <div className="first-ideation-check-container">
        <p className="introduction">{`First Ideation `}</p>
        <p className="introduction">Check</p>
      </div>
      <img className="vector-icon" alt="" src="/vector-15.svg" />
      <div className="am5">11:00AM</div>
      <div className="introdution-to-machine-container">
        <p className="introduction">Introdution to</p>
        <p className="introduction">Machine Design</p>
      </div>
      <div className="pm5">08:30PM</div>
      <div className="ideation-continues">
        <p className="introduction">Ideation</p>
        <p className="introduction">Continues</p>
      </div>
      <div className="review-two">
        <p className="introduction">Review:</p>
        <p className="introduction">Two</p>
      </div>
      <div className="d-a-y-container">
        <p className="introduction">D</p>
        <p className="introduction">A</p>
        <p className="introduction">Y</p>
        <p className="introduction">&nbsp;</p>
      </div>
      <div className="d-a-y-container1">
        <p className="introduction">D</p>
        <p className="introduction">A</p>
        <p className="introduction">Y</p>
      </div>
      <div className="div">2</div>
      <div className="d-a-y-container2">
        <p className="introduction">D</p>
        <p className="introduction">A</p>
        <p className="introduction">Y</p>
      </div>
      <div className="div1">3</div>
      <div className="div2">1</div>
      <div className="rectangle-div" />
      <div className="frame-child9" />
      <div className="frame-child10" />
    </div>
  );
};

export default Timeline;
