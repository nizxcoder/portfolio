import React from 'react'
import './About.css'
import aboutImg from '../logo/aboutPhoto.jpg'
export default function About() {
  return (
    <div className='about-content'>
      <div className="about-container-box">
        <div className="about-img-area">
          <img src={aboutImg} alt="" height={190}
            width={190} className='about-img-box' />
        </div>
        <div className="about-text-area">
          <div className="about-header" style={{ color: "deeppink" }}><h2 style={{ letterSpacing: "2px" }}>About Me. <hr /></h2></div>
          <p>I am a Full-Stack Developer with a passion for building responsive and user friendly websites. I have a strong understanding of both front-end and back-end development, and I'm excited to put my skills to use in a professional setting. I'm a quick learner and team player, and I'm confident that I can be valuable asset to any web development team. </p>
        </div>
      </div>
      <div className="skill-showcase">
        <div className="skill-container-header mx-5"><h3 className='m-0' style={{ color: "deeppink", letterSpacing: "2px" }}>My Skill Set <hr /></h3>
        </div>
        <div className="skill-box-container">
          <div className="skills-box skill-box-1">
            <div className="skill-box-header"><h5>Front-End</h5>
            </div>
            <ul className='skill-list'>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React.js</li>
              <li>Bootstrap</li>
            </ul>
          </div>
          <div className="skills-box skill-box-2">
            <div className="skill-box-header"><h5>Back-End</h5>
            </div>
            <ul className='skill-list'>
              <li>MongoDB</li>
              <li>SQL</li>
              <li>Javascript</li>
              <li>Node.js</li>
              <li>Express.js</li>
            </ul>
          </div>
          <div className="skills-box skill-box-3">
            <div className="skill-box-header"><h5>Others</h5>
            </div>
            <ul className='skill-list'>
              <li>C</li>
              <li>Java</li>
              <li>Git</li>
              <li>Github</li>
              <li>Coding</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
