import React from 'react'
import './Contact.css'
import EmailContactForm from './EmailContactForm'
import contactImg from '../logo/contactPhoto.jpg'
export default function Contact() {
  return (
    <div className='contact-content'>
      <div className="contact-container">
        <div className="contact-img-area">
          <img className='container' src={contactImg} alt="contactImg" height={350} />
        </div>
        <div className="contact-email-area">
          <div className="contact-header">
            <h1>Get In Touch <hr /></h1>
          </div>
          <EmailContactForm />
        </div>
      </div>
    </div>
  )
}
