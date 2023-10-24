import React from "react";

const Service = ({ setMenu }) => {
  return (
    <section id="services" className="s-services">
      <div className="row section-header has-bottom-sep" data-aos="fade-up">
        <div className="col-full">
          <h3 className="subhead">What We Do</h3>
          <h1 className="display-2">
            We’ve got everything you need to launch and grow your business
          </h1>
        </div>
      </div>{" "}
      {/* end section-header */}
      <div className="row services-list block-1-2 block-tab-full">
        <div className="col-block service-item" data-aos="fade-up">
          <div className="service-icon">
            <i className="fa fa-youtube-play" aria-hidden="true"></i>
          </div>
          <div className="service-text">
            <h3 className="h2"> YouTube Video</h3>
            <p>
              We're experts in crafting YouTube videos that capture your
              audience's attention and keep them engaged for 2 to 15 minutes.
              Whether you're looking to create informative tutorials,
              entertaining vlogs, or compelling brand stories, our team has the
              experience and creativity to make your YouTube channel stand out.
            </p>
          </div>
        </div>
        <div className="col-block service-item" data-aos="fade-up">
          <div className="service-icon">
            <i className="fa fa-instagram" aria-hidden="true"></i>
          </div>
          <div className="service-text">
            <h3 className="h2">Instagram Shorts</h3>
            <p>
              Instagram shorts are all about making a big impact in a short
              amount of time. Our agency specializes in creating visually
              stunning and captivating Instagram shorts videos that leave a
              lasting impression, all within the constraints of this fast-paced
              format. These videos are perfect for social media advertising,
              brand promotion, and connecting with your audience in the shortest
              span.
            </p>
          </div>
        </div>
        <div className="col-block service-item" data-aos="fade-up">
          <div className="service-icon">
            <i className="fa fa-user-o" aria-hidden="true"></i>
          </div>
          <div className="service-text">
            <h3 className="h2">Personal Video Editing</h3>
            <p>
              Our personal video editing service is designed to provide you with
              professional-quality editing for your raw video footage. We
              understand that not everyone has the time or expertise to edit
              their videos, and that's where we step in. Simply share your
              footage with us, and we'll transform it into a polished, engaging
              video that meets your goals and style.
            </p>
          </div>
        </div>
        <div className="col-block service-item" data-aos="fade-up">
          <div className="service-icon">
            <i className="fa fa-spinner" aria-hidden="true"></i>
          </div>
          <div className="service-text">
            <h3 className="h2">Motion Graphics and Animation</h3>
            <p>
              For both platforms, we can add dynamic visuals, animations, and
              text overlays to enhance the storytelling and visual appeal of
              your videos.
            </p>
          </div>
        </div>
      </div>
      {/* end services-list */}
    </section>
  );
};

export default Service;
