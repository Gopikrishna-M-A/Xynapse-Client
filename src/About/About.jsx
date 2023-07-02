import React from 'react'

export default function About() {
  return (
    <section id="howitworks" className="hero-section">
    <div className="right-pane">
      <div className="hero-image-div">
        <img
          src="https://img.freepik.com/free-vector/flat-people-business-training-illustrated_23-2148929461.jpg?w=900&t=st=1683356384~exp=1683356984~hmac=a76075d8150144ad8a167d137928134de565ecf5ab801b6cd9f4305eda09f3cf"
          alt=""
          className="hero-image"
        />
      </div>
      <div className="hero-orange-rectangle"></div>
    </div>
    <div className="left-pane">
      <div className="trust-banner">
        <div className="circle" style={{backgroundColor: "#de6d07"}}></div>
        <p>HOW IT WORKS</p>
      </div>
      <p className="hero-title">Our unique approach</p>

      <div className="bulletpoints-container">
        <div className="bullet-point-div">
          <div className="bullet-point-image">
            <img src="./images/bulletpoint.png" alt="" />
          </div>
          <div className="bullet-point-header">
            <p className="bullet-point-header-title">Strategy</p>
            <p className="bullet-point-content">
              We stay updated with emerging technologies, market trends, and
              customer demands to provide innovative and tailored solutions.
            </p>
          </div>
        </div>

        <div className="bullet-point-div">
          <div className="bullet-point-image">
            <img src="./images/bulletpoint.png" alt="" />
          </div>
          <div className="bullet-point-header">
            <p className="bullet-point-header-title">Deploy</p>
            <p className="bullet-point-content">
              Implementing customized digital marketing strategies for the
              industry.
            </p>
          </div>
        </div>

        <div className="bullet-point-div">
          <div className="bullet-point-image">
            <img src="./images/bulletpoint.png" alt="" />
          </div>
          <div className="bullet-point-header">
            <p className="bullet-point-header-title">Measure</p>
            <p className="bullet-point-content">
              Tracking and analyzing results of digital marketing campaigns
              for companies.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
