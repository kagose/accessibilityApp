// src/components/Content.js

import React from 'react';
import './Contents.css'; // Import the Contents.css file

const Content = () => {
  return (
    <div className="content">
      <h1>Welcome to the Tanzania Revenue Authority (TRA)</h1>
      <p>
        The Tanzania Revenue Authority (TRA) was established by Act of Parliament No. 11 of 1995, and started its operations on 1st July 1996. In carrying out its statutory functions, TRA is regulated by law, and is responsible for administering impartially various taxes of the Central Government.
      </p>

      <h2>Our Vision</h2>
      <p>"A Trusted Revenue Administration for Socio-economic Development".</p>

      <h2>Our Mission</h2>
      <p>"We Make It Easy to Pay Tax and Enhance Compliance for Sustainable Development".</p>

      <h2>Our Core Values</h2>
      <p>
        TRA's core values are a handful of moral boundaries within which TRA operates. They define TRA’s personality and are ethical standards by which TRA would be measured. The values are a commitment to the stakeholders and are incorporated into all actions taken by the organization.
      </p>
      
      <ul>
        <li><strong>Professionalism:</strong> We are committed to applying the law consistently, responsibly, and with credibility using the skills and knowledge as a prerequisite in administering your requirements.</li>
        <li><strong>Accountability:</strong> We build and sustain an organization that values and promotes accountability.</li>
        <li><strong>Integrity:</strong> We believe in being fair and honest when serving you.</li>
        <li><strong>Trustworthy:</strong> We are determined to maintain a workplace in which trustworthiness will thrive.</li>
      </ul>
    </div>
  );
};

export default Content;
