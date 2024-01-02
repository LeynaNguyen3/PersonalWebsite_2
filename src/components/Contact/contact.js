import React, { useRef } from 'react';
import './contact.css';
import GitHubIcon from '../../assets/Tools.png';
import GMailIcon from '../../assets/gmail.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
const form = useRef();
const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_03kpnzf', 'template_lncev64', form.current, 'djtxFhZl5-AyBkLQE')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert('Email Sent!');
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id="contactPage">
        <div id="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">You can message me here! <a href="mailto:leyna.nguyen619@gmail.com">Or email me here</a></span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type="text" className="name" name="your_name" placeholder='Your Name' />
                <input type="email" className="email" name="your_email" placeholder='Your Email' />
                <textarea className='msg' name="message" rows="5" placeholder='Your Message'></textarea>
                <button type='submit' value='Send' className="submitBtn">Submit</button>
                <div className="links">
                <a href="https://github.com/LeynaNguyen3" target="_blank" rel="noopener noreferrer">
                    <img src={GitHubIcon} alt="GitHub" className="link" />
                </a>
                <a href="mailto:leyna.nguyen619@gmail.com" target="_blank" rel="noopener noreferrer">
                    <img src={GMailIcon} alt="Gmail" className="link" />
                </a>
                </div>
            </form>
        </div>
    </section>
  );
}

export default Contact