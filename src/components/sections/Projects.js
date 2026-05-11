import React from "react";
import "../Project.css";
import ProjectCard from "../ui/ProjectCard";
import { PROJECTS } from "../../data/projects";

export default function Projects({ id }) {
  return (
    <section id={id} className="project-content">
      <div className="project-header">
        <h3 style={{ color: "deeppink", letterSpacing: "2px", margin: "0" }}>
          Portfolio
          <hr />
        </h3>
        <h3>Each project is a unique piece of development.</h3>
      </div>

      <div className="project-container">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
