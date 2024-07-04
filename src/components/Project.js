// Project.js
import React from "react";
import ProjectCard from "./ProjectCard";
import textUtil from "../projectimage/textutils.png";
import newsImg from "../projectimage/newsApp.png";
import bookingRoute from "../projectimage/bookingroute.png";
import onHousing from "../projectimage/onhousing.png";
import digiOneStep from "../projectimage/digionestep.png";
import "./Project.css";

export default function Project() {
  return (
    <div className="project-content">
      <div className="project-header">
        <h3 style={{ color: "deeppink", letterSpacing: "2px", margin: "0" }}>
          Portfolio
          <hr />
        </h3>
        <h3>Each project is a unique piece of development.</h3>
      </div>

      <div className="project-container">
        <ProjectCard
          imageSrc={digiOneStep}
          title="DigiOneStep (Web)"
          description="This is IT company website and I'm Co-Founder of this company. It is a one stop solution for all your IT needs and services."
          link="https://digionestep.com"
        />
        <ProjectCard
          imageSrc={bookingRoute}
          title="BookingRoute (App)"
          description="BookingRoute is a mobile application designed to seamlessly connect users with service providers with offbeat hotels and resorts. "
          link="https://onhousing.herokuapp.com"
        />
        <ProjectCard
          imageSrc={onHousing}
          title="OnHousing (App)"
          description="A mobile app connecting users with service providers in taxis, real estate, houses, and property management etc."
          link="https://play.google.com/store/apps"
        />

        {/* NewsApp Project */}
        <ProjectCard
          imageSrc={newsImg}
          title="KalTak - News (Web)"
          description="This application provides the latest news with necessary information categorized using newsAPI."
          link="https://nizxcoder.github.io/kaltak"
        />

        {/* TextUtils Project */}
        <ProjectCard
          imageSrc={textUtil}
          title="TextUtils(Web)"
          description="This application helps manipulate words, letters, and sentences. Useful for development tasks."
          link="https://nizxcoder.github.io/textutils"
        />
      </div>
    </div>
  );
}
