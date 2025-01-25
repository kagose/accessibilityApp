// This file contains the registration logic for the service worker

// Register the service worker
export function register() {
    if ('serviceWorker' in navigator) {
      // Check if service workers are supported by the browser
      window.addEventListener('load', () => {
        const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`; // Get the URL of the service worker
        navigator.serviceWorker
          .register(swUrl)
          .then((registration) => {
            console.log('Service Worker registered: ', registration);
          })
          .catch((error) => {
            console.error('Service Worker registration failed: ', error);
          });
      });
    }
  }
  
  // Unregister the service worker
  export function unregister() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready.then((registration) => {
        registration.unregister();
      });
    }
  }
  