// Minimaler Service Worker: macht die App installierbar, cached nichts.
self.addEventListener('install', ()=>self.skipWaiting());
self.addEventListener('activate', e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e=>{ e.respondWith(fetch(e.request)); });
