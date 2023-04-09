import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import downloadLogo from '../logo/download.png'
import fbLogo from '../logo/facebook.png'
import gmailLogo from '../logo/gmail.png'
import resume from '../docs/Nijamuddin_Resume.pdf'
import './Email.css'
const EmailContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”

    emailjs.sendForm('service_2pxuf84', 'template_z2qia58', form.current, 'o3TzUlol35YJXreBl')
      .then((result) => {
        // show the user a success message
        console.log("Email Sent");
      }, (error) => {
        // show the user an error
        console.log(error);
      });
  };

  return (
    <div className="email-area">
      <div className="form-area">
        <form ref={form} onSubmit={sendEmail}>
          <div className="text-field">
            <input type="text" name="user_name" required={true} />
            <label>Name</label>
            <span></span>
          </div>
          <div className="text-field">
            <input type="email" name="user_email" required={true} />
            <label>E-mail</label>
            <span></span>
          </div>
          <div className="text-field">
            <input name="message" required={true} />
            <label>Message</label>
            <span></span>
          </div>
          <button className='btn btn-primary px-5 py-1' type="submit">Send</button>
        </form>
      </div>
      <div className="social-area">
        <h2 >Contact</h2>
        <p title='Send Email'><a href="mailto: nizamji100@gmail.com" style={{ textDecoration: "none", color: "black", fontWeight: "lighter" }}>nizamji100@gmail.com</a></p>
        <h2 >Based in</h2>
        <p>Kolkata, India</p>
        <div className="social-links">
          <ul>
            <li title='Download Resume'><a href={resume} download><img src={downloadLogo} alt="cv" height={25} /></a></li>
            <li><a href="https://www.facebook.com/nizx23" target='_blank'><img src={fbLogo} alt="fb" height={25} /></a></li>
            <li><a href="mailto:nizamji100@gmail.com"><img src={gmailLogo} alt="gmail" height={25} /></a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EmailContactForm;