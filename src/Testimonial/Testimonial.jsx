import React, { useState } from 'react';

const Testimonial = () => {
  const testimonialColletion = [
    {
      username: "Rajesh Kumar",
      designation: "CEO of ABC Painting Services",
      comment:
        "Xynapse Technologies has been instrumental in taking our business to new heights. Their digital marketing strategies have significantly increased our online visibility, leading to a boost in customer engagement and sales. We highly recommend their services.",
    },
    {
      username: "Neha Sharma",
      designation: "Owner of XYZ Painters",
      comment:
        "I am extremely satisfied with the web development services Xynapse Technologies provides. They created a stunning and user-friendly website for my painting business, which has greatly enhanced our online presence. Their team is highly professional and delivers exceptional results",
    },
    {
      username: "Ankit Patel",
      designation: "Marketing Manager at PaintPro India",
      comment:
        "The digital marketing expertise of Xynapse Technologies has helped us reach a wider audience and generate quality leads. Their team understands the nuances of the Indian market and has tailored their strategies accordingly. We have seen remarkable growth in our business thanks to their efforts",
    },
    {
      username: "Dimti Karlenkov",
      designation: "Developer, Xynapse Tech",
      comment:
        "tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      username: "Ferro Quereshi",
      designation: "Developer, Xynapse Tech",
      comment:
        "tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const renderTestimonial = (index) => {
    const { username, designation, comment } = testimonialColletion[index];

    return (
      <>
        <div className="profile-section">
          <div className="image-div">
            <img src="/images/man.png" alt="" />
          </div>
          <div className="name-div">
            <p className="name-p">{username}</p>
            <p className="designa-p">{designation}</p>
          </div>
        </div>

        <div className="comment-section">
          <i className="bi bi-quote"></i>
          <p>{comment}</p>
        </div>
      </>
    );
  };

  const handleScrollDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="testimonial-section">
      <div className="trust-banner">
        <div className="circle" style={{ backgroundColor: "gold" }}></div>
        <p>TESTIMONIALS</p>
      </div>
      <p className="hero-title">What our clients say about us</p>
      <p className="hero-subheading">
        Discover how our products/services have made a difference.
      </p>

      <div className="testimonials-container">
        <div className="testimonials">
          <div className="comments-container">
            {renderTestimonial(activeIndex)}
          </div>
        </div>

        <div className="scroll-dot-div">
          {testimonialColletion.map((_, index) => (
            <div
              key={index}
              className={`circle scroll-dot ${index === activeIndex ? 'active' : ''}`}
              onClick={() => handleScrollDotClick(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
