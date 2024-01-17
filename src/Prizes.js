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

import React from "react";
import "./Prizes.css";

const Prizes = () => {
  const prizes = [
    {
      id: 1,
      icon: "/Prize2.png",
    },
  ];

  return (
    <div id="prizes" className="prizes-container">
      <h2>Prizes</h2>
      <div className="prizes-row">
        <div className="prize-feature">
          <div className="prize-container">
            <img
              src={prizes[0].icon}
              alt={`Prize ${prizes[0].id}`}
              className="prize-image"
            />
            <div className="prize-details">
              <p
                className="prize-description"
              >
                Prize Pool of Rs 1,10,000
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prizes;
