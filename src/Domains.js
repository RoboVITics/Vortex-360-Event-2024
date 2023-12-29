import React from "react";
import { domains } from "./Constants";
import { Link } from "react-router-dom";
const Domains = () => {
  return (
    <div id="domains">
      <div class="container px-4 py-5" id="featured-3">
        <h2 class="pb-2 border-bottom">Domains</h2>
        <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
          {domains.map((domain) => (
            <div key={domain.id} class="feature col">
              <div class="feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3">
                <img src={domain.icon} alt="" height="30px" />
              </div>
              <h3 class="fs-2 text-body-emphasis">{domain.dom}</h3>
              <p>{domain.desp}</p>

              <Link to={`/domain/${domain.id}`} style={{ fontWeight: "bold" }}>
                Call to action
                <img src="./right-thin-chevron.svg" alt="" height="15px" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Domains;
