import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'Doge and dads',
      description: 'html/css/java',
      link: "https://jacquelinehockin.github.io/Group-1-Project-/",
      repo: "https://github.com/RandyDeCent"
    },
  
    {
      name: '',
      description: '',
      link: "https://github.com",
      repo: "https://github.com"
    },
  
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
