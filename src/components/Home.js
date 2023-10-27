import React from "react";

const Home = ({ setMenu }) => {
  return (
    <section
      id="home"
      className="s-home target-section"
      data-parallax="scroll"
      data-image-src="images/hero-bg.jpg"
      data-natural-width={3000}
      data-natural-height={2000}
      data-position-y="center"
    >
      <div className="overlay" />
      <div className="shadow-overlay" />
      <div className="home-content">
        <div className="row home-content__main">
          <h3
            onClick={(e) => {
              e.preventDefault();
              setMenu("");
            }}
          >
            Welcome to Fusion Hive
          </h3>
          <h1
            onClick={(e) => {
              e.preventDefault();
              setMenu("");
            }}
          >
            Turning Ideas into <br />
            Cinematic Reality
          </h1>
          <div className="home-content__buttons">
            <a href="#contact" className="smoothscroll btn btn--stroke">
              Start a Project
            </a>
            <a href="#about" className="smoothscroll btn btn--stroke">
              More About Us
            </a>
          </div>
        </div>
        <div className="home-content__scroll">
          <a href="/#about" className="scroll-link smoothscroll">
            <span>Scroll Down</span>
          </a>
        </div>
        <div
          className="home-content__line"
          onClick={(e) => {
            setMenu("");
          }}
        />
      </div>
      {/* end home-content */}
      <ul
        className="home-social"
        onClick={(e) => {
          setMenu("");
        }}
      >
        <li>
          <a href="#0">
            <i className="fa fa-facebook" aria-hidden="true" />
            <span>Facebook</span>
          </a>
        </li>
        <li>
          <a href="#0">
            <i className="fa fa-twitter" aria-hidden="true" />
            <span>Twiiter</span>
          </a>
        </li>
        <li>
          <a href="#0">
            <i className="fa fa-instagram" aria-hidden="true" />
            <span>Instagram</span>
          </a>
        </li>
        <li>
          <a href="#0">
            <i className="fa fa-behance" aria-hidden="true" />
            <span>Behance</span>
          </a>
        </li>
        <li>
          <a href="#0">
            <i className="fa fa-dribbble" aria-hidden="true" />
            <span>Dribbble</span>
          </a>
        </li>
      </ul>
      {/* end home-social */}
    </section>
  );
};

export default Home;
