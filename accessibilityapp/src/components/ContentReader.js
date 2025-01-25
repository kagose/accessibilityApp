// src/components/ContentReader.js

import React from 'react';

const ContentReader = () => {
  const readContent = () => {
    const content = document.getElementById('content-to-read').innerText;
    const utterance = new SpeechSynthesisUtterance(content);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div>
      <button onClick={readContent}>Read Content</button>
      <div id="content-to-read">
        <p>This is the content that will be read aloud.</p>
      </div>
    </div>
  );
};

export default ContentReader;
