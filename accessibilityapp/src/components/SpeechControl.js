// src/components/SpeechControl.js

import React from 'react';

const SpeechControl = () => {
  const handleStopSpeech = () => {
    window.speechSynthesis.cancel();
  };

  const handleContinueSpeech = () => {
    const content = document.getElementById('content-to-read').innerText;
    const utterance = new SpeechSynthesisUtterance(content);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div>
      <button onClick={handleStopSpeech}>Stop</button>
      <button onClick={handleContinueSpeech}>Continue</button>
    </div>
  );
};

export default SpeechControl;
