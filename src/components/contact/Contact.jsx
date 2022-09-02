import React from 'react';
//import emailjs from '@emailjs/browser';
import { MdOutlineEmail } from 'react-icons/md';
import './contact.css';

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail/>
            <h4>Email</h4>
            <h5>villalugo96@gmail.com</h5>
            <a href="mailto:villalugo96@gmail.com" target="_blank" rel="noreferrer" >Send a message</a>
            </article>
            </div>
            <form action="">
              <input type="text" name='name' placeholder='Your Full Name' required />
              <input type="email" name='email' placeholder='Your Email' required />
              <textarea name="message" rows="7" placeholder='Your Message'></textarea> 
            </form>
            </div>
            </section>
  )
}
 

export default Contact;
