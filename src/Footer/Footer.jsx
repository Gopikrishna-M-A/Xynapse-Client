import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="footer-logo">
        <img src="./images/logo.png" alt="logo" />
        <p>
          &copy; <span className="yearSpan"></span> Xynapse Technologies
        </p>
      </div>
      <div className="footer-links">
        <div className="footer-services footer-link-div">
          <h3>Services</h3>
          <a href="#services">Web Development</a>
          <a href="#services">Mobile App Development</a>
          <a href="#services">Digital Marketing</a>
          <a href="#services">Web Designing</a>
        </div>
        <div className="footer-contact footer-link-div">
          <h3>Contact Us</h3>
          <a href="#contact">Send Message</a>
          <p>7994555949</p>
        </div>
      </div>
    </footer>
  );
}
