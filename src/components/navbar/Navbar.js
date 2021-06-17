import React from 'react';
import './Navbar.css'

function Navbar(props) {
  return (
    <div className='navbar-container'>
        <a href='about' className='navItem'>About</a>
        <a href='contact' className='navItem'>Contact</a>
    </div>
  );
}

export default Navbar;