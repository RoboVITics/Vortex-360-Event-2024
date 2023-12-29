import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_czimkfo', 'template_kc5fuss', e.target, 'o7PpbJU1tlTDACpw_')
      .then((result) => {
        console.log(result.text);
        console.log('Message sent successfully');
      })
      .catch((error) => {
        console.log(error.text);
      });

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <main id="main">
      {/* ... (other sections if any) */}


      <div id='leftContact'>


        {/* Social Media Section */}



        {/* Heads of the Club Section */}
        <section id="club-heads" className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h4 className="fw-bold">Club Heads</h4>
                <div className="club-head">
                  <p>Head of Club</p>
                  <h5>Akhil Mahesh</h5>
                  <h5>RoboVITics</h5>
                  <p>
                    <strong>Phone:</strong> 9833-548-555
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="club-head">
                  <p>Vice Head</p>
                  <h5>Adwyck Gupta</h5>
                  <h5>RoboVITics</h5>
                  <p>
                    <strong>Phone:</strong> 8491-092-405
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Media Section */}
        <section id="social-media" className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h4 className="fw-bold">Social Media</h4>
                <div className="links mt-3">
                  <a href="https://twitter.com/robo_vit" className="twitter" target="_blank" rel="noopener noreferrer">
                    <img src="./twitter-x.svg" alt="Twitter" />
                  </a>
                  <a href="https://www.facebook.com/robovitics" className="facebook" target="_blank" rel="noopener noreferrer">
                    <img src="./facebook.svg" alt="Facebook" />
                  </a>
                  <a href="https://www.instagram.com/robovitics/" className="instagram" target="_blank" rel="noopener noreferrer">
                    <img src="./instagram.svg" alt="Instagram" />
                  </a>
                  <a href="https://www.linkedin.com/company/robovitics/mycompany/" className="linkedin" target="_blank" rel="noopener noreferrer">
                    <img src="./linkedin.svg" alt="LinkedIn" />
                  </a>
                  <a href="https://www.youtube.com/channel/UCFiwOI-W5b06NweratR-RdA" className="youtube" target="_blank" rel="noopener noreferrer">
                    <img src="./youtube.svg" alt="YouTube" />
                  </a>
                  {/* Add more social media links as needed */}
                </div>
              </div>
              {/* ... (additional content) */}
            </div>
          </div>
        </section>
        {/* Additional Footer Content */}
        <footer id="footer">
          <div class="footer-top">
            <div class="container">
              <div class="row">
                {/* ... (content from the provided code) */}
              </div>
            </div>
          </div>
          <div class="container">
            <div class="copyright">
              &copy; Copyright <strong><span>Vortex</span></strong>. All Rights Reserved
            </div>
          </div>
        </footer>
      </div>
      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Contact Us</h2>
          </div>
        </div>
        <div className="container" data-aos="fade-up">
           
            {/* Left Column */}
            

            {/* Right Column (Form) */}
            <div className="col-lg-8 mt-3 ">
              <form action="#" method="post" role="form" className="php-email-form" onSubmit={sendEmail}>
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
            </div>
          
        </div>
      </section>



    </main>
  );
};

export default Contact;