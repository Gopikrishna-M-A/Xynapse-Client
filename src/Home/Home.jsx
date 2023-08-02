import React from 'react'

export default function Home() {
  return (
    <div className="hero-section">
      <div className="left-pane">
        <div className="trust-banner">
          <div className="circle"></div>
          <p>A TRUSTED DIGITAL AGENCY</p>
        </div>
        <p className="hero-title">Empowering your digital journey</p>
        <p className="hero-subheading">
          We are a trusted digital agency dedicated to empowering businesses and
          individuals in their digital endeavours. Our mission is to provide
          comprehensive solutions that drive online success. From establishing
          your brand to enhancing visibility and engaging customers, we guide
          you every step of the way. Let us be your partner in unlocking new
          digital opportunities and achieving sustainable growth.
        </p>
        <div className="heroBtnDiv">
          <a href="#contact" className="heroBtn getStarted-btn">
            <p>Get Started</p>
            <i className="bi bi-arrow-right"></i>
          </a>
          <div className="heroBtn watchDemo-btn">
            <p>Watch Demo</p>
            <i className="bi bi-arrow-right"></i>
          </div>
        </div>
      </div>

      <div className="right-pane">
        <div className="hero-image-div">
          <img
            src="https://img.freepik.com/free-vector/flat-people-business-training-illustrated_23-2148929461.jpg?w=900&t=st=1683356384~exp=1683356984~hmac=a76075d8150144ad8a167d137928134de565ecf5ab801b6cd9f4305eda09f3cf"
            alt=""
            className="hero-image"
          />
        </div>
        {/* <div className="count-section">
          <div className="count-sect">
            <p className="count-sect-text">1M+</p>
            <p className="count-sect-subtext">PAGE VISITS</p>
          </div>
          <div className="count-sect">
            <p className="count-sect-text">1M+</p>
            <p className="count-sect-subtext">SALES GROWTH</p>
          </div>
          <div className="count-sect">
            <p className="count-sect-text">1M+</p>
            <p className="count-sect-subtext">ENGAEMENTS</p>
          </div>
        </div>  */}
      </div>
    </div>
  )
}
