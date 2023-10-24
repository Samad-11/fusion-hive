import React from "react";

const Footer = ({ setMenu }) => {
  return (
    <footer>
      <div className="row footer-main">
        <div className="col-six tab-full left footer-desc">
          <div className="" />
          <h4>Fusion Hive</h4>
          Ready to get started on your video project at the best price in the
          market? Contact us today to discuss your specific needs and budget.
          We're here to provide a solution that fits both your creative vision
          and your financial constraints.
        </div>
        <div className="col-six tab-full right footer-subscribe">
          <h4>Get Notified</h4>
          <p>Subscribe to get notification on updates.</p>
          <div className="subscribe-form">
            <form id="mc-form" className="group">
              <input
                type="email"
                name="EMAIL"
                className="email"
                id="mc-email"
                placeholder="Email Address"
                required
              />
              <input type="submit" name="subscribe" defaultValue="Subscribe" />
              <label htmlFor="mc-email" className="subscribe-message" />
            </form>
          </div>
        </div>
      </div>{" "}
      {/* end footer-main */}
      <div className="row footer-bottom">
        <div className="col-twelve">
          <div className="copyright">
            <span>© Copyright FHive 2023</span>
            <span>Abdus Samad</span>
          </div>
          <div className="go-top">
            <a className="smoothscroll" title="Back to Top" href="#top">
              <i className="icon-arrow-up" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>{" "}
      {/* end footer-bottom */}
    </footer>
  );
};

export default Footer;
