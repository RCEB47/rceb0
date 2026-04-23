const CACHE_NAME = 'rceb-cache-v1';
const urlsToCache = [
  '/rceb0/',
  '/rceb0/index.html',
  '/rceb0/boutique.html',
  '/rceb0/bourses.html',
  '/rceb0/coaching.html',
  '/rceb0/premium.html',
  '/rceb0/volontariat.html',
  '/rceb0/blog.html',
  '/rceb0/contact.html',
  '/rceb0/logo-rceb.jpg',
  '/rceb0/manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
