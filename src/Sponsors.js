import React from "react";
import { sponsors } from "./Constants";
const Sponsors = () => {
  return (
    <div id="sponsors">
      <div class="container px-4 py-5" id="featured-3" >
        <h2 class="pb-2 border-bottom">Sponsors</h2>
      </div>
      <div class="marketing-1">
        {sponsors.map((s) => (
          <div key={s.id} class="sponsor">
            <img src={s.icon} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
