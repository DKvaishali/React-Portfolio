import React from 'react';
import '../assets/CSS/Projects.css';
import proj0 from '../assets/images/project-0.png';
import proj5 from '../assets/images/project-5.png';
import proj6 from '../assets/images/project-6.png';
import proj1 from '../assets/images/project1.png';
import proj2 from '../assets/images/project2.png';
import proj3 from '../assets/images/project3.png';
import proj4 from '../assets/images/project4.png';
import proj7 from '../assets/images/project-7.png';

// Array of project data
const projectsData = [
  {
    id: 1,
    title: 'Calculator',
    description: 'Developed a calculator using HTML, CSS, and JavaScript.',
    image: proj0,
    demoLink: 'https://calculator-app-9.netlify.app',  // Replace with actual links
    codeLink: 'https://github.com/DKvaishali/Calculator',  // Replace with actual links
  },
  {
    id: 2,
    title: 'Analog Clock',
    description: 'Developed an Analog Clock using HTML, CSS, and JavaScript.',
    image: proj5,
    demoLink: 'https://analogclock-7.netlify.app',
    codeLink: 'https://github.com/DKvaishali/Analog-Clock',
  },
  {
    id: 3,
    title: 'Form Validation',
    description: 'Developed a Form Validation using HTML, CSS, and JavaScript.',
    image: proj6,
    demoLink: 'https://form-validation-js2.netlify.app',
    codeLink: 'https://github.com/DKvaishali/Form-Validation',
  },
  {
    id: 4,
    title: 'Alarm clock',
    description: 'Alarm clock website built using HTML,CSS and javascript for seamless user experience',
    image: proj7,
    demoLink: 'https://alarm-clock-7da8ca.netlify.app',
    codeLink: 'https://github.com/DKvaishali/Alarm-Clock',
  },
  {
    id: 5,
    title: 'Food Web',
    description: 'Biryani food website built using React and Tailwind CSS for seamless user experience',
    image: proj1,
    demoLink: 'https://briyanifoodweb.netlify.app',
    codeLink: 'https://github.com/DKvaishali/Food/tree/main',
    
  },
 
  {
    id: 6,
    title: 'Ecommerce Web',
    description:'E-commerce website built using React and Tailwind CSS for seamless user experience',
    image: proj3,
    demoLink: 'https://shopcode.netlify.app/',
    codeLink: 'https://github.com/DKvaishali/ShopCode',
    
  },
  {
    id: 7,
    title: 'SocialMedia Web',
    description: 'Social Media website built using React and Material UI for seamless user experience',
    image: proj2,
    demoLink: 'https://socialmediawebsites.netlify.app',
    codeLink: 'https://github.com/DKvaishali/social-media-web',
    
  },

];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2 className="heading animate__animated animate__fadeInDown animate__slower 2s">
        My <span>Projects</span>
      </h2>

      <div className="projects-container">
        {projectsData.map((project) => (
          <div className="projects-box" key={project.id}>
            <img src={project.image} alt={`${project.title} Project`} />
            <div className="projects-layer">
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <div className="btn-box btns projects-btn">
                <a href={project.demoLink} className="btn">Demo</a>
                <a href={project.codeLink} className="btn">Code</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
