// src/App.js

import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Content from './components/Contents';
import Footer from './components/Footer';
import FloatingWidget from './components/FloatingWidget';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-content">
        {/* <Sidebar /> */}
        <Content />
      </div>
      <Footer />
      <FloatingWidget />
    </div>
  );
}

export default App;
