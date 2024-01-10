import React from "react";
import { sponsors } from "./Constants";
const Sponsors = () => {
  return (
    <div id="sponsors">
      <div class="container px-4 py-5" id="featured-3" >
        <h2 class="pb-2 border-bottom">Sponsors</h2>
      </div>
      <div class="container marketing">
        <div class="row">
          {sponsors.map((s) => (
            <div key={s.id} class="col-6 mt-sm-3 mt-4 mb-3 mx-0 sponsor">
              <img src={s.icon} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
