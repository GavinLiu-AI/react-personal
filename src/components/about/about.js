import React from 'react';
import Vid from "../../assets/background/jupiter.mp4";
import Header from "../header/Header";
import Footer from "../footer/footer";
import './about.css'

function About(props) {
  return (
    <div className='about-container'>
      <video autoPlay loop muted playsInline className='background-video'>
        <source src={Vid} type="video/mp4"/>
      </video>
      <Header />
      <Footer />
    </div>
  );
}

export default About;