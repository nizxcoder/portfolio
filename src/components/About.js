import React from "react";
import "./About.css";
// import aboutImg from "../logo/aboutPhotojp.jpg";
import aboutImg from "../image/aboutImg.jpg";
export default function About() {
  return (
    <div className="about-content">
      <div className="about-container-box">
        <div className="about-img-area">
          <img
            src={aboutImg}
            alt=""
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
            understanding of both front-end and back-end development, and I'm
            excited to put my skills to use in a professional setting. I'm a
            quick learner and team player, and I'm confident that I can be
            valuable asset to any web development team.{" "}
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
              <li>HTML</li>
              <li>CSS</li>
              <li>React.js</li>
              <li>Flutter</li>
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
              <li>MongoDB</li>
              <li>MySQL</li>
              <li>Javascript</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>Firebase</li>
            </ul>
          </div>
          <div className="skills-box skill-box-3">
            <div className="skill-box-header">
              <h5>Others</h5>
            </div>
            <ul className="skill-list">
              <li>Git</li>
              <li>Github</li>
              <li>Project Manage.</li>
              <li>Leadership</li>
              <li>Problem Solving</li>
              <li>Communication</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
