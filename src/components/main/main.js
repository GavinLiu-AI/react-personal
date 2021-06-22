import React from 'react';
import './main.css'
import Header from "../header/Header";
import Footer from "../footer/footer";
import Vid from "../../assets/background/jupiter.mp4"

function Main(props) {
  return (
    <div className='main-container'>
      <video autoPlay loop muted playsInline className='background-video'>
        <source src={Vid} type="video/mp4"/>
      </video>
      <Header />
      <Footer />
    </div>
  );
}

export default Main;