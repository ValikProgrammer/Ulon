const cacheName = "UlonCache-v7"
// const siteName = "https://pwa.tiomnyilis.repl.co/"
const pathToOfflinePage = "sourceForServiceWorker/offline-page.html"
const sorces = [
    'sourceForServiceWorker/offline-page.html',
    'sourceForServiceWorker/icons/favicon.ico',
    'sourceForServiceWorker/icons/offlinePageIcon.png',
]


self.addEventListener('install',async () => {
  console.log("[SW] - I am installed!")
    // добавляет файлы которые нам нужны в кэш
    const cache = await caches.open(cacheName);
    await cache.addAll(sorces)
});
  


self.addEventListener('activate', async () => {
  console.log("[SW] - I am activated!")
  // отчисщаем кэш который не нужен
  const cacheNames = await caches.keys()

      cacheNames
      .filter(name => name !== cacheName) // все версии которые не равны данной он складывает в массив
      .map(name => caches.delete(name)) // удаляет все из массива котроые сделал filter
});

self.addEventListener('fetch', async event => {
  event.respondWith(async function() {
    // for(el of sorces) { // all elements that use in offline page 
    //   if(event.request.url === siteName+el) {
    //     console.log("I returned:",event.request.url)
    //     return await caches.match(el)
    //   }
    // }

    return caches.match(event.request.url)
          .then( res  => { 
            return res || fetch(event.request)
          })
          .catch( () =>  {
            console.log("[SW] error",event.request.url);
            return  caches.match(pathToOfflinePage)
          })
//    return (fetch(event.request) || caches.match('offline-page.html')); 
    }()
  );

});


