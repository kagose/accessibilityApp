// src/components/AIQA.js

import React, { useState } from 'react';
import axios from 'axios';
require('dotenv').config();

const AIQA = ({ setAnswer, openModal,closeModelClicked,setCloseModelClicked }) => {
  const [question, setQuestion] = useState(''); // To store the user's question
    const [loading, setLoading] = useState(false); // For loading state while making the API request
    
    const errorMessageLorem =" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"

    const handleQuestionChange = (e) => setQuestion(e.target.value);
    
    if (closeModelClicked === true) {
        setAnswer("");
        setCloseModelClicked(false);
        
        
     };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!question.trim()) {
      alert('Please enter a question');
      return;
    }
    const KEY = "";


    setLoading(true); // Start loading

    try {
      const response = await axios.post('https://api.openai.com/v1/chat/completions', {
        model: 'gpt-3.5-turbo', // OpenAI model for generating answers
        messages: [
          { role: 'system', content: 'You are a helpful assistant.' },
          { role: 'user', content: `Answer the following question about TRA (Tanzania Revenue Authority): ${question}` },
        ],
        max_tokens: 200,
      }, {
        headers: {
          'Authorization': `Bearer ${KEY}`, // Replace with your actual OpenAI API Key
        }
      });

      const aiAnswer = response.data.choices[0].message.content.trim(); // Get the AI-generated answer from the chat model
      setAnswer(aiAnswer); // Set the answer in Modal.js state
      setLoading(false); // Stop loading
      openModal(); // Close the modal after submitting
    } catch (error) {
      console.error('Error fetching answer from OpenAI:', error);
      setAnswer(`Sorry You have exceeded your OpenAI Quota or something went wrong. Please try again. ${errorMessageLorem}`); // Show an error message if the request fails
      setLoading(false); // Stop loading
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
                  type="textarea"
                  className='question-input'
          value={question}
          onChange={handleQuestionChange}
          placeholder="Ask about TRA..."
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Loading.......' : 'Submit Question'}
        </button>
      </form>
    </div>
  );
};

export default AIQA;