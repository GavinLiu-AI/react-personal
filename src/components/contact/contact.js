import React from 'react';
import Vid from "../../assets/background/space-vid2.mp4";
import Header from "../header/Header";
import Footer from "../footer/footer";
import "./contact.css"
import emailjs from 'emailjs-com';

function Contact(props) {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_961avog', e.target, 'user_MkVZhb8ae6KmmkXgx95l7')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  }

  return (
    <div className='contact-container'>
      <video autoPlay loop muted playsInline className='contact-background-video'>
        <source src={Vid} type="video/mp4" />
      </video>
      <Header />
      <Footer />
      <form className="contact-form" onSubmit={sendEmail}>
        <span className='header'>Let's talk.</span>
        <span className='text'>Name</span>
        <input type="text" name="user_name" className='input' maxlength="50" required />
        <span className='text'>Email</span>
        <input type="email" name="user_email" className='input' maxlength="50" required />
        <span className='text'>Message</span>
        <textarea name="message" className='input-message' maxLength="300" required />
        <input type="submit" value="Send" className='submit' />
      </form>
    </div>
  );
}

export default Contact;