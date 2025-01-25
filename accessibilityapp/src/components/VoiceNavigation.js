// src/components/VoiceNavigation.js

import React, { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const VoiceNavigation = () => {
  const { transcript, resetTranscript } = useSpeechRecognition();
  const [isListening, setIsListening] = useState(false);

  const startListening = () => {
    setIsListening(true);
    SpeechRecognition.startListening();
  };

  const stopListening = () => {
    setIsListening(false);
    SpeechRecognition.stopListening();
  };

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return <span>Browser does not support speech recognition.</span>;
  }

  return (
    <div>
      <button onClick={startListening} disabled={isListening}>Start Listening</button>
      <button onClick={stopListening} disabled={!isListening}>Stop Listening</button>
      <p>{transcript}</p>
    </div>
  );
};

export default VoiceNavigation;
