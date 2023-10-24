import React from "react";
import "./Pricing.css";

const Pricing = ({ setMenu }) => {
  return (
    <section id="pricing" className=" s-pricing ">
      <div className="row section-header has-bottom-sep" data-aos="fade-up">
        <div className="col-full">
          <h3 className="subhead subhead--dark">We Provide</h3>
          <h1 className="display-1 display-1--light">
            Best Price In The Market
          </h1>
        </div>
      </div>{" "}
      {/* end section-header */}
      <div className="row about-desc" data-aos="fade-up">
        <div className="col-full">
          <blockquote style={{ color: "white" }}>
            <p style={{ color: "#39b54a" }}>
              We believe that professional video production should be accessible
              to all, and we've made it a priority to ensure that our pricing is
              competitive. We'll work with you to create a package that suits
              your budget while still delivering the level of quality and
              creativity that our agency is known for.
            </p>
          </blockquote>
        </div>
      </div>{" "}
      <div className="wrapper ">
        <div className="package">
          <div className="name">Limited</div>
          <div className="price">€2</div>
          <div className="trial">Available for a month</div>
          <hr />
          <ul>
            <li className="li">
              <strong>8</strong>
              team members
            </li>
            <li className="li">
              <strong>6</strong>
              team playlists
            </li>
            <li className="li">
              <strong>Unlimited</strong>
              public playlists
            </li>
          </ul>
        </div>
        <div className="package brilliant">
          <div className="name">Brilliant</div>
          <div className="price">€5</div>
          <div className="trial">Free 30 day trial</div>
          <hr />
          <ul>
            <li className="li">
              <strong>Unlimited</strong>
              team members
            </li>
            <li className="li">
              <strong>Unlimited</strong>
              team playlists
            </li>
            <li className="li">
              <strong>Unlimited</strong>
              public playlists
            </li>
            <li className="li">Team analytics</li>
            <li className="li">Send files</li>
          </ul>
        </div>
        <div className="package">
          <div className="name">Basic</div>
          <div className="price">€0</div>
          <div className="trial">Totally free</div>
          <hr />
          <ul>
            <li className="li">
              <strong>5</strong>
              team members
            </li>
            <li className="li">
              <strong>3</strong>
              team playlists
            </li>
            <li className="li">
              <strong>Unlimited</strong>
              public playlists
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
