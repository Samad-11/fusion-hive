import React from "react";

const Header = ({ setMenu }) => {
  return (
    <header className="s-header">
      <div className="header-logo">
        <a
          className="site-logo"
          href="/"
          style={{ fontSize: "2.5rem", fontWeight: "bolder" }}
        >
          FHIve
        </a>
      </div>
      <nav className="header-nav">
        <p
          onClick={(e) => {
            e.preventDefault();
            setMenu("");
          }}
          className="header-nav__close"
          title="close"
          style={{ cursor: "pointer" }}
        >
          <span>Close</span>
        </p>
        <div className="header-nav__content">
          <h3>Navigation</h3>
          <ul className="header-nav__list">
            <li className="current">
              <a className="smoothscroll" href="#home" title="home">
                Home
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#about" title="about">
                About
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#services" title="services">
                Services
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#works" title="works">
                Works
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#pricing" title="pricing">
                Pricing
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#contact" title="contact">
                Contact
              </a>
            </li>
          </ul>
          <p>
            Perspiciatis hic praesentium nesciunt. Et neque a dolorum{" "}
            <a href="#0">voluptatem</a> porro iusto sequi veritatis libero enim.
            Iusto id suscipit veritatis neque reprehenderit.
          </p>
          <ul className="header-nav__social">
            <li>
              <a href="/">
                <i className="fa fa-facebook" />
              </a>
            </li>
            <li>
              <a href="/">
                <i className="fa fa-twitter" />
              </a>
            </li>
            <li>
              <a href="/">
                <i className="fa fa-instagram" />
              </a>
            </li>
            <li>
              <a href="/">
                <i className="fa fa-behance" />
              </a>
            </li>
            <li>
              <a href="/">
                <i className="fa fa-dribbble" />
              </a>
            </li>
          </ul>
        </div>{" "}
        {/* end header-nav__content */}
      </nav>{" "}
      {/* end header-nav */}
      <p
        onClick={(e) => {
          e.preventDefault();
          setMenu("menu-is-open");
        }}
        style={{ cursor: "pointer" }}
        className="header-menu-toggle"
      >
        <span className="header-menu-text">Menu</span>
        <span className="header-menu-icon" />
      </p>
    </header>
  );
};

export default Header;
