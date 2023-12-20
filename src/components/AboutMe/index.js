import React from 'react';
import './styles.css';

function AboutMe() {
  return (
    <div className='container'>
    <h1>About Me</h1>
    <div className="about-container">
      <div className="about-intro">
        <h2>Want to know me?</h2>
        <p>Your detailed self-introduction goes here. You csssan talk more about your journey, experiences, and what drives you in the field of web development.</p>
      </div>
      <div className="about-skills">
        <h2>Skills</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Vue.js</li>
          {/* Add other skills as needed */}
        </ul>
      </div>
    </div>
    </div>
  );
}

export default AboutMe;
