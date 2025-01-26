// src/components/Header.js

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './Header.css';
import logo from './../components/LOGO_WINGS.png';  // Correct import statement for logo image

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="TRA Logo" /> {/* Use the correct image source */}
      </div>
      <nav className="nav">
        <ul>
          <li><Link to="/">Home</Link></li> {/* Link to Home */}
          <li><Link to="/about">About</Link></li> {/* Link to About page */}
          <li><Link to="/services">Services</Link></li> {/* Link to Services page */}
          <li><Link to="/contact">Contact</Link></li> {/* Link to Contact page */}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
