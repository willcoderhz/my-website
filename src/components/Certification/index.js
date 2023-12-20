import React from 'react';
import './styles.css';

function Certification() {
  return (
    <div className="education-container">
      <h2>Certification</h2>
      <div className="education-list">
        {/* Example of an education entry */}
        <div className="education-item">
        <div className="image-wrapper">
        <img src="/image/certi1.jpg" alt="Description of school1" />
        </div>
          <h3>Georgia Institute of Technology</h3>
          <p>Master of Computer Science</p>
        </div>
        {/* You can add more education entries in a similar manner */}
        <div className="education-item">
        <div className="image-wrapper">
        <img src="/image/school2.jpg" alt="Description of school2" />
        </div>
          <h3>King's College London</h3>
          <p>Master of History</p>
        </div>
        <div className="education-item">
        <div className="image-wrapper">
        <img src="/image/school3.jpg" alt="Description of school3" />
        </div>
          <h3>Southwestern University of Finance and Economics</h3>
          <p>Bachelor of Management</p>
         
        </div>
      </div>
    </div>
  );
}

export default Certification;
