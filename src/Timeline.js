import React from "react";
import { events, buttons } from "./Constants";
const Timeline = () => {
  return (
    <div id="timeline">
      <div class="container px-4 py-5">
        <h2 class="border-bottom">Timeline</h2>
      </div>
      <div className="agu">
        <div
          id="myCarousel"
          class="carousel slide mb-6"
          data-bs-ride="carousel"
        >
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
            {events.map((event) => (
              <div key={event.id} class={event.upper}>
                <div
                  class="container"
                  style={{
                    height: "30rem",
                    width: "100%",
                    color: "white",
                    fontWeight: "bold",
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 1)), url(${event.image}) center/cover no-repeat`,
                  }}
                >
                  <h2>{event.name}</h2>
                  <p>{event.date}</p>
                  <p>{event.desp}</p>
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
    </div>
  );
};

export default Timeline;
