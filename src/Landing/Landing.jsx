import React from 'react'
import Home from "../Home/Home";
import Service from "../Service/Service";
import About from "../About/About";
import Work from "../Work/Work";
import Testimonial from "../Testimonial/Testimonial";
import Contact from "../Contact/Contact";
import Header from "../Header/Header";

export default function Landing() {
  return (
    <>
    <Header />
    <Home/>
    <Service/>
    <About/>
    <Work/>
    <Testimonial/>
    <Contact/>
    </>
  )
}
