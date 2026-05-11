import React from "react";
import "../Contact.css";
import EmailContactForm from "../forms/EmailContactForm";
import contactImg from "../../image/contactImage.jpg";

export default function Contact({ id, showAlert }) {
  return (
    <section id={id} className="contact-content">
      <div className="contact-container">
        <div className="contact-img-area">
          <img className="container" src={contactImg} alt="contact" />
        </div>
        <div className="contact-email-area">
          <div className="contact-header">
            <h1>
              Get In Touch <hr />
            </h1>
          </div>
          <EmailContactForm showAlert={showAlert} />
        </div>
      </div>
    </section>
  );
}
