import React from "react";

const About = () => {
  return (
    <div id="about">
      <div class="px-4 py-5 my-2 text-center">
        <img
          class="d-block mx-auto mb-4"
          src="./309248737_420314180163942_8494420366976207538_n-removebg-preview.png"
          alt=""
          width="300"
          height="250"
        />
        <h1 class="display-5 fw-bold text-body-emphasis">About US</h1>
        <div class="col-lg-6 mx-auto">
          <p class="lead mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, modi
            laborum quae sint soluta illo inventore ut ad et nesciunt
            consequuntur delectus quia earum illum molestias, deserunt ipsa
            nihil laudantium?
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
