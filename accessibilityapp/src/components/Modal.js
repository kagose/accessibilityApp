// src/components/Modal.js

import React, { useState } from 'react';
import AIQA from './AIQA'; // Import AIQA to handle question input and API request

const Modal = ({ isOpen, closeModal }) => {
  const [answer, setAnswer] = useState(''); // For storing the answer
  const [closeModelClicked, setCloseModelClicked] = useState(false);

  // If modal is not open, return null to avoid rendering
  if (!isOpen) return null;

  // Handle closing modal and setting the closeModelClicked state
  const handleCloseModal = () => {
    setCloseModelClicked(true); // Set closeModelClicked to true when the close button is clicked
    closeModal(); // Close the modal after setting the state
  };

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>AI Q&A Agent</h2>
        
        {/* Pass setAnswer and closeModelClicked to AIQA to update the answer and notify modal closing */}
        <AIQA 
          setAnswer={setAnswer}
          openModal={closeModal}
          closeModelClicked={closeModelClicked}
          setCloseModelClicked={ setCloseModelClicked}
        />

        {/* Display the AI-generated answer */}
        <div className="qa-container" style={{ marginTop: '15px' }}>
          <p><strong>Answer:</strong></p>
          <p>{answer || "Ask a question to get an answer."}</p>
        </div>

        {/* Button to close the modal */}
        <button onClick={handleCloseModal}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
