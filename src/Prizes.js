import React, { useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

// import React from "react";
// import { prizes } from "./Constants";
// const Prizes = () => {
//   return (
//     <div id="prizes">
//         <h2>Prizes</h2>
//         <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
//           {prizes.map((prize) => (
//             <div key={prize.id} class="feature col">
//               <img src={prize.icon} alt="" height="70px" />
//               <h3 class="fs-2 text-body-emphasis">{prize.title}</h3>
//               <p>{prize.desp}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//   );
// };

// export default Prizes;
import "./Prizes.css";

const Prizes = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();
  if (inView) {
    controls.start("visible");
  }
  const prizes = [
    {
      id: 1,
      icon: "/Prize2.png",
    },
  ];

  return (
    <div id="prizes" className="prizes-container">
      <h2>Prizes</h2>
      <motion.div
        className="prizes-row"
        ref={ref}
        variants={{
          hidden: { scale: 0.6 },
          visible: { scale: 1 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.8 }}
      >
        <div className="prize-feature">
          <div className="prize-container">
            <img
              src={prizes[0].icon}
              alt={`Prize ${prizes[0].id}`}
              className="prize-image"
            />
            <div className="prize-details">
              <p className="prize-description">Prize Pool of Rs 1,10,000</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Prizes;
