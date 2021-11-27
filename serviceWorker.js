const staticDevCoffee = "dev-coffee-site-v1"
let x = 1
const assets = [
  "/",
  "index.html",
  "style.css",
  "app.js",
"source.png",
]
self.addEventListener("install", installEvent => {

    // caches.open('v1').then(function(cache) {
    //      cache.addAll(['./myapp.json']);
    // })
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
          console.log('ahmed')
        return res || fetch(fetchEvent.request)
      })
    )
  })




  self.addEventListener('notificationclose', function(e) {
    var notification = e.notification;
    var primaryKey = notification.data.primaryKey;
  
    console.log('Closed notification: ' + primaryKey);
  });


  self.addEventListener('notificationclick', function(e) {
    var notification = e.notification;
    var primaryKey = notification.data.primaryKey;
    var action = e.action;
  
    if (action === 'close') {
      notification.close();
    } else {
      clients.openWindow('http://www.example.com');
      notification.close();
    }
  });


  