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
      <div class="container px-4 py-5" id="featured-3">
        <h2 class="pb-2 border-bottom">Sponsors</h2>
      </div>
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
            <div key={s.id} class="col-6 mt-sm-3 mt-4 mb-3 mx-0 sponsor">
              <img src={s.icon} alt="" />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Sponsors;
