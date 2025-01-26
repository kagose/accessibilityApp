// src/components/FloatingWidget.js

import React, { useState } from 'react';
import Modal from './Modal'; // Modal for displaying AI answer
import TRAAssistantModal from './TRAAssistantModal'; // Modal for TRA Assistant
import AccessibilityFeatures from './AccessibilityFeatures'; // Import the AccessibilityFeatures component



const FloatingWidget = () => {
  const [isWidgetOpen, setIsWidgetOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // For controlling the AI modal visibility
  const [isTRAOpen, setIsTRAOpen] = useState(false); // For controlling the TRA Assistant modal visibility
  const [answer, setAnswer] = useState(''); // Store the AI answer

  const toggleWidget = () => {
    setIsWidgetOpen(!isWidgetOpen);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openTRA = () => {
    setIsTRAOpen(true); // Open TRA Assistant Modal
  };

  const closeTRA = () => {
    setIsTRAOpen(false); // Close TRA Assistant Modal
  };

  return (
    <div>
      <div className={`floating-widget ${isWidgetOpen ? 'open' : ''}`}>
        <button className="toggle-btn" onClick={toggleWidget}>
          {isWidgetOpen ? 'Close Controls' : 'Open Controls'}
        </button>

        {isWidgetOpen && (
          <div className="widget-content">
            <AccessibilityFeatures />  {/* Accessibility controls with all features */}

            {/* AI Q&A and TRA Assistant Modals */}
            <button onClick={openModal}>Ask AI</button>
            <button onClick={openTRA}>TRA Assistant</button>
          </div>
        )}
      </div>

      {/* Modal for AI Answer */}
      <Modal isOpen={isModalOpen} closeModal={closeModal} questionAnswer={answer} />

      {/* Modal for TRA Assistant */}
      <TRAAssistantModal isOpen={isTRAOpen} closeModal={closeTRA} />
    </div>
  );
};

export default FloatingWidget;
