self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('mrevamedia-cache').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/style.css',
        '/web-app-manifest-192x192.png',
        '/web-app-manifest-512x512.png'
        // Add other assets like fonts, scripts, etc.
      ]);
    })
  );
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});