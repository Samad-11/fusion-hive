import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Work = ({ setMenu }) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section
      id="works"
      className="s-works"
      onClick={(e) => {
        setMenu("");
      }}
    >
      <div className="intro-wrap">
        <div
          className="row section-header has-bottom-sep light-sep"
          data-aos="fade-up"
        >
          <div className="col-full">
            <h3 className="subhead">Recent Works</h3>
            <h1 className="display-2 display-2--light">
              We love what we do, check out some of our latest works
            </h1>
          </div>
        </div>{" "}
        {/* end section-header */}
      </div>{" "}
      {/* end intro-wrap */}
      <div className="row works-content">
        <div className="col-full masonry-wrap">
          <div className="masonry">
            <div className="masonry__brick" data-aos="fade-up">
              <div className="item-folio">
                <div className="item-folio__thumb">
                  <img
                    src="images/portfolio/lady-shutterbug.jpg"
                    srcSet="images/portfolio/lady-shutterbug.jpg 1x, images/portfolio/lady-shutterbug@2x.jpg 2x"
                    alt="img"
                  />
                </div>
                <div className="item-folio__text">
                  <h3 className="item-folio__title">Capture</h3>
                  <p className="item-folio__cat">Youtube</p>
                </div>
                <a
                  href="https://www.behance.net/"
                  className="item-folio__project-link"
                  title="Project link"
                >
                  <i className="icon-link" />
                </a>
                <div className="item-folio__caption">
                  <p>
                    Vero molestiae sed aut natus excepturi. Et tempora numquam.
                    Temporibus iusto quo.Unde dolorem corrupti neque nisi.
                  </p>
                </div>
              </div>
            </div>{" "}
            {/* end masonry__brick */}
            <div className="masonry__brick" data-aos="fade-up">
              <div className="item-folio">
                <div className="item-folio__thumb">
                  <img
                    src="images/portfolio/woodcraft.jpg"
                    srcSet="images/portfolio/woodcraft.jpg 1x, images/portfolio/woodcraft@2x.jpg 2x"
                    alt="img"
                  />
                </div>
                <div className="item-folio__text">
                  <h3 className="item-folio__title">Product</h3>
                  <p className="item-folio__cat">Short</p>
                </div>
                <a
                  href="https://www.behance.net/"
                  className="item-folio__project-link"
                  title="Project link"
                >
                  <i className="icon-link" />
                </a>
                <div className="item-folio__caption">
                  <p>
                    Vero molestiae sed aut natus excepturi. Et tempora numquam.
                    Temporibus iusto quo.Unde dolorem corrupti neque nisi.
                  </p>
                </div>
              </div>
            </div>{" "}
            {/* end masonry__brick */}
            <div className="masonry__brick" data-aos="fade-up">
              <div className="item-folio">
                <div className="item-folio__thumb">
                  <a
                    href="images/portfolio/gallery/g-beetle.jpg"
                    className="thumb-link"
                    title="The Beetle Car"
                    data-size="1050x700"
                  >
                    <img
                      src="images/portfolio/the-beetle.jpg"
                      srcSet="images/portfolio/the-beetle.jpg 1x, images/portfolio/the-beetle@2x.jpg 2x"
                      alt="img"
                    />
                  </a>
                </div>
                <div className="item-folio__text">
                  <h3 className="item-folio__title">Vintage</h3>
                  <p className="item-folio__cat">Personal</p>
                </div>
                <a
                  href="https://www.behance.net/"
                  className="item-folio__project-link"
                  title="Project link"
                >
                  <i className="icon-link" />
                </a>
                <div className="item-folio__caption">
                  <p>
                    Vero molestiae sed aut natus excepturi. Et tempora numquam.
                    Temporibus iusto quo.Unde dolorem corrupti neque nisi.
                  </p>
                </div>
              </div>
            </div>{" "}
            {/* end masonry__brick */}
            <div className="masonry__brick" data-aos="fade-up">
              <div className="item-folio">
                <div className="item-folio__thumb">
                  <img
                    src="images/portfolio/grow-green.jpg"
                    srcSet="images/portfolio/grow-green.jpg 1x, images/portfolio/grow-green@2x.jpg 2x"
                    alt="img"
                  />
                </div>
                <div className="item-folio__text">
                  <h3 className="item-folio__title">Grow Green</h3>
                  <p className="item-folio__cat">Branding</p>
                </div>
                <a
                  href="https://www.behance.net/"
                  className="item-folio__project-link"
                  title="Project link"
                >
                  <i className="icon-link" />
                </a>
                <div className="item-folio__caption">
                  <p>
                    Vero molestiae sed aut natus excepturi. Et tempora numquam.
                    Temporibus iusto quo.Unde dolorem corrupti neque nisi.
                  </p>
                </div>
              </div>
            </div>{" "}
            {/* end masonry__brick */}
            <div className="masonry__brick" data-aos="fade-up">
              <div className="item-folio">
                <div className="item-folio__thumb">
                  <a
                    href="images/portfolio/gallery/g-guitarist.jpg"
                    className="thumb-link"
                    title="Guitarist"
                    data-size="1050x700"
                  >
                    <img
                      src="images/portfolio/guitarist.jpg"
                      srcSet="images/portfolio/guitarist.jpg 1x, images/portfolio/guitarist@2x.jpg 2x"
                      alt="img"
                    />
                  </a>
                </div>
                <div className="item-folio__text">
                  <h3 className="item-folio__title">Guitarist</h3>
                  <p className="item-folio__cat">Graphics</p>
                </div>
                <a
                  href="https://www.behance.net/"
                  className="item-folio__project-link"
                  title="Project link"
                >
                  <i className="icon-link" />
                </a>
                <div className="item-folio__caption">
                  <p>
                    Vero molestiae sed aut natus excepturi. Et tempora numquam.
                    Temporibus iusto quo.Unde dolorem corrupti neque nisi.
                  </p>
                </div>
              </div>
            </div>{" "}
            {/* end masonry__brick */}
            <div className="masonry__brick" data-aos="fade-up">
              <div className="item-folio">
                <div className="item-folio__thumb">
                  <img
                    src="images/portfolio/palmeira.jpg"
                    srcSet="images/portfolio/palmeira.jpg 1x, images/portfolio/palmeira@2x.jpg 2x"
                    alt="img"
                  />
                </div>
                <div className="item-folio__text">
                  <h3 className="item-folio__title">Palmeira</h3>
                  <p className="item-folio__cat">Web Design</p>
                </div>
                <a
                  href="https://www.behance.net/"
                  className="item-folio__project-link"
                  title="Project link"
                >
                  <i className="icon-link" />
                </a>
                <div className="item-folio__caption">
                  <p>
                    Vero molestiae sed aut natus excepturi. Et tempora numquam.
                    Temporibus iusto quo.Unde dolorem corrupti neque nisi.
                  </p>
                </div>
              </div>
            </div>
            {/* end masonry__brick */}
          </div>{" "}
          {/* end masonry */}
        </div>{" "}
        {/* end col-full */}
      </div>{" "}
      {/* end works-content */}
    </section>
  );
};

export default Work;
