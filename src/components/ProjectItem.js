import React from "react";

function renderTechnologies(technologies) {
  return technologies.map(technology => {
    return <span key={technology}>{`${technology}`}</span>;
  })
}

function ProjectItem({ name, about, technologies }) {
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {renderTechnologies(technologies)}
      </div>
    </div>
  );
}

export default ProjectItem;
