import React from 'react';
import './projects.css';
import Portfolio1 from '../../assets/portfolio-1.png';
import PortfolioFabflix  from '../../assets/portfolio_fabflix.png';
import PortfolioHinman  from '../../assets/portfolio_hinman.png';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Personal Portfolio Website",
      image: Portfolio1,
      githubUrl: "https://github.com/LeynaNguyen3/PersonalWebsite_2",
      description: "This is the website you're currently viewing!"
    },
    {
      id: 2,
      title: "Fabflix",
      image: PortfolioFabflix,
      githubUrl: "https://www.youtube.com/watch?v=giEpsQsG414&ab_channel=LeynaNguyen",
      description: "Full-stack movie browsing web application"
    },
    {
      id: 3,
      title: "Axon Regeneration Classifier",
      image: PortfolioHinman,
      githubUrl: "https://docs.google.com/presentation/d/1_2yMVcBLNqmqKTIjmgZUHVHMSMt-pIZioBUL4UcfYN0/edit?usp=drive_link",
      description: "Axon Regeneration Classifier for Hinman Lab"
    }
    // Add more projects here when needed
  ];

  return (
    <section id='projects'>
      <h2 className="projectsTitle">Projects</h2>
      <span className="projectsDesc">Here are all my projects... so far!</span>
      
      <div className="projectsImgs">
        {projects.map((project) => (
          <a 
            key={project.id}
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="projectImg"
          >
            <img 
              src={project.image} 
              alt={project.title} 
              className="projectsImg" 
            />
            <div className="overlay">
              <div className="text">{project.description}</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;