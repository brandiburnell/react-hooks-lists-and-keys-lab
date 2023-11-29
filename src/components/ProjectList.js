import React from "react";
import ProjectItem from "./ProjectItem";

function renderProjects(projects) {
  return projects.map(project => {
    return <ProjectItem key={project.id} name={project.name} about={project.about} technologies={project.technologies} />;
  })
}

function ProjectList({ projects }) {
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{renderProjects(projects)}</div>
    </div>
  );
}

export default ProjectList;
