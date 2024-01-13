import React from "react";
import { prizes } from "./Constants";
const Prizes = () => {
  return (
    <div id="prizes">
        <h2>Prizes</h2>
        <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
          {prizes.map((prize) => (
            <div key={prize.id} class="feature col">
              <img src={prize.icon} alt="" height="70px" />
              <h3 class="fs-2 text-body-emphasis">{prize.title}</h3>
              <p>{prize.desp}</p>
            </div>
          ))}
        </div>
      </div>
  );
};

export default Prizes;
