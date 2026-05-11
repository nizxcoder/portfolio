import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import downloadLogo from "../../logo/download.png";
import fbLogo from "../../logo/facebook.png";
import gmailLogo from "../../logo/gmail.png";
import resume from "../../docs/nizam_resume_full_stack.pdf";
import "../Email.css";

const EmailContactForm = (props) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2pxuf84",
        "template_z2qia58",
        form.current,
        "o3TzUlol35YJXreBl",
      )
      .then(
        () => {
          props.showAlert(true);
          console.log("Email Sent");
        },
        (error) => {
          console.log(error);
        },
      );
  };

  return (
    <div className="email-area">
      <div className="form-area">
        <form ref={form} onSubmit={sendEmail}>
          <div className="text-field">
            <input
              type="text"
              name="user_name"
              placeholder="Enter your name"
              required={true}
            />
            <label>Name</label>
            <span></span>
          </div>
          <div className="text-field">
            <input
              type="email"
              name="user_email"
              placeholder="Enter your email"
              required={true}
            />
            <label>E-mail</label>
            <span></span>
          </div>
          <div className="text-field">
            <textarea
              name="message"
              placeholder="Type your message here..."
              required={true}
            />
            <label>Message</label>
            <span></span>
          </div>
          <button className="btn btn-primary px-5 py-1" type="submit">
            Send
          </button>
        </form>
      </div>
      <div className="social-area">
        <h2 style={{ color: "gray" }} className="form-label">
          Contact
        </h2>
        <p title="Send Email">
          <a
            href="tel:9798425933"
            style={{
              textDecoration: "none",
              color: "black",
              fontWeight: "lighter",
            }}
          >
            Mob:- +919798425933
          </a>
          <br />
          <a
            href="mailto: nizamji100@gmail.com"
            style={{
              textDecoration: "none",
              color: "black",
              fontWeight: "lighter",
            }}
          >
            nizamji100@gmail.com
          </a>
        </p>

        <h2 style={{ color: "gray" }}>Based in</h2>
        <p>Giridih, Jharkhand, India</p>
        <div className="social-links">
          <ul>
            <li title="Download Resume">
              <a href={resume} download>
                <img src={downloadLogo} alt="cv" height={25} />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/nizx23"
                rel="noreferrer"
                target="_blank"
              >
                <img src={fbLogo} alt="fb" height={25} />
              </a>
            </li>
            <li>
              <a href="mailto:nizamji100@gmail.com">
                <img src={gmailLogo} alt="gmail" height={25} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EmailContactForm;
