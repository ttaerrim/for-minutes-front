import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Contact.css";
import emailjs from "emailjs-com";

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_72ze72f",
        "template_dv4wyku",
        e.target,
        "user_r4ISSSGenIiDDkdohUINy"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }
  function refreshPage() {
    window.location.reload();
  }
  return (
    <div data-aos="fade-ip" className="boxes">
      <section id="contact">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <div className="wow fadeInUp section-title" data-wow-delay="0.2s">
                <h2 className="nino-sectionHeading">Contact Us</h2>
                <p>To. TEAM JDJS</p>
              </div>
            </div>

            <div className="col-md-12 col-sm-12">
              <div className="wow fadeInUp" data-wow-delay="0.6s">
                <form id="contact-form" onSubmit={sendEmail}>
                  <div className="col-md-4 col-sm-4">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div className="col-md-4 col-sm-4">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="col-md-4 col-sm-4">
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      placeholder="Subject"
                      required
                    />
                  </div>
                  <div className="col-md-12 col-sm-12">
                    <textarea
                      className="form-control"
                      rows="5"
                      name="message"
                      placeholder="Message"
                      required
                    ></textarea>
                  </div>
                  <div className="col-md-offset-9 col-md-3 col-sm-offset-3 col-sm-6">
                    <button
                      id="submit"
                      type="submit"
                      className="form-control"
                      name="submit"
                      onClick={refreshPage}
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
