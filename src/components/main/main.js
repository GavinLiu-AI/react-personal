import React from 'react';
import Elon from "../../assets/elon.jpg";
import './main.css'
import Header from "../header/Header";
import Footer from "../footer/footer";

function Main(props) {
  return (
    <div className='main-container'>
      <Header />
      <img src={Elon} width="1000" height="600" alt="elon" className='elon-image'/>
      <Footer />
    </div>
  );
}

export default Main;