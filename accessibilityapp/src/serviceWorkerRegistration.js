// src/serviceWorkerRegistration.js

// Register the service worker
export function register() {
  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      const swUrl = "/accessibilityApp/service-worker.js"; // Fix for subdirectory
      navigator.serviceWorker
        .register(swUrl)
        .then((registration) => {
          console.log("Service Worker registered: ", registration);
        })
        .catch((error) => {
          console.error("Service Worker registration failed: ", error);
        });
    });
  }
}

// Unregister the service worker
export function unregister() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.ready.then((registration) => {
      registration.unregister();
    });
  }
}

