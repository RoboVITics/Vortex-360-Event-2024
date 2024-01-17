import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./Contact.css";
import img1 from "../src/gff.jpg";
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
          <div className="container" data-aos="fade-up">
            <div className="section-title">
              <h2>
                <span className="border-bottom" ref={ref}>
                  Contact Us
                </span>
              </h2>
            </div>
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
            <div className="contact-details">
              <div className="col-lg-6 mt-3 newform">
                <div className="contact-person">
                  <img src={img1} alt="" className="contact_newimg" />
                  <h3>Chairperson</h3>
                  <p>Akhil Mahesh</p>
                  <p>
                    <strong>Phone:</strong> 9833-548-555
                  </p>
                </div>
              </div>
              <div className="col-lg-6 mt-3 newform">
                <div className="contact-person">
                  <img src={img1} alt="" className="contact_newimg" />
                  <h3>Vice Chairperson</h3>
                  <p>Adwyck Gupta</p>
                  <p>
                    <strong>Phone:</strong> 8491-092-405
                  </p>
                </div>
  <main id="main">
    <div id="leftContact">
      <section id="contact" className="contact">
          <div className="section-title">
            <h2>Contact Us</h2>
          </div>
        <div className="container" data-aos="fade-up">
          <div className="contact-details">
            <div className="col-lg-6 mt-3 newform">
              <div className="contact-person">
                <h3>Chairperson</h3>
                <p>Aditya Subramanian</p>
                <p>
                  <strong>Phone:</strong> <a href="tel:+9833548555">9833-548-555</a>
                </p>
              </div>
            </div>
            <div className="col-lg-6 mt-3 newform">
              <div className="contact-person">
                <h3>Vice Chairperson</h3>
                <p>Achyut Duggal</p>
                <p>
                  <strong>Phone:</strong> <a href="tel:+8491092405">8491-092-405</a>
                </p>
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
            <a href="#" class="socialContainer containerOne">
              <svg class="socialSvg instagramSvg" viewBox="0 0 16 16">
                {" "}
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path>{" "}
              </svg>
            </a>

            <a href="#" class="socialContainer containerTwo">
              <svg class="socialSvg twitterSvg" viewBox="0 0 16 16">
                {" "}
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path>{" "}
              </svg>{" "}
            </a>
            <a href="#" class="socialContainer containerThree">
              <svg class="socialSvg linkdinSvg" viewBox="0 0 448 512">
                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
              </svg>
            </a>

            <a href="#" class="socialContainer containerFour">
              <svg class="socialSvg whatsappSvg" viewBox="0 0 16 16">
                {" "}
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path>{" "}
              </svg>
            </a>

            <a
              href="#"
              className="socialContainer containerFour"
              onClick={handleModalOpen}
            >
              <svg className="socialSvg whatsappSvg" viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path>
              </svg>
            </a>
            <Modal show={showModal} onHide={handleModalClose}>
              <Modal.Header closeButton>
                <Modal.Title>Contact Form</Modal.Title>
                <p>Enter Your Querry</p>
              </Modal.Header>
              <Modal.Body>
                <form
                  action="#"
                  method="post"
                  role="form"
                  className="php-email-form"
                  onSubmit={sendEmail}
                >
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6 form-group mt-3 mt-md-0">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group mt-3">
        <div className="card">
  <a href="https://www.instagram.com/robovitics/" class="socialContainer containerOne" target="_blank">
    <svg class="socialSvg instagramSvg" viewBox="0 0 16 16"> <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path> </svg>
  </a>
  
  <a href="https://twitter.com/robo_vit" class="socialContainer containerTwo" target="_blank">
    <svg class="socialSvg twitterSvg" viewBox="0 0 16 16"> <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path> </svg>              </a>
    
  <a href="https://www.linkedin.com/company/robovitics/" class="socialContainer containerThree" target="_blank">
    <svg class="socialSvg linkdinSvg" viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
  </a>
  
    <a href="https://www.youtube.com/channel/UCFiwOI-W5b06NweratR-RdA" class="socialContainer containerSix" target="_blank">
    <svg class="socialSvg youtubeSvg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path fill="#FF0000" d="M23.73 7.73c-.27-1.05-1.02-1.89-2.01-2.1C20.6 5.4 12 5.01 12 5.01s-8.6.39-9.72.62c-.99.21-1.74 1.05-2.01 2.1C0 9.42 0 12 0 12s0 2.58.27 3.27c.27 1.05 1.02 1.89 2.01 2.1 1.12.23 9.72.62 9.72.62s8.6-.39 9.72-.62c.99-.21 1.74-1.05 2.01-2.1.27-.69.27-1.27.27-3.27s0-2.58-.27-3.27zm-15.73 7.36V8.9l6.5 3.6-6.5 3.19z"/>
    </svg>
</a>

  <a href="https://www.facebook.com/robovitics" class="socialContainer containerFour" target="_blank">
    <svg class="socialSvg facebookSvg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path fill="#1877F2" d="M19 2H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h7.65v-7.04h-2.1V9.49h2.1V7.36c0-2.08 1.26-3.22 3.13-3.22.9 0 1.86.16 1.86.16v2.05h-1.04c-1.03 0-1.36.64-1.36 1.3v1.54h2.31l-.36 2.45h-1.95V21h3.86a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3z"/>
    </svg>
</a>

    <a href="mailto:robovitics@vit.ac.in" className="socialContainer containerFive" target="_blank" onClick={handleModalOpen}>
  <svg class="socialSvg emailSvg" viewBox="0 0 24 24" fill="#000000" xmlns="http://www.w3.org/2000/svg">
    <path stroke="#FFFFFF" stroke-width="2" d="M22 4H2C1.44772 4 1 4.44772 1 5V18C1 18.5523 1.44772 19 2 19H22C22.5523 19 23 18.5523 23 18V5C23 4.44772 22.5523 4 22 4ZM22 18H2V6L12 13L22 6V18ZM12 11L2 5H22L12 11Z" fill="#FFD600"/>
  </svg>
</a>

        {/* <Modal show={showModal} onHide={handleModalClose}>
            <Modal.Header closeButton>
              <Modal.Title>Contact Form</Modal.Title>
              <p>Enter Your Querry</p>
            </Modal.Header>
            <Modal.Body>
              <form action="#" method="post" role="form" className="php-email-form" onSubmit={sendEmail}>
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      id="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group mt-3">
                    <textarea
                      className="form-control"
                      name="message"
                      rows="8"
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  <div className="text-center">
                    <button type="submit">Send Message</button>
                  </div>
                </form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleModalClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </motion.div>
        </center>
                </div>
                <div className="form-group mt-3">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group mt-3">
                  <textarea
                    className="form-control"
                    name="message"
                    rows="8"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <div className="text-center">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleModalClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal> */}
        </div>
        </center> 
      </div>
    </main>
  );
};

export default Contact;
