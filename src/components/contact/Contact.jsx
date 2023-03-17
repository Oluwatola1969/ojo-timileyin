import React from "react";
import './contact.css';
import emailjs from 'emailjs-com';
import  { useRef } from 'react';

export default function Contact() {

  const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_u9f7n5c', 'template_z2kd37c', form.current, 'FadVlwrNc0u5HkAGD')

  e.target.reset()  
};
  return (
    <section id="contact">
      <h3 className="contact__subtitle">Contact Me</h3>
      <div className="container__contact container">
        
        <form  ref={form} onSubmit={sendEmail} className='contact__form'>
            <input type="text" name='name' placeholder='Enter Full-name' required />
            <input type="email" name='email' placeholder='Enter Email' />
            <textarea name="message" cols="30" rows="4" placeholder='Your Message'></textarea>
            <button className='btn' type='submit'>
              Send Message
            </button>
          </form>

          <div className="contact__details">
            <h4>Get In Touch</h4>
              <div className="contact__detail"><span className="contact__detail__title">EMAIL:</span><a href="mailto:ojooyeniketimilehin@gmail.com" target='_blank'>ojooyeniketimilehin@gmail.com</a></div>
              <div className="contact__detail"><span className="contact__detail__title">PHONE:</span><a href="tel:+2347061168511" target='_blank'>+2347061168511</a></div>
              <div className="contact__detail"><span className="contact__detail__title">WEB:</span><a href="https://ojo-timileyin-oye.web.app" target='_blank'>ojo-timileyin-oye.web.app</a></div>
              <div className="contact__detail"><span className="contact__detail__title">LINKEDIN:</span><a href="https://www.linkedin.com/in/ojo-oyenike-9a163b1b0" target='_blank'>@OjoOyenike</a></div>

          </div>
      </div>
    </section>
  );
}
