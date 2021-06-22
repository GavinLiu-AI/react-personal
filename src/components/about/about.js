import React from 'react';
import Vid from "../../assets/background/jupiter.mp4";
import Header from "../header/Header";
import Footer from "../footer/footer";
import './about.css'
import Gavin from "../../assets/gavin.mp4"

function About(props) {
  return (
    <div className='about-container'>
      <video autoPlay loop muted playsInline className='background-video'>
        <source src={Vid} type="video/mp4" />
      </video>
      <Header />
      <div className='about-content'>
        <video autoPlay loop muted playsInline className='gavin-video'>
          <source src={Gavin} type="video/mp4" />
        </video>
        <span className='gavin-header'>Gavin Liu</span>
        <span className='gavin-intro'>I build things for fun.</span>
        <span className='gavin-text'>I'm a west coast based electrical and software engineer who enjoys working on
          Artificial Intelligence and web development.</span>
        <span className='gavin-text'>I'm currently working for Nvidia focused on web development
          of GeForce Now cloud gaming service.</span>
      </div>
      <Footer />
    </div>
  );
}

export default About;