// src/components/FloatingWidget.js

import React, { useState } from 'react';
import VoiceNavigation from './VoiceNavigation';
import ContentReader from './ContentReader';
import SpeechControl from './SpeechControl';
import ColorBlindnessToggle from './ColorBlindnessToggle';



const FloatingWidget = () => {
  const [isWidgetOpen, setIsWidgetOpen] = useState(false);

  const toggleWidget = () => {
    setIsWidgetOpen(!isWidgetOpen);
  };

  return (
    <div className={`floating-widget ${isWidgetOpen ? 'open' : ''}`}>
      <button className="toggle-btn" onClick={toggleWidget}>
        {isWidgetOpen ? 'Close Controls' : 'Open Controls'}
      </button>
      {isWidgetOpen && (
        <div className="widget-content">
          <VoiceNavigation />
          <ContentReader />
          <SpeechControl />
          <ColorBlindnessToggle />
        </div>
      )}
    </div>
  );
};

export default FloatingWidget;
