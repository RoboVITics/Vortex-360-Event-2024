import React from "react";
const About = () => {
  return (
    <div id="about">
      <div class="px-4 py-5 my-2 text-center">
        <img
          class="d-block mx-auto mb-4"
          src="./Screenshot_2023-12-27_150445-removebg-preview.png"
          alt=""
          width="300"
          height="250"
        />
        <h1 class="display-5 fw-bold text-body-emphasis">About US</h1>
        <div class="col-lg-6 mx-auto">
          <p class="lead mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nihil
            consequatur expedita, similique soluta eaque saepe possimus debitis
            labore architecto!
          </p>
          <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button
              type="button"
              class="btn btn-primary btn-lg px-4 gap-3"
              style={{
                backgroundColor: "#212529",
                border: "none",
              }}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
