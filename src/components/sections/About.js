import React from "react";
import "../About.css";
import aboutImg from "../../image/aboutImg.jpg";

export default function About({ id }) {
  return (
    <section id={id} className="about-content">
      <div className="about-container-box">
        <div className="about-img-area">
          <img
            src={aboutImg}
            alt="about"
            className="about-img-box"
            style={{ borderRadius: "50%" }}
          />
        </div>
        <div className="about-text-area">
          <div className="about-header" style={{ color: "deeppink" }}>
            <h2 style={{ letterSpacing: "2px" }}>
              About Me. <hr />
            </h2>
          </div>
          <p>
            I am a Full-Stack Developer with a passion for building responsive
            and user friendly websites and Android apps. I have a strong
            understanding of both front-end and back-end development, and
            I&apos;m excited to put my skills to use in a professional setting.
            I&apos;m a quick learner and team player, and I&apos;m confident
            that I can be valuable asset to any web development team.
          </p>
        </div>
      </div>
      <div className="skill-showcase">
        <div className="skill-container-header mx-5">
          <h3
            className="m-0"
            style={{ color: "deeppink", letterSpacing: "2px" }}
          >
            My Skill Set <hr />
          </h3>
        </div>
        <div className="skill-box-container" style={{ margin: "15px 0px" }}>
          <div className="skills-box skill-box-1">
            <div className="skill-box-header">
              <h5>Front-End</h5>
            </div>
            <ul className="skill-list">
              <li>React.js</li>
              <li>JavaScript (ES6+)</li>
              <li>HTML5</li>
              <li>CSS3 / SCSS</li>
              <li>Bootstrap</li>
              <li>Tailwind</li>
            </ul>
          </div>
          <div
            className="skills-box skill-box-2"
            style={{ transform: "scale(1.05)" }}
          >
            <div className="skill-box-header">
              <h5>Back-End</h5>
            </div>
            <ul className="skill-list">
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDB</li>
              <li>MySQL</li>
              <li>REST APIs</li>
              <li>Firebase</li>
            </ul>
          </div>
          <div className="skills-box skill-box-3">
            <div className="skill-box-header">
              <h5>Mobile & Tools</h5>
            </div>
            <ul className="skill-list">
              <li>Flutter</li>
              <li>Dart</li>
              <li>Git / GitHub</li>
              <li>Postman</li>
              <li>VS Code</li>
              <li>Agile Collaboration</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
