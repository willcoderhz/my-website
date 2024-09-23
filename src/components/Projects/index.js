import React from 'react';
import './styles.css';

function Projects() {
  
  return (
    <div className="projects-container">
      <h2>My Projects</h2>
      <div className="project-list">
        {/* Example of a project */}
        <div className="project-item">
        <div className="image-wrapper">
        <img src={process.env.PUBLIC_URL + "/image/project1.jpg"} alt="Description of Project 1" />
        </div>
          <h3>WillBooking</h3>
          <p>Modern hotel booking app, React, Node.js, MongoDB, real-time availability, multiple payment options, intuitive search.</p>
          <a href="https://willcoderhz.github.io/wbooking" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>

       
        <div className="project-item">
        <div className="image-wrapper">
        <img src={process.env.PUBLIC_URL + "/image/project2.jpg"} alt="Description of Project 2" />
        </div>
          <h3>Shuihu Hero</h3>
          <p>Shuihu Hero Leaflet: Web app, Water Margin heroes, profiles, images, poetic descriptions, interactive storytelling, modern technology.</p>
          <a href="https://willcoderhz.github.io/shuihu/" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
    
        <div className="project-item">
        <div className="image-wrapper">
        <img src={process.env.PUBLIC_URL + "/image/project3.jpg"} alt="Description of Project 3" />
        </div>
          <h3>Easy FAANG+</h3>
          <p>Job prep, FAANG companies, interview practice, coding challenges, career growth, tech roles. Helping you transfer career easily!</p>
          <a href="https://willcoderhz.github.io/gomoku/" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
        {/* You can add more projects in a similar manner */}
        <div className="project-item">
        <div className="image-wrapper">
        <img src={process.env.PUBLIC_URL + "/image/project4.jpg"} alt="Description of Project 4" />
        </div>
          <h3>Zenic Fantasy</h3>
          <p>Calming app, ambient sounds, focus, relaxation, sleep, noise masking, with super cute handmade pixel art.</p>
          <a href="https://willcoderhz.github.io/white-noise/" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
        
       
      
        

      </div>
    </div>
  );
}

export default Projects;
