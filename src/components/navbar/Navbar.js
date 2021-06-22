import React from 'react';
import './Navbar.css'
import {Link} from "react-router-dom";

function Navbar(props) {
  return (
    <div className='navbar-container'>
      {/*<Link to="/about" className='navItem'>About</Link>*/}
      <Link to="/contact" className='navItem'>Contact</Link>
    </div>
  );
}

export default Navbar;