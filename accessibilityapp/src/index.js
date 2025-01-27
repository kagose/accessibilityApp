import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client' for React 18
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

// Create a root and render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <App/>
    </HashRouter>
  </React.StrictMode>
);

// Register the service worker
serviceWorkerRegistration.register();
