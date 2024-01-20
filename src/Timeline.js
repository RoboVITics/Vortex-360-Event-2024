import React, { useState, useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { Timeline as ResponsiveTimeline } from "react-responsive-timeline";
import { timelinebuttons } from "./Constants";
import "./Timeline.css";

const Timeline = () => {
  const [position, setPosition] = useState({
    pivot: "horizontal",
    direction: "center",
  });
  const [tooltip] = useState(true);
  const [textLimit, setTextLimit] = useState("none");
  const [currentDay, setCurrentDay] = useState(1);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 768;
      setPosition({
        pivot: isMobile ? "vertical" : "horizontal",
        direction: "center",
      });
      setIsMobileView(isMobile);
    };

    window.addEventListener("resize", handleResize);

    // Initial check
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleTextLimit = (value) => {
    setTextLimit(value);
  };

  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();

  const handleDayChange = (increment) => {
    const newDay = currentDay + increment;
    if (newDay >= 1 && newDay <= 3) {
      setCurrentDay(newDay);
    }
  };

  if (inView) {
    setTimeout(() => {
      document.querySelectorAll("#next-slide")[0].click();
    }, 2000);
    controls.start("visible");
  }

  return (
    <div id="timeline">
      <hr id="timeline" style={{ marginBottom: "1.5rem", visibility: "hidden" }} />
      <h2 style={{ marginBottom: "20px", textAlign: "center" }}>Timeline</h2>
      {isMobileView ? (
        <div className="day-timeline">
          {[1, 2, 3].map((day) => (
            <div key={day}>
              <h3>DAY {day}</h3>
              <ResponsiveTimeline
                pivot={position.pivot}
                direction={position.direction}
                tooltip={tooltip}
                textLimit={textLimit}
                timelines={getTimelineData(day)}
              />
            </div>
          ))}
        </div>
      ) : (
        <motion.div
          id="timelineDemo"
          ref={ref}
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-touch="true"
          variants={{
            hidden: { scale: 0.6 },
            visible: { scale: 1 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.8 }}
        >
          <div className="carousel-indicators">
            {timelinebuttons.map((btn) => (
              <button
                key={btn.id}
                type="button"
                data-bs-target="#timelineDemo"
                data-bs-slide-to={btn.slide}
                className={btn.class}
              ></button>
            ))}
          </div>
          <div className="carousel-inner">
            {[1, 2, 3].map((day) => (
              <div
                key={day}
                className={`carousel-item timeline-carousel-item${day === currentDay ? " active" : ""
                  }`}
              >
                <div className="day-timeline">
                  <h3><b>DAY {day}</b></h3>
                  <ResponsiveTimeline
                    pivot={position.pivot}
                    direction={position.direction}
                    tooltip={tooltip}
                    textLimit={textLimit}
                    timelines={getTimelineData(day)}
                  />
                </div>
              </div>
            ))}
          </div>

          <button
            style={{ marginTop: "-10px" }}
            className="carousel-control-prev"
            type="button"
            data-bs-target="#timelineDemo"
            data-bs-slide="prev"
            onClick={() => handleDayChange(-1)}
          >
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#timelineDemo"
            data-bs-slide="next"
            onClick={() => handleDayChange(1)}
          >
            <span style={{ marginTop: "-30px" }} className="carousel-control-next-icon"></span>
          </button>
        </motion.div>
      )}
    </div>
  );
};

const getTimelineData = (day) => {

  switch (day) {
    case 1:
      return [
        {
          title: "Participants Registration",
          sub: "9:00 AM",
        },
        {
          title: "Introduction to the event",
          sub: "10:00 AM",
        },
        {
          title: "Introduction to Machine Design",
          sub: "11:00 AM",
        },
        {
          title: "Ideation Continues",
          sub: "08:30 PM",
        },
      ];
    case 2:
      return [
        {
          title: "First Ideation Check",
          sub: "1:00 AM",
        },
        {
          title: "Crisis Challenge",
          sub: "04:00 PM",
        },
        {
          title: "Review: One",
          sub: "10:30 AM",
        },
        {
          title: "Project Showcase",
          sub: "08:30 PM",
        },
      ];
    case 3:
      return [
        {
          title: "Project Showcase",
          sub: "08:30 PM",
        },
        {
          title: "Review: Two",
          sub: "01:30 AM",
        },
        {
          title: "Review: Three",
          sub: "12:00 PM",
        },
        {
          title: "Final Pitches",
          sub: "04:15 PM",
        },
        {
          title: "Results",
          sub: "07:30 PM",
        },
      ];
    default:
      return [];
  }
};

export default Timeline;