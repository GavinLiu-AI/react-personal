import React from 'react';
import Vid from "../../assets/background/moon-vid.mp4";
import Header from "../header/Header";
import Footer from "../footer/footer";
import "./projects.css";

function Projects(props) {
  return (
    <div className='projects-container'>
      <video autoPlay loop muted playsInline className='projects-background-video'>
        <source src={Vid} type="video/mp4" />
      </video>
      <Header />

      <div className='projects-content'>
        <span className='projects-text'>Work in progress ;)</span>
      </div>

      <Footer />
    </div>
  );
}

export default Projects;