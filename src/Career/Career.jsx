import React from 'react'
import Header2 from "../Header/Header2";

export default function Career() {
  return (
    <>
        <Header2/>
        <section id="career-page">
      <div className="career-section">
        <div className="content-div">
          <div className="left-content">
            <h2 className="heading">Shift your career for better output</h2>
          </div>
          <div className="right-content">
            <h2 className="sub-heading">Work smarter that ever</h2>
            <p>
              new-path brings together every action required to perform better
              in your career.
            </p>
            <a href="https://survey-gtnt.onrender.com" className="btn btn-lg regBtn">
              <span>Register Now </span
              ><span><i className="m-2 bi bi-arrow-right"></i></span>
            </a>
          </div>
        </div>
        <div className="career-image-div">
          <div className="image">
            <img
              src="https://images.pexels.com/photos/4974920/pexels-photo-4974920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
    </>
    
  )
}
