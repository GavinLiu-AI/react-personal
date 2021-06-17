import React from 'react';
import './Header.css'
import Navbar from "../navbar/Navbar";

function Header(props) {
  return (
    <div className='header-container'>
      <a href='/' className='name'>Gavin Liu</a>
      <Navbar />
    </div>
  );
}

export default Header;