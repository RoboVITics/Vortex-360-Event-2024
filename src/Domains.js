import React from "react";
import { domains, buttons } from "./Constants";
import { Link } from "react-router-dom";
const Domains = () => {
  return (
    <div id="domains">
      <h2>Domains</h2>
      <div id="myCarousel" class="carousel slide mb-6" data-bs-ride="carousel">
        <div class="carousel-indicators">
          {buttons.map((btn) => (
            <button
              key={btn.id}
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={btn.slide}
              class={btn.class}
              aria-current={btn.current}
              aria-label={btn.label}
            ></button>
          ))}
        </div>
        <div class="carousel-inner">
          {domains.map((domain) => (
            <div
              key={domain.id}
              class={domain.upper}
              style={{
                background: `url(${domain.bg}) center/cover no-repeat,url(${domain.bg2}) center/cover no-repeat`,
                backgroundSize: 'auto 75%,auto 75%', // 80% height and width auto
                backgroundPosition: '90% 120%,10% 120%', // Adjust these values based on your preference
              }}
            >
              <div
                class="container"
                style={{
                  color: "white",
                  fontWeight: "bold",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <h2
                  style={{
                    color: "white",
                  }}
                >
                  {domain.name}
                </h2>
                <p>{domain.desp}</p>
                <Link
                  to={`/domain/${domain.id}`}
                  style={{
                    fontWeight: "bold",
                    color: "white",
                    fontSize: "18px",
                  }}
                >
                  More info
                  <img
                    src="./icons8-chevron-right-50.png"
                    alt=""
                    height="15px"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Domains;
