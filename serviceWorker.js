function getRandomString(length) {
    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var result = '';
    for (var i = 0; i < length; i++) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
}
const cacheName = getRandomString(10);
const cacheFiles = [
    '/',
    '/offline.html'
]
// Install event
self.addEventListener('install', function (event) {
    //Precaching
    event.waitUntil(
        caches.open(cacheName)
            .then(function (cache) {
                console.log('SW caching cachefiles');
                return cache.addAll(cacheFiles);
            })
    )
});

// Activate event
self.addEventListener('activate', function (event) {
    event.waitUntil(
        caches.keys()
            .then(function (cacheNames) {
                return Promise.all(cacheNames.map(function (thisCacheName) {
                    if (thisCacheName !== cacheName) {
                        return caches.delete(thisCacheName);
                    }
                }))
            })
    )
});

//Fetch(If Network else Cache offline Page)
self.addEventListener('fetch', function (event) {
    event.respondWith(
        fetch(event.request).catch(function () {
            return caches.match("/offline.html") || caches.match(event.request)
        })
    )
})