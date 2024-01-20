import React, { useRef } from "react";
import { domains, buttons } from "./Constants";
import { Link } from "react-router-dom";
import { motion, useInView, useAnimation } from "framer-motion";

const Domains = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();
  if (inView) {
    setTimeout(() => {
      document.querySelectorAll("#next-slide")[0].click();
    }, 2000);
    controls.start("visible");
  }
  return (
    <div id="domains">
      <h2 style={{ marginBottom: "-100px" }}>Tracks</h2>
      <motion.div
        id="carouselDemo"
        ref={ref}
        class="carousel slide"
        data-bs-ride="carousel"
        data-bs-touch="true"
        variants={{
          hidden: { scale: 0.6 },
          visible: { scale: 1 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.8 }}
      >
        <div class="carousel-indicators">
          {buttons.map((btn) => (
            <button
              key={btn.id}
              type="button"
              data-bs-target="#carouselDemo"
              data-bs-slide-to={btn.slide}
              class={btn.class}
            ></button>
          ))}
        </div>
        <div class="carousel-inner">
          {domains.map((domain) => (
            <div
              key={domain.id}
              class={domain.upper}
              style={{
                
                backgroundSize: "auto 75%,auto 75%", // 80% height and width auto
                backgroundPosition: "90% 120%,10% 120%", // Adjust these values based on your preference
              }}
            >
              <div
                class="carousel-caption"
                style={{
                  color: "white",
                  fontWeight: "bold",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
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
                {/* <Link
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
                </Link> */}
              </div>
            </div>
          ))}
        </div>
        <button
          id="prev-slide"
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselDemo"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon"></span>
        </button>
        <button
          id="next-slide"
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselDemo"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon"></span>
        </button>
      </motion.div>
    </div>
  );
};

export default Domains;
