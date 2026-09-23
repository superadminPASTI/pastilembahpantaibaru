// Service Worker ringkas — PASTI Admin
// Tujuan: (1) penuhi syarat installability PWA (Chrome/Android/Desktop perlukan
// service worker berdaftar dengan fetch handler), (2) app-shell offline asas.
//
// PENTING: hanya request GET yang di-cache. Semua data sebenar (login, dashboard,
// update status) guna POST ke Apps Script — sengaja TIDAK disentuh service worker
// ni supaya data sentiasa terus dari server, tak pernah tersangkut stale/cache.

const CACHE_NAME = 'pasti-admin-v1';
const APP_SHELL = [
  './',
  './index.html',
  './manifest.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(APP_SHELL))
      .catch(() => { /* offline masa install pertama — tak fatal */ })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return; // JANGAN intercept POST (semua action data)

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy)).catch(() => {});
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
