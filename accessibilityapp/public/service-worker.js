const CACHE_NAME = "accessibilityApp-cache-v1";
const urlsToCache = [
  "/accessibilityApp/",
  "/accessibilityApp/index.html",
  "/accessibilityApp/manifest.json",
  "/accessibilityApp/service-worker.js",
  "/accessibilityApp/static/js/bundle.js",
  "/accessibilityApp/static/js/main.chunk.js",
  "/accessibilityApp/static/js/0.chunk.js",
  "/accessibilityApp/static/css/main.css",
  "/accessibilityApp/icons/icon-192x192.png",
  "/accessibilityApp/icons/icon-512x512.png",
];

/**
 * Install Service Worker
 */
// eslint-disable-next-line no-restricted-globals
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

/**
 * Fetch Requests Handling
 */
// eslint-disable-next-line no-restricted-globals
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    }).catch(() => {
      return caches.match("/accessibilityApp/index.html");
    })
  );
});

/**
 * Activate Service Worker and Clear Old Caches
 */
// eslint-disable-next-line no-restricted-globals
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((cacheName) => cacheName !== CACHE_NAME)
          .map((cacheName) => caches.delete(cacheName))
      );
    })
  );
});
