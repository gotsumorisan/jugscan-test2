const CACHE = 'jug-scan-v1.3.0';
const SHELL = ['./', './index.html', './manifest.webmanifest', './icons/icon-192.png', './icons/icon-512.png', './icons/apple-touch-icon.png'];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(SHELL)).catch(()=>{}));
  self.skipWaiting();
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k.startsWith('jug-scan-') && k !== CACHE).map(k => caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const req = event.request;
  if (req.mode === 'navigate') {
    event.respondWith(fetch(req).then(resp => {
      const copy = resp.clone(); caches.open(CACHE).then(c => c.put('./index.html', copy)); return resp;
    }).catch(() => caches.match('./index.html')));
    return;
  }
  event.respondWith(fetch(req).then(resp => {
    const copy = resp.clone(); caches.open(CACHE).then(c => c.put(req, copy)); return resp;
  }).catch(() => caches.match(req)));
});
