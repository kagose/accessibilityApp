// src/components/AccessibilityFeatures.js

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import ColorBlindnessToggle from './ColorBlindnessToggle'; // Import ColorBlindnessToggle
import Transcriber from './Transcriber'; // Import the Transcriber modal

const AccessibilityFeatures = () => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [isReading, setIsReading] = useState(false);
  const [transcription, setTranscription] = useState(""); // Store transcribed text for Transcriber
  const [voiceNavTranscript, setVoiceNavTranscript] = useState(""); // Store transcribed text for Voice Navigation
  const [isTranscribing, setIsTranscribing] = useState(false); // Track if mic is active for transcription
  const [isTranscriberModalOpen, setIsTranscriberModalOpen] = useState(false); // Control transcriber modal visibility
  const { transcript,resetTranscript  } = useSpeechRecognition();
  const [storeVoiceNav, setStoreVoiceNav] = useState(false);
  const [storeTransCriber, setStoreTranscriber] = useState(false);

  const navigate = useNavigate();  // Create navigate function to use for navigation without reload


  // Toggle high contrast mode
  const toggleHighContrast = () => setIsHighContrast(!isHighContrast);

  //Microphone
  
  const startListening = () => {
    setIsTranscribing(true);
    SpeechRecognition.startListening({ continuous: true });
  };

  // Stop listening for transcription
  const stopListening = () => {
    SpeechRecognition.stopListening();
    setIsTranscribing(false);
  };



  // Increase font size
  const increaseFontSize = () => {
    const newFontSize = fontSize + 2;
    setFontSize(newFontSize);
    document.body.style.fontSize = `${newFontSize}px`; // Apply font size globally
  };

  // Decrease font size
  const decreaseFontSize = () => {
    const newFontSize = fontSize - 2;
    setFontSize(newFontSize);
    document.body.style.fontSize = `${newFontSize}px`; // Apply font size globally
  };

  // Start listening for voice commands (VoiceNav)
  const startVoiceNav = () => {
    setVoiceNavTranscript(""); // Clear any previous voice nav transcription
    setStoreVoiceNav(true);
    startListening();

  };

  // Stop listening for voice commands (VoiceNav)
  const stopVoiceNav = () => {
    setStoreVoiceNav(false);
    stopListening();
    setVoiceNavTranscript(""); // Clear the stored voice nav transcription
    navigate('/');
    resetTranscript();
  };

  // Handle voice command for navigation (VoiceNav)
  
  useEffect(() => {

    console.log("USEEFFECT TRANSCRIPT", voiceNavTranscript);

    const words = voiceNavTranscript.trim().split(" ");
    const lastWord = words[words.length - 1];

    if (storeVoiceNav) {
      if (lastWord.includes("about")) {
        navigate('/about');  // Navigate to About page
        setVoiceNavTranscript(""); // Clear the voice command after navigating
      } else if (lastWord.includes("services")) {
        navigate('/services');  // Navigate to Services page
        setVoiceNavTranscript(""); // Clear the voice command after navigating
      } else if (lastWord.includes("home") || lastWord.includes("start")) {
        navigate('/');  // Navigate to Home page
        setVoiceNavTranscript(""); // Clear the voice command after navigating
      } else if (lastWord.includes("contact")) {
        navigate('/contact');  // Navigate to Contact page
        setVoiceNavTranscript(""); // Clear the voice command after navigating
      }
    }
  }, [voiceNavTranscript, storeVoiceNav]);



  // Start or stop reading content
  const toggleReading = () => {
    if (isReading) {
      stopReading();
    } else {
      readPageContent();
    }
  };

  // Read content from the current page
  const readPageContent = () => {
    const bodyText = document.body.innerText; // Extract all text from the page

    // Initialize speech synthesis
    const speechSynthesis = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(bodyText);

    // Set language and voice settings
    utterance.lang = 'en-US';
    utterance.pitch = 1;
    utterance.rate = 1;

    // Speak the content
    speechSynthesis.speak(utterance);

    setIsReading(true);

    // Stop reading when finished
    utterance.onend = () => setIsReading(false);
  };

  // Stop reading content
  const stopReading = () => {
    const speechSynthesis = window.speechSynthesis;
    speechSynthesis.cancel(); // Stops the current speech synthesis
    setIsReading(false);
  };

  // Open and close transcriber modal
  const openTranscriberModal = () => {
    setIsTranscriberModalOpen(true);
    startListening();
    setStoreTranscriber(true)
  };

  const closeTranscriberModal = () => {
    setIsTranscriberModalOpen(false);
    stopListening();
    setStoreTranscriber(false)
    resetTranscript();
    setTranscription(""); // Clear transcription when modal is closed
  };

  // Update transcription in real-time
  useEffect(() => {
    if (storeTransCriber) {
      setTranscription(transcript); // Update transcription text for Transcriber
    }
    if (storeVoiceNav) {
      setVoiceNavTranscript("");
      setVoiceNavTranscript(transcript); // Update transcription for VoiceNav
    }
  }, [transcript, isTranscribing]);

  // Apply high contrast and font size effects
  useEffect(() => {
    document.body.style.fontSize = `${fontSize}px`;
    document.body.style.backgroundColor = isHighContrast ? 'black' : 'white';
    document.body.style.color = isHighContrast ? 'white' : 'black';
  }, [fontSize, isHighContrast]);

  return (
    <div style={{ padding: '10px' }}>
      <div className="widget-controls" style={{ marginBottom: '10px' }}>
        <button style={{ marginRight: '8px' }} onClick={toggleHighContrast}>
          {isHighContrast ? 'Disable Dark Mode' : 'Enable Dark Mode'}
        </button>
        <ColorBlindnessToggle /> {/* Added Color Blindness Toggle */}
      </div>

      <div className="widget-controls" style={{ marginBottom: '10px' }}>
        <button style={{ marginRight: '8px' }} onClick={increaseFontSize}>Increase Font Size</button>
        <button onClick={decreaseFontSize}>Decrease Font Size</button>
      </div>

      <div className="widget-controls" style={{ marginBottom: '10px' }}>
        <button style={{ marginRight: '8px' }} onClick={startVoiceNav}>Start VoiceNav</button>
        <button onClick={stopVoiceNav}>Stop VoiceNav</button>
      </div>

      <div className="widget-controls" style={{ marginBottom: '10px' }}>
        <button style={{ marginRight: '8px' }} onClick={toggleReading}>
          {isReading ? 'Pause Reading' : 'Start Reading'}
        </button>
        <button onClick={stopReading}>Stop Reading</button>
      </div>

      <div className="widget-controls" style={{ marginBottom: '10px' }}>
        <button  style={{ marginRight: '8px' }} onClick={openTranscriberModal}>Start Transcriber</button>
        <button onClick={closeTranscriberModal}>Stop Transcriber</button>
      </div>


      {/* Render Transcriber Modal */}
      {isTranscriberModalOpen && (
        <Transcriber transcription={transcription} storeTransCriber={storeTransCriber} closeModal={closeTranscriberModal} />
      )}
    </div>
  );
};

export default AccessibilityFeatures;
