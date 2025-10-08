const CACHE_NAME = 'pwa-installer-cache-v1';

// This service worker is intentionally simple.
// Its main purpose is to exist, allowing the web app to be installable (fulfilling the PWA criteria).
// It employs a network-first caching strategy.

self.addEventListener('install', event => {
  // Perform install steps
  console.log('Service Worker: Installing...');
});

self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(() => {
      // If the network request fails (e.g., user is offline),
      // there's no specific offline page to show, as the app is just an iframe.
      // The browser's default offline error in the iframe is acceptable.
      return caches.match(event.request);
    })
  );
});