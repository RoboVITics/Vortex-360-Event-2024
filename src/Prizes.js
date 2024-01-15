import React, { useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { prizes } from "./Constants";
const Prizes = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();
  if (inView) {
    controls.start("visible");
  }
  return (
    <div id="prizes">
      <div class="container px-4 py-5 prizes" id="featured-3">
        <h2 class="pb-2 border-bottom">Prizes</h2>
        <motion.div
          class="row g-4 py-5 row-cols-1 row-cols-lg-3"
          ref={ref}
          variants={{
            hidden: { scale: 0.6 },
            visible: { scale: 1 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.8 }}
        >
          {prizes.map((prize) => (
            <div key={prize.id} class="feature col">
              <img src={prize.icon} alt="" height="70px" />
              <h3 class="fs-2 text-body-emphasis">{prize.title}</h3>
              <p>{prize.desp}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Prizes;
