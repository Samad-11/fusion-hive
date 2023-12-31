import React, { useEffect } from "react";
import toast from "react-hot-toast";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = ({ setMenu }) => {
  const sent = true;
  const onSubmitHandle = async (e) => {
    e.preventDefault();
    if (sent) {
      toast.success("Message Sent Successfully", { duration: 4000 });
    }
  };
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section
      id="contact"
      className="s-contact"
      onClick={(e) => {
        setMenu("");
      }}
    >
      <div className="overlay" />
      <div className="contact__line" />
      <div className="row section-header" data-aos="fade-up">
        <div className="col-full">
          <h3 className="subhead">Contact Us</h3>
          <h1 className="display-2 display-2--light">
            Reach out for a new project or just say hello
          </h1>
        </div>
      </div>
      <div className="row contact-content" data-aos="fade-up">
        <div className="contact-primary">
          <h3 className="h6">Send Us A Message</h3>
          <form name="contactForm" id="contactForm" onSubmit={onSubmitHandle}>
            <fieldset>
              <div className="form-field">
                <input
                  name="contactName"
                  type="text"
                  id="contactName"
                  placeholder="Your Name"
                  required
                  className="full-width"
                />
              </div>
              <div className="form-field">
                <input
                  name="contactEmail"
                  type="email"
                  id="contactEmail"
                  placeholder="Your Email"
                  required
                  className="full-width"
                />
              </div>
              <div className="form-field">
                <input
                  name="contactSubject"
                  type="text"
                  id="contactSubject"
                  placeholder="Subject"
                  className="full-width"
                />
              </div>
              <div className="form-field">
                <textarea
                  name="contactMessage"
                  id="contactMessage"
                  placeholder="Your Message"
                  rows={10}
                  cols={50}
                  required
                  className="full-width"
                />
                <button className="full-width btn--primary">Submit</button>
              </div>
              <div className="form-field">
                <div className="submit-loader">
                  <div className="text-loader">Sending...</div>
                  <div className="s-loader">
                    <div className="bounce1" />
                    <div className="bounce2" />
                    <div className="bounce3" />
                  </div>
                </div>
              </div>
            </fieldset>
          </form>
          {/* contact-warning */}
          <div className="message-warning">
            Something went wrong. Please try again.
          </div>
          {/* contact-success */}
          <div className="message-success">
            Your message was sent, thank you!
            <br />
          </div>
        </div>{" "}
        {/* end contact-primary */}
        <div className="contact-secondary">
          <div className="contact-info">
            <h3 className="h6 hide-on-fullwidth">Contact Info</h3>
            <div className="cinfo">
              <h5>Where to Find Us</h5>
              <p>
                1600 Amphitheatre Parkway
                <br />
                Mountain View, CA
                <br />
                94043 US
              </p>
            </div>
            <div className="cinfo">
              <h5>Email Us At</h5>
              <p>
                contact@fusionhive.com
                <br />
                info@fusionhive.com
              </p>
            </div>
            <div className="cinfo">
              <h5>Call Us At</h5>
              <p>
                Phone: (+63) 555 1212
                <br />
                Mobile: (+63) 555 0100
                <br />
                Fax: (+63) 555 0101
              </p>
            </div>
            <ul className="contact-social">
              <li>
                <a href="/">
                  <i className="fa fa-facebook" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fa fa-twitter" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fa fa-instagram" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fa fa-behance" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fa fa-dribbble" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
