import React from "react";

const Contact = () => {
  return (
    <div id="contact">
      <div class="container px-4 py-5" id="featured-3">
        <h2 class="pb-2 border-bottom">Contact US</h2>
      </div>
      <div class="container">
        <footer class="py-5">
          <div class="row">
            <div class="col-md-6">
              <h4 class="fw-bold">Social Media</h4>
              <div className="links">
                <a href="#">
                  <img src="./youtube.svg" alt="" />
                </a>
                <a href="#">
                  <img src="./facebook.svg" alt="" />
                </a>
                <a href="#">
                  <img src="./instagram.svg" alt="" />
                </a>
                <a href="#">
                  <img src="./linkedin.svg" alt="" />
                </a>
                <a href="#">
                  <img src="./twitter-x.svg" alt="" />
                </a>
              </div>
            </div>
            <div class="col-md-6 mt-md-0 mt-5">
              <form>
                <h4 class="fw-bold">Subscribe to our newsletter</h4>
                <p>Monthly digest of what's new and exciting from us.</p>
                <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                  <label for="newsletter1" class="visually-hidden">
                    Email address
                  </label>
                  <input
                    id="newsletter1"
                    type="text"
                    class="form-control"
                    placeholder="Email address"
                  />
                  <button
                    class="btn btn-primary"
                    type="button"
                    style={{
                      backgroundColor: "#212529",
                      border: "none",
                    }}
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <p>© 2023 Company, Inc. All rights reserved.</p>
            <ul class="list-unstyled d-flex">
              <li class="ms-3">
                <a class="link-body-emphasis" href="#">
                  <svg class="bi" width="24" height="24"></svg>
                </a>
              </li>
              <li class="ms-3">
                <a class="link-body-emphasis" href="#">
                  <svg class="bi" width="24" height="24"></svg>
                </a>
              </li>
              <li class="ms-3">
                <a class="link-body-emphasis" href="#">
                  <svg class="bi" width="24" height="24"></svg>
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Contact;