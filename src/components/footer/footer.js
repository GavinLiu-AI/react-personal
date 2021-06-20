import React from 'react';
import './footer.css'

function Footer(props) {
  return (
    <div className='footer-container'>
      <span className='copyright'>Copyright &#169; {new Date().getFullYear()} Gavin Liu. All rights reserved.</span>
    </div>
  );
}

export default Footer;