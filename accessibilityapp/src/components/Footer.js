// src/components/Footer.js

import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2025 Tanzania Revenue Authority | All rights reserved</p>
      <ul className="social-links">
        <li><a href="https://twitter.com/tra_tz">Twitter</a></li>
        <li><a href="https://facebook.com/tra_tz">Facebook</a></li>
        <li><a href="https://www.tra.go.tz">Website</a></li>
      </ul>
    </footer>
  );
};

export default Footer;
