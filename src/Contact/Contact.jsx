import React from 'react'

export default function Contact() {
  return (
<section className="contact" id="contact">
      <div className="c-container">
        <div className="top-div">
          <div className="trust-banner touch">
            <div className="circle" style={{backgroundColor: "#9cff2e"}}></div>
            <p>GET IN TOUCH</p>
          </div>

          <h2 className="c-headline">Let's work together!</h2>
        </div>

        <div className="outer-container">
          <div className="form-container">
            <form action="" >
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  name="email"
                  type="email"
                  placeholder="Type your email address"
                  className="email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  name="subject"
                  type="text"
                  placeholder="Type your email address"
                  className="name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  placeholder="Type your message"
                ></textarea>
              </div>
              <div className="btn">
                <button type="submit">
                  <span>Submit</span
                  ><span><i className="bi bi-arrow-right"></i></span>
                </button>
              </div>
            </form>
          </div>
          <div className="two-div">
            <div className="contact-img">
              <img
                src="https://img.freepik.com/free-vector/contact-us-concept-illustration_114360-2299.jpg?w=740&t=st=1684839097~exp=1684839697~hmac=4dd8b211ee203c305946faf58ad5a6ffd4c184337c3b982271f7b6aa496bc3ca"
                alt=""
              />
            </div>
            <div className="color-box">
              <img
                src="https://previews.123rf.com/images/lesnnik/lesnnik1512/lesnnik151200009/49964980-contact-us-line-flat-design-banner-vector-illustration.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
