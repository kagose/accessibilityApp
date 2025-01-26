// src/components/ColorBlindnessToggle.js

import React from 'react';

const ColorBlindnessToggle = () => {
  const toggleColorBlindnessMode = () => {
    document.body.classList.toggle('color-blind-mode');
  };

  return <button onClick={toggleColorBlindnessMode}>ColorBlindMode</button>;
};

export default ColorBlindnessToggle;
