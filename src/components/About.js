import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import CountUp from "react-countup";

const About = ({ setMenu }) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section
      id="about"
      className="s-about"
      onClick={(e) => {
        setMenu("");
      }}
    >
      <div className="row section-header has-bottom-sep" data-aos="fade-up">
        <div className="col-full">
          <h3 className="subhead subhead--dark">Hello There</h3>
          <h1 className="display-1 display-1--light">We Are Fusion Hive</h1>
        </div>
      </div>{" "}
      {/* end section-header */}
      <div className="row about-desc" data-aos="fade-up">
        <div className="col-full">
          <p>
            At Fusion Hive, our mission is clear: to create exceptional video
            content that inspires, entertains, and informs. We're committed to
            using the power of storytelling to connect, engage, and transform.
            Our vision is to be a trusted partner for brands and individuals
            seeking to harness the potential of video as a medium for their
            messages.
          </p>
        </div>
      </div>{" "}
      {/* end about-desc */}
      <div
        className="row about-stats stats block-1-4 block-m-1-2 block-mob-full"
        data-aos="fade-up"
      >
        <div className="col-block stats__col ">
          <div className="stats__count">
            {" "}
            <CountUp start={0} end={127} duration={10} />
          </div>
          <h5>Project Completed</h5>
        </div>
        <div className="col-block stats__col">
          <div className="stats__count">
            <CountUp start={0} end={100} duration={12} />
          </div>
          <h5>Appraisal</h5>
        </div>
        <div className="col-block stats__col">
          <div className="stats__count">
            {" "}
            <CountUp start={0} end={109} duration={15} />
          </div>
          <h5>Projects Completed</h5>
        </div>
        <div className="col-block stats__col">
          <div className="stats__count">
            {" "}
            <CountUp start={0} end={102} duration={8} />
          </div>
          <h5>Start Ups</h5>
        </div>
      </div>{" "}
      {/* end about-stats */}
      <div className="about__line" />
    </section>
  );
};

export default About;
