import React from 'react';
import './styles.css';

function Footer() {
  return (
    <div className="footer-container">
      <p>© {new Date().getFullYear()} Will Yao. All rights reserved.</p>
      <p>Contact: paulyao22@gmail.com</p>
    </div>
  );
}

export default Footer;
