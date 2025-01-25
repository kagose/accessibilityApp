// src/components/Sidebar.js

import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><a href="/news">News</a></li>
        <li><a href="/forms">Forms</a></li>
        <li><a href="/downloads">Downloads</a></li>
        <li><a href="/e-services">E-Services</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
