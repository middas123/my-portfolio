import React from 'react';
import "./services.css";

const projects = [
  {
    title: "School Website",
    link: "https://github.com/middas123/MPS-WEBSITE-PROJECT",
    image: "src/assets/mzam.png",
  },
  {
    title: "Sars Text Calc",
    link: "https://github.com/middas123/tax-calculator",
    image: "src/assets/sars.jpg",
  },
  {
    title: "Snake Game",
    link: "https://github.com/middas123/snake-game",
    image: "src/assets/snake game.png",
  },
  {
    title: "Pass Generator",
    link: "https://github.com/middas123/Password-Generator",
    image: "src/assets/pass gen.jpg",
  },
  {
    title: "Portfolio Of Evidence",
    link: "https://github.com/middas123/Online-Portfolio-",
    image: "src/assets/IMG_0330.jpeg",
  },
];

const Services = () => {
  return (
    <div className="services-container" id="services">
      <div className="centered-content">
        <h1 className="services-heading">Projects and Services</h1>
      </div>
      <div className="projects-divider"></div> {/* Vertical Line Divider */}
      <div className="projects">
        <div className="left-projects">
          {projects.slice(0, 3).map((project, index) => (
            <div className="project-card" key={index}>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img src={project.image} alt={project.title} className="project-image" />
              </a>
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  {project.title}
                </a>
              </p>
            </div>
          ))}
        </div>
        <div className="right-projects">
          {projects.slice(3).map((project, index) => (
            <div className="project-card" key={index}>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img src={project.image} alt={project.title} className="project-image" />
              </a>
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  {project.title}
                </a>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
