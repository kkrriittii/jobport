import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-column">
          <div className="footer-section">
            <h3>For Job Seekers</h3>
            <ul>
              <li><a href="#">Job Alerts</a></li>
              <li><a href="#">Career Advice</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-column">
          <div className="footer-section">
            <h3>About the Creation</h3>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;