self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  // هذا الملف ضروري جداً ليسمح جوجل كروم بالتثبيت
});
