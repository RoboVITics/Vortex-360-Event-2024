import React, { useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const FAQs = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();
  if (inView) {
    controls.start("visible");
  }
  return (
    <div id="faqs">
      <hr style={{ marginBottom: "0.5rem", visibility: "hidden" }} />
      <h1>FAQs</h1>
      <motion.div
        ref={ref}
        className="faqs"
        variants={{
          hidden: { scale: 0.6 },
          visible: { scale: 1 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.8 }}
      >
        <div className="cardcontainer">
          <div className="flip">
            <div
              className="front"
              style={{
                fontWeight: "bold",
                fontSize: "30px",
              }}
            >
              What is Vortex360?
            </div>
            <div className="back">
              Vortex360 is a three-day Mechanical Design Hackathon hosted by
              RoboVITics, powered by AutoDesk's Fusion 360. It's an immersive
              experience for participants to explore 3D modeling, rendering, and
              manufacturing.
            </div>
          </div>
        </div>
        <div className="cardcontainer">
          <div className="flip">
            <div
              className="front"
              style={{
                fontWeight: "bold",
                fontSize: "30px",
              }}
            >
              When and where is Vortex360 taking place?
            </div>
            <div className="back">
              Vortex360 is scheduled for February 2nd to 4th at Anna Auditorium,
              offering a dynamic environment for hands-on exploration of
              innovative design concepts.
            </div>
          </div>
        </div>
        <div className="cardcontainer">
          <div className="flip">
            <div
              className="front"
              style={{
                fontWeight: "bold",
                fontSize: "30px",
              }}
            >
              Who can participate in Vortex360?
            </div>
            <div className="back">
              Vortex360 is open to enthusiasts, students, and professionals
              passionate about mechanical design. Whether you're a beginner or
              an experienced designer, everyone is welcome!
            </div>
          </div>
        </div>
        <div className="cardcontainer">
          <div className="flip">
            <div
              className="front"
              style={{
                fontWeight: "bold",
                fontSize: "30px",
              }}
            >
              What tools will participants use during the event?
            </div>
            <div className="back">
              Participants will utilize Fusion 360 tools for 3D modeling,
              rendering, and manufacturing. It's a chance to harness the power
              of cutting-edge technology in the design process.
            </div>
          </div>
        </div>
        <div className="cardcontainer">
          <div className="flip">
            <div
              className="front"
              style={{
                fontWeight: "bold",
                fontSize: "30px",
              }}
            >
              Is there a registration fee for Vortex360?
            </div>
            <div className="back">
              No, participation in Vortex360 is free of charge. We want to
              encourage as many individuals as possible to join this exciting
              journey of creativity and innovation.
            </div>
          </div>
        </div>
        <div className="cardcontainer">
          <div className="flip">
            <div
              className="front"
              style={{
                fontWeight: "bold",
                fontSize: "30px",
              }}
            >
              Can I participate remotely in Vortex360?
            </div>
            <div className="back">
              Vortex360 is an offline event at Anna Auditorium. Unfortunately,
              remote participation is not available. We encourage you to join us
              in person for an immersive experience.
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FAQs;
