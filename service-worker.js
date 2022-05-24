importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js');

workbox.routing.registerRoute(
  /\.(?:css|js)$/,
  new workbox.strategies.StaleWhileRevalidate({
    "cacheName": "assets",
    Plugin: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 1000,
        maxAgeSeconds: 31536000
      })
    ]
  })
);

workbox.routing.registerRoute(
  /\.(?:png|jpg|gif)$/,
  new workbox.strategies.CacheFirst({
    "cacheName": "images",
    Plugin: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 1000,
        maxAgeSeconds: 31536000
      })
    ]
  })
);