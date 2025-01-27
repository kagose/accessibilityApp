// src/App.js

import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Content from './components/Contents';  // Content component for Home, About, Services, and Contact pages
import Footer from './components/Footer';
import FloatingWidget from './components/FloatingWidget';
import Modal from './components/Modal'; // Import Modal for displaying AI answer

// Import React Router components
import {Route, Routes } from 'react-router-dom';
import About from './components/About'; // Import About page
import Services from './components/Services'; // Import Services page
import Contact from './components/Contact'; // Import Contact page

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false); // For controlling modal visibility

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false); 

  return (
  
      <div className="App">
        <Header />
        <div className="main-content">
          <Routes >
            <Route path='/'>
              <Route  index element={<Content />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
            </Route>
          </Routes>
        </div>
        <Footer />
        <FloatingWidget openModal={openModal} />
        
        {/* AI Q&A Modal */}
        <Modal
          isOpen={isModalOpen}
          closeModal={closeModal}
        />
      </div>
  );
}

export default App;
