const CACHE = 'foto17-v2-chumbo';
const ASSETS = ['./','./index.html','./styles.css','./app.js','./manifest.webmanifest','./icons/icon-chumbo-192.png','./icons/icon-chumbo-512.png','./icons/apple-touch-icon-chumbo.png','./images/hero-iphone17-chumbo.png','./images/lentes-05-1-2.png','./images/noite-cidade.png','./images/retrato.png','./images/macro.png','./images/movimento.png','./images/comida.png','./images/selfie.png','./images/video-dual-chumbo.png'];
self.addEventListener('install', event => event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting())));
self.addEventListener('activate', event => event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key)))).then(() => self.clients.claim())));
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request).then(response => { const copy=response.clone(); caches.open(CACHE).then(cache => cache.put(event.request,copy)); return response; }).catch(() => caches.match('./index.html'))));
});
