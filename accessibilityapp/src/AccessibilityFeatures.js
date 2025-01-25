import React, { useState, useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import * as handpose from '@tensorflow-models/handpose';
import * as tf from '@tensorflow/tfjs';

const AccessibilityFeatures = () => {
  // State for managing high contrast and font size
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [isReading, setIsReading] = useState(false);  // To toggle speech synthesis

  const { transcript, resetTranscript } = useSpeechRecognition();

  // Toggle high contrast mode
  const toggleHighContrast = () => setIsHighContrast(!isHighContrast);

  // Increase font size
  const increaseFontSize = () => setFontSize(fontSize + 2);

  // Decrease font size
  const decreaseFontSize = () => setFontSize(fontSize - 2);

  // Start listening for voice commands
  const startListening = () => {
    SpeechRecognition.startListening({ continuous: true });
  };

  // Stop listening for voice commands
  const stopListening = () => {
    SpeechRecognition.stopListening();
  };

  // Handle voice command (e.g., open tax forms)
  const handleVoiceCommand = () => {
    if (transcript.includes('open tax forms')) {
      window.location.href = '/tax-forms';
    }
  };

  // Initialize hand tracking for gestures
  const initHandTracking = async () => {
    await tf.ready();
    const video = document.getElementById('video');
    const model = await handpose.load();
    const predictions = await model.estimateHands(video);
    if (predictions.length > 0) {
      console.log(predictions);
      // Process predictions here to trigger actions based on gestures
    }
  };

  // Apply high contrast and font size effects
  useEffect(() => {
    document.body.style.fontSize = `${fontSize}px`;
    document.body.style.backgroundColor = isHighContrast ? 'black' : 'white';
    document.body.style.color = isHighContrast ? 'white' : 'black';
  }, [fontSize, isHighContrast]);

  // Function to read content from the iframe
  const readIframeContent = () => {
    const iframe = document.getElementById('iframe');
    const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;

    // Ensure iframe is accessible (same-origin policy)
    if (iframeDocument) {
      const bodyText = iframeDocument.body.innerText; // Extract all text from the iframe

      // Initialize speech synthesis
      const speechSynthesis = window.speechSynthesis;
      const utterance = new SpeechSynthesisUtterance(bodyText);

      // Set language and voice settings (Optional)
      utterance.lang = 'en-US';
      utterance.pitch = 1;
      utterance.rate = 1;

      // Speak the content
      speechSynthesis.speak(utterance);

      // Toggle reading status
      setIsReading(true);

      // Stop reading when finished (optional)
      utterance.onend = () => setIsReading(false);
    } else {
      console.error("Cannot access iframe content due to cross-origin restrictions.");
    }
  };

  // Function to stop reading content
  const stopReading = () => {
    const speechSynthesis = window.speechSynthesis;
    speechSynthesis.cancel(); // Stops the current speech synthesis
    setIsReading(false);
  };

  // Button click handler for starting and stopping reading
  const toggleReading = () => {
    if (isReading) {
      stopReading();
    } else {
      readIframeContent();
    }
  };

  return (
    <div className="widget-container" style={{ padding: '10px', color: 'white' }}>
      <div className="widget-controls" style={{ marginBottom: '10px' }}>
        <button onClick={toggleHighContrast}>
          {isHighContrast ? 'Disable High Contrast' : 'Enable High Contrast'}
        </button>
        <button onClick={increaseFontSize}>Increase Font Size</button>
        <button onClick={decreaseFontSize}>Decrease Font Size</button>
      </div>

      <h3>Voice Commands</h3>
      <button onClick={startListening}>Start Listening</button>
      <button onClick={stopListening}>Stop Listening</button>
      <p>Transcript: {transcript}</p>
      {handleVoiceCommand()}

      <h3>Gesture Control (Hand Tracking)</h3>
      <video
        id="video"
        width="640"
        height="480"
        autoPlay
        muted
        onPlay={initHandTracking}
        style={{ marginTop: '10px' }}
      />

      {/* Read content from iframe button */}
      <button onClick={toggleReading}>
        {isReading ? 'Stop Reading' : 'Start Reading'}
      </button>

      {/* Iframe to load external website */}
      <iframe
        id="iframe"
        src="https://www.nssf.go.tz"
        title="Website"
        width="100%"
        height="100%"
        style={{ border: 'none', marginTop: '10px' }}
      ></iframe>
    </div>
  );
};

export default AccessibilityFeatures;
