// src/components/ColorBlindnessToggle.js

import React from 'react';

const ColorBlindnessToggle = () => {
  const toggleColorBlindnessMode = () => {
    document.body.classList.toggle('color-blind-mode');
  };

  return <button onClick={toggleColorBlindnessMode}>Toggle Color Blind Mode</button>;
};

export default ColorBlindnessToggle;
