import React, { useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { sponsors } from "./Constants";
const Sponsors = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();
  if (inView) {
    controls.start("visible");
  }
  return (
    <div id="sponsors">
      <h1>Sponsors</h1>
      <motion.div
        class="container marketing"
        ref={ref}
        variants={{
          hidden: { scale: 0.6 },
          visible: { scale: 1 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.8 }}
      >
        <div class="row">
          {sponsors.map((s) => (
            <div key={s.id} class="sponsor">
              <img src={s.icon} alt="" />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Sponsors;
