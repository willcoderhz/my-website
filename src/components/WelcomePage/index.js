import React from 'react';
import './styles.css';
import yourPhoto from './your-photo.jpg'; // 请确保你在同一文件夹中有一个名为your-photo.jpg的图片
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faCodepen } from '@fortawesome/free-brands-svg-icons';


function WelcomePage() {
  return (
    <div className="welcome-container">
      <div className="intro-section">
        <h1>Hello! I'm Will Yao</h1>
        <p>Passionate Frontend Engineer.</p>
        <p>Driven by Design and Coding.</p>
        <p>Tech Stack : HTML, CSS, JavaScript, React, Node.js, SQL</p>
        <a href="https://drive.google.com/file/d/1Xm7VVRC75Qo6hYHwmvU9t4QEsr9fyqQm/view?usp=drive_link" className="resume-button">Resume</a>
        <a href="mailto:paulyao22@gmail.com" className="resume-button">E-Mail</a>
        <div className="social-icons">
        <a href="https://www.linkedin.com/in/will-yao-0a8a41271/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="1x" />
        </a>
        <a href="https://github.com/willcoderhz" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size="1x" />
        </a>
        <a href="https://codepen.io/willcoderhz" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faCodepen} size="1x" />
        </a>
      </div>
      </div>
      <div className="photo-section">
        <img src={yourPhoto} alt="Your Name" />
      </div>
    </div>
  );
}

export default WelcomePage;
