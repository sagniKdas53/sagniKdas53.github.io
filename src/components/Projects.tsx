import React from 'react';
import FlagshipProject from './FlagshipProject.tsx';
import OtherProjects from './OtherProjects.tsx';

const Projects: React.FC = () => {
  return (
    <section id="projects">
      <div className="section-header">
        <span className="section-num">03</span>
        <h2 className="section-title">Projects</h2>
      </div>

      <FlagshipProject />
      <OtherProjects />
    </section>
  );
};

export default Projects;
