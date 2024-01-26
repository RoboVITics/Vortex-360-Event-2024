import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./Contact.css";
import img1 from "../../assets/gff.jpg";
import { useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();
  if (inView) {
    controls.start("visible");
  }
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_czimkfo",
        "template_kc5fuss",
        e.target,
        "o7PpbJU1tlTDACpw_"
      )
      .then((result) => {
        console.log(result.text);
        console.log("Message sent successfully");
      })
      .catch((error) => {
        console.log(error.text);
      });

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    handleModalClose();
  };

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <main id="main">
      <div id="leftContact">
        <section id="contact" className="contact">
          <div className="section-title">
            <h1>Contact Us</h1>
          </div>

          <motion.div
            className="container"
            data-aos="fade-up"
            ref={ref}
            variants={{
              hidden: { scale: 0.6 },
              visible: { scale: 1 },
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.8 }}
          >
            <div className="row ">
              <div className="col-lg-6 mt-3 newform newperson ">
                <div className="contact-person ">
                  <h3>Aditya Subramanian</h3>
                  <p>Chairperson</p>
                  <p>
                    <strong>Phone:</strong> <a href="tel:+9840290425">+91 98402 90425</a>
                  </p>
                </div>
              </div>
              <div className="col-lg-6 mt-3 newform">
                <div className="contact-person">
                  <h3>Achyut Duggal</h3>
                  <p>Vice-Chairperson</p>
                  <p>
                    <strong>Phone:</strong> <a href="tel:+7981693128">+91 79816 93128</a>
                  </p>
                </div>
              </div>
              <div className="col-lg-6 mt-3 newform">
                <div className="contact-person">
                  <h3>Virajit Dutt</h3>
                  <p>Event Coordinator</p>
                  <p>
                    <strong>Phone:</strong> <a href="tel:+7028027978">+91 70280 27978</a>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
        <center>
          <motion.div
            className="card"
            variants={{
              hidden: { scale: 0.6 },
              visible: { scale: 1 },
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.8 }}
          >
            <a
              href="https://www.instagram.com/robovitics/"
              class="socialContainer containerOne"
              target="_blank"
            >
              <svg class="socialSvg instagramSvg" viewBox="0 0 16 16">
                {" "}
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path>{" "}
              </svg>
            </a>

            <a
              href="https://twitter.com/robo_vit"
              class="socialContainer containerTwo"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="white"
                class="socialSvg bi bi-twitter-x"
                viewBox="0 0 16 16"
              >
                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
              </svg>{" "}
            </a>

            <a
              href="https://www.linkedin.com/company/robovitics/"
              class="socialContainer containerThree"
              target="_blank"
            >
              <svg class="socialSvg linkdinSvg" viewBox="0 0 448 512">
                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
              </svg>
            </a>

            <a
              href="https://www.youtube.com/channel/UCFiwOI-W5b06NweratR-RdA"
              class="socialContainer containerSix"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="white"
                class="socialSvg bi bi-youtube"
                viewBox="0 0 16 16"
              >
                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
              </svg>
            </a>

            <a
              href="https://www.facebook.com/robovitics"
              class="socialContainer containerFour"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="white"
                class="socialSvg bi bi-facebook"
                viewBox="0 0 16 16"
              >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
              </svg>
            </a>

            <a
              href="mailto:robovitics@vit.ac.in"
              className="socialContainer containerFive"
              target="_blank"
              onClick={handleModalOpen}
            >
              <svg
                class="socialSvg emailSvg"
                viewBox="0 0 24 24"
                fill="#000000"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke="#FFFFFF"
                  stroke-width="2"
                  d="M22 4H2C1.44772 4 1 4.44772 1 5V18C1 18.5523 1.44772 19 2 19H22C22.5523 19 23 18.5523 23 18V5C23 4.44772 22.5523 4 22 4ZM22 18H2V6L12 13L22 6V18ZM12 11L2 5H22L12 11Z"
                  fill="#FFD600"
                />
              </svg>
            </a>
          </motion.div>
        </center>
      </div>
    </main>
  );
};

export default Contact;
