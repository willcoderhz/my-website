import React from 'react';
import './styles.css';

function Education() {
  return (
    <div className="education-container">
      <h2>Education</h2>
      <div className="education-list">
        {/* Example of an education entry */}
        <div className="education-item">
        <div className="image-wrapper">
        <img src={process.env.PUBLIC_URL + "/image/school1.jpg"} alt="Description of School 1" />
        </div>
          <h3>Northern Arizona University</h3>
          <p>Master of Computer Science</p>
        </div>
        {/* You can add more education entries in a similar manner */}
        <div className="education-item">
        <div className="image-wrapper">
        <img src={process.env.PUBLIC_URL + "/image/school2.jpg"} alt="Description of School 2" />
        </div>
          <h3>King's College London</h3>
          <p>Master of History</p>
        </div>
        <div className="education-item">
        <div className="image-wrapper">
        <img src={process.env.PUBLIC_URL + "/image/school3.jpg"} alt="Description of School 3" />
        </div>
          <h3>Southwestern University of Finance and Economics</h3>
          <p>Bachelor of Management</p>
         
        </div>
      </div>
    </div>
  );
}

export default Education;
