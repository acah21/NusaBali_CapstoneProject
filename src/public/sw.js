const CACHE_NAME = 'nusabali-v1';
const urlToCache = [
  '/',
  '/index.html',
  '/styles/style.css',
  '/styles/culture.css',
  '/styles/about-us-responsive.css',
  '/styles/about-us.css',
  '/styles/destination.css',
  '/styles/navigation.css',
  '/script/BurgerIcon.js',
  '/script/navigation-helper.js',
  '/script/map.js',
  '/script/animations.js',
  '/script/app.js',
  '/script/sw.js',
  '/script/HomeModel.js',
  '/script/HomePresenter.js',
  '/script/DestinationModel.js',
  '/script/DestinationPresenter.js',
  '/script/DestinationView.js',
  '/script/DestinationModel.js',
  '/script/DestinationPresenter.js',
  '/images/NUSABali.png',
  '/images/NUSABali white.png',
  '/images/Bali-History-1320x743.jpg',
]
// Install event
self.addEventListener('install', (event) => {
  console.log('Service Worker: Installing');
  self.skipWaiting();
});

// Activate event
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activated');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Fetch event
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Make copy/clone of response
        const resClone = response.clone();
        
        // Open cache
        caches.open(CACHE_NAME)
          .then((cache) => {
            // Add response to cache
            if (event.request.method === 'GET') {
              cache.put(event.request, resClone);
            }
          });
        return response;
      })
      .catch(() => caches.match(event.request).then((response) => response))
  );
});
