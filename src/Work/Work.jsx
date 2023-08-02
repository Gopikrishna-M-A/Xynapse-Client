import React, { useEffect } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";

export default function Work() {
  useEffect(() => {
    new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 10,
      breakpoints: {
        480: {
          slidesPerView: 2,
        },
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 3.5,
          spaceBetween: 0,
        },
      },
    });
  }, []);

  return (
    <section id="project">
      <div className="h-container">
        <div className="heading-div">
          <div className="trust-banner our-project">
            <div className="circle" style={{ backgroundColor: "#000" }}></div>
            <p>OUR PROJECTS</p>
          </div>
          <h2 className="p-headline">
            We use our tool to tell about your story.
          </h2>
        </div>
        <div className="paragraph">
          <p>
            We have successfully completed several projects that showcase our
            expertise and capabilities in various domains. These projects
            encompassed a wide range of industries, including technology,
            healthcare, finance, and manufacturing, among others.
          </p>
        </div>
        <button type="button" className="next">
          <span className="arrow">
            <i className="bi bi-arrow-right"></i>
          </span>
        </button>
      </div>

      <div className="swiper mySwiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide" id="first">
            <div>
              <h2 className="title">BEYOND</h2>
            </div>
            <div>
              <h3 className="sub-title">Go Beyond the expected.</h3>
              <div className="span">
                <span className="brand">BRAND|WEBSITE</span>
              </div>
            </div>
            <div className="btn">
              <button type="button">
                <span>View More</span>
                <span>
                  <i className="bi bi-arrow-right"></i>
                </span>
              </button>
            </div>
          </div>
          <div className="swiper-slide">
            <div>
              <h2 className="title">BEYOND</h2>
            </div>
            <div>
              <h3 className="sub-title">Go Beyond the expected.</h3>
              <div className="span">
                <span className="brand">BRAND|WEBSITE</span>
              </div>
            </div>
            <div className="btn">
              <button type="button">
                <span>View More</span>
                <span>
                  <i className="bi bi-arrow-right"></i>
                </span>
              </button>
            </div>
          </div>
          <div className="swiper-slide">
            <div>
              <h2 className="title">BEYOND</h2>
            </div>
            <div>
              <h3 className="sub-title">Go Beyond the expected.</h3>
              <div className="span">
                <span className="brand">BRAND|WEBSITE</span>
              </div>
            </div>
            <div className="btn">
              <button type="button">
                <span>View More</span>
                <span>
                  <i className="bi bi-arrow-right"></i>
                </span>
              </button>
            </div>
          </div>
          <div className="swiper-slide">
            <div>
              <h2 className="title">BEYOND</h2>
            </div>
            <div>
              <h3 className="sub-title">Go Beyond the expected.</h3>
              <div className="span">
                <span className="brand">BRAND|WEBSITE</span>
              </div>
            </div>
            <div className="btn">
              <button type="button">
                <span>View More</span>
                <span>
                  <i className="bi bi-arrow-right"></i>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
