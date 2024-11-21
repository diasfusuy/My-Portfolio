import React from "react";
import '../components/Portfolio.css';

const Portfolio = () => {
    const projects = [
        {
          id: '01',
          title: 'Demo API Generator',
          description:
            'A dummy data free and documented API generator to facilitate the process of testing the front-end portion of projects.',
        },
        {
          id: '02',
          title: 'Demo API Generator',
          description:
            'A dummy data free and documented API generator to facilitate the process of testing the front-end portion of projects.',
        },
        {
          id: '03',
          title: 'Demo API Generator',
          description:
            'A dummy data free and documented API generator to facilitate the process of testing the front-end portion of projects.',
        },
      ];
    
      return (
        <div className="portfolio-container">
          <div className="portfolio-header">
            <h1>Portfolio</h1>
            <p>
              I have brought here my biggest and favorite works as a professional.
            </p>
          </div>
          <div className="portfolio-projects">
            {projects.map((project) => (
              <div className="project-item" key={project.id}>
                <h2 className="project-id">{project.id}</h2>
                <div className="project-details">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    };
    
    export default Portfolio;