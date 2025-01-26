// src/components/TRAAssistantModal.js

import React, { useState, useEffect } from 'react';

const TRAAssistantModal = ({ isOpen, closeModal }) => {
  const [isLoading, setIsLoading] = useState(true); // State to track loading status

  // Reset loading state when modal is opened
  useEffect(() => {
    if (isOpen) {
      setIsLoading(true); // Reset loading state each time modal opens
    }
  }, [isOpen]);

  const handleIframeLoad = () => {
    setIsLoading(false); // Set loading to false when iframe content is loaded
  };

  if (!isOpen) return null; // Don't render modal if not open

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>TRA Assistant</h2>

        {/* Show a loading spinner or text while the iframe is loading */}
        {isLoading && (
          <div className="loading-placeholder">
            <p>Loading TRA Assistant...</p>
            {/* Spinner animation */}
            <div className="spinner"></div>
          </div>
        )}

        {/* The iframe, with onLoad to mark it as loaded */}
        <div style={{ height: '500px', width: '100%' }}>
          <iframe
            src="https://app.relevanceai.com/agents/bcbe5a/3cd98282d99e-45fa-82eb-981c856e889f/ca9efc59-a4b2-447f-8e8f-12f0505bfaca/share?hide_tool_steps=false&hide_file_uploads=false&hide_conversation_list=false&bubble_style=agent&primary_color=%23685FFF&bubble_icon=pd%2Fchat&input_placeholder_text=Type+your+message...&hide_logo=false"
            width="100%"
            height="100%"
            frameBorder="0"
            title="TRA Assistant"
            onLoad={handleIframeLoad} // Set loading state to false once iframe is loaded
          />
        </div>

        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default TRAAssistantModal;
