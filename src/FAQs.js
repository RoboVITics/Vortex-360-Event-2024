import React, { useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
const FAQs = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();
  if (inView) {
    controls.start("visible");
  }
  return (
    <div id="faqs">
      <div class="container px-4 py-5" id="featured-3">
        <h2 class="pb-2 border-bottom">FAQs</h2>
      </div>
      <motion.div
        className="faqs"
        ref={ref}
        variants={{
          hidden: { scale: 0.6 },
          visible: { scale: 1 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.8 }}
      >
        <h2>FAQs</h2>
      <div className="faqs">
        <div className="cardcontainer">
          <div className="flip">
            <div className="front">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
              voluptate?
            </div>
            <div className="back">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Repudiandae corporis rerum voluptatibus, at suscipit itaque ab
              cumque aliquid omnis deleniti.
            </div>
          </div>
        </div>
        <div className="cardcontainer">
          <div className="flip">
            <div className="front">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
              voluptate?
            </div>
            <div className="back">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Repudiandae corporis rerum voluptatibus, at suscipit itaque ab
              cumque aliquid omnis deleniti.
            </div>
          </div>
        </div>
        <div className="cardcontainer">
          <div className="flip">
            <div className="front">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
              voluptate?
            </div>
            <div className="back">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Repudiandae corporis rerum voluptatibus, at suscipit itaque ab
              cumque aliquid omnis deleniti.
            </div>
          </div>
        </div>
        <div className="cardcontainer">
          <div className="flip">
            <div className="front">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
              voluptate?
            </div>
            <div className="back">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Repudiandae corporis rerum voluptatibus, at suscipit itaque ab
              cumque aliquid omnis deleniti.
            </div>
          </div>
        </div>
        <div className="cardcontainer">
          <div className="flip">
            <div className="front">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
              voluptate?
            </div>
            <div className="back">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Repudiandae corporis rerum voluptatibus, at suscipit itaque ab
              cumque aliquid omnis deleniti.
            </div>
          </div>
        </div>
        <div className="cardcontainer">
          <div className="flip">
            <div className="front">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
              voluptate?
            </div>
            <div className="back">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Repudiandae corporis rerum voluptatibus, at suscipit itaque ab
              cumque aliquid omnis deleniti.
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FAQs;
