// src/components/Transcriber.js

import React, { useState, useEffect } from 'react';

const Transcriber = ({ transcription, storeTransCriber, closeModal }) => {
  return (
    <div className={`modal-overlay ${storeTransCriber ? 'open' : ''}`} onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div style={{ backgroundColor: 'gray', padding: '10px', borderRadius: '5px'}}>
        <h2>Transcription</h2>
        <div className="transcription-text">
          <p>{transcription || 'No transcription available.'}</p>
          </div>
          </div>
        <button onClick={ closeModal }>Close</button>
      </div>
    </div>
  );
};

export default Transcriber;
