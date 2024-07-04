// ProjectCard.js
import React from "react";

const ProjectCard = ({ imageSrc, title, description, link }) => {
  return (
    <div className="project-card">
      <div className="project-img">
        <img src={imageSrc} alt={title} title={title} />
      </div>
      <div className="project-details">
        <div className="project-title">
          <h2>{title}</h2>
        </div>
        <div className="project-description">
          <p>{description}</p>
        </div>
        <div className="project-btns">
          <a href={link} target="_blank" rel="noreferrer">
            <button className="btn btn-light">Check it out!</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
