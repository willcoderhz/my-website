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
        <img src={process.env.PUBLIC_URL + "/image/project12.jpg"} alt="Description of Project 10" />
        </div>
          <h3>Awesome Resume</h3>
          <p>"Awesome Resume" is your go-to app for crafting professional and eye-catching resumes with ease. It features a variety of customizable templates, allowing users to create resumes that not only match their personal style but also cater to specific industry demands. With user-friendly editing tools, the app makes resume building straightforward and efficient. </p>
          <a href="https://github.com/willcoderhz/awesome_resume" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
        <div className="project-item">
        <div className="image-wrapper">
        <img src={process.env.PUBLIC_URL + "/image/project10.jpg"} alt="Description of Project 10" />
        </div>
          <h3>Shuihu Heros</h3>
          <p>Shuihu Hero Leaflet is a web application showcasing heroes from the Chinese classic, "Water Margin". Users can explore each hero's profile, view images, and uncover poetic descriptions and tales by interacting with the interface, offering a blend of traditional storytelling with modern technology.</p>
          <a href="https://willcoderhz.github.io/shuihu/" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
        <div className="project-item">
        <div className="image-wrapper">
        <img src={process.env.PUBLIC_URL + "/image/project11.jpg"} alt="Description of Project 11" />
        </div>
          <h3>WeiTalk</h3>
          <p>Wetalk is a user-friendly, real-time chat application that enables seamless communication through a clean and intuitive interface, fostering connections and interactions in an engaging online environment.</p>
          <a href="https://github.com/willcoderhz/WeiChat" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
        <div className="project-item">
        <div className="image-wrapper">
        <img src={process.env.PUBLIC_URL + "/image/project1.jpg"} alt="Description of Project 1" />
        </div>
          <h3>Gomoku</h3>
          <p>Gomoku is a classic strategy board game where players aim to line up five of their pieces consecutively. This digital version offers an intuitive interface and challenging AI opponents.</p>
          <a href="https://willcoderhz.github.io/gomoku/" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
        {/* You can add more projects in a similar manner */}
        <div className="project-item">
        <div className="image-wrapper">
        <img src={process.env.PUBLIC_URL + "/image/project2.jpg"} alt="Description of Project 2" />
        </div>
          <h3>White Noise</h3>
          <p>White Noise is a calming application that generates soothing ambient sounds. It's designed to aid focus, relaxation, and sleep by masking distracting noises.</p>
          <a href="https://willcoderhz.github.io/white-noise/" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
        <div className="project-item">
        <div className="image-wrapper">
        <img src={process.env.PUBLIC_URL + "/image/project3.jpg"} alt="Description of Project 3" />
        </div>
          <h3>Hungry Snake</h3>
          <p>Hungry Snake revives the iconic arcade game, challenging players to navigate the snake to consume food without colliding into itself. With each bite, the snake grows, increasing the game's difficulty.</p>
          <a href="https://willcoderhz.github.io/Hungry-Snake/" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
        <div className="project-item">
        <div className="image-wrapper">
        <img src={process.env.PUBLIC_URL + "/image/project4.jpg"} alt="Description of Project 4" />
        </div>
          <h3>Pomodoro Timer</h3>
          <p>The Pomodoro Timer is a productivity tool based on the Pomodoro Technique, helping users work in focused intervals with scheduled breaks. It's designed to boost efficiency and manage work time effectively.</p>
          <a href="https://willcoderhz.github.io/tomato-timer/" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
        <div className="project-item">
        <div className="image-wrapper">
        <img src={process.env.PUBLIC_URL + "/image/project5.jpg"} alt="Description of Project 5" />
        </div>
          <h3>Calculator</h3>
          <p>This Calculator is a versatile tool that handles both basic arithmetic and complex mathematical operations. Its user-friendly interface ensures quick calculations with accurate results.</p>
          <a href="https://github.com/willcoderhz/Calculator" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
        <div className="project-item">
        <div className="image-wrapper">
        <img src={process.env.PUBLIC_URL + "/image/project6.jpg"} alt="Description of Project 6" />
        </div>
          <h3>Products Management System</h3>
          <p>The Products Management System is a comprehensive platform for tracking and managing product inventories. It streamlines operations with features like product categorization, stock alerts, and sales analytics.</p>
          <a href="https://willcoderhz.github.io/my_management_system/" target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
        

      </div>
    </div>
  );
}

export default Projects;
