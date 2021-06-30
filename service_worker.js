try{

    console.log("Service Working! ;)");

    self.addEventListener("install", (event)=>{             // Install event is useful for configuring: opening/reading a cache, cache our files, confirm whether all the required assets are cached or not.
        console.log("Installing Service Worker");
        let CACHE_NAME = "MySite-Cache-v1";
        let ResourcesURLsToCache = ['/', '/uploads/css/common_stylesheet.css', '/uploads/js/common_script.js'];

        event.waitUntil(
            // This is a chain of promises (caches.open() and cache.addAll()). 
            caches.open(CACHE_NAME)
            .then(function(cache) {
                console.log("Cache "+CACHE_NAME+" Opened!");
                return cache.addAll(ResourcesURLsToCache);      // The serviceWorker will be installed only when ALL the files are successfully cached.
            })
            .then(()=>{ console.log("ServiceWorker Successfully Installed"); })
        );

    });

    self.addEventListener("fetch", (event)=>{            // fetch handler decides when to use cache and when to fetch from remote server
        console.log("Fetching through Service Worker");
        event.respondWith(
            caches.match(event.request)                  // caches.match(event.request) allows us to match each resource requested from the network with the equivalent resource available in the cache, if there is a matching one available.
            .then((response) => {
                return response || fetch(event.request).then((response) => {
                    return caches.open(CACHE_NAME).then((cache) => {
                        cache.put(event.request, response.clone());
                        return response;
                    });
                })
                .catch(() => {                          // fetch .catch to handle default fallback and ensure something is returned even if if the request doesn’t match anything in the cache, and the network is not available and our request will still fail
                    return Response("<h1>Resource Fetching Failure</h1>", { headers: { 'Content-Type': 'text/html' } });        // return caches.match('...'); instead to return some guranteed cached resource
                })
            })
        )}
    );

    // To-Do: Handle Appropriate Event(s) (such as activate, ...)
    self.addEventListener("activate", event=>{

    });

}

catch(err){
    // Error-Handling Error-Free JS
    console.log(`Unable to load custom serviceWorker.js (${document.currentScript}) completely! Error: ${err.message}. [ In detail: ${err}. ]\nPlease ensure that your browser is set to allow JavaScript files, or consider whitelisting this site, and reload this page. You may face some performance limitations of this page.`);
}

/**
  * Previous LOG, when service worker was not present in root directory: Service worker registration failed, with message (if any): DOMException: Failed to register a ServiceWorker for scope ('http://localhost/') with script ('http://localhost/uploads/js/service_worker.js'): The path of the provided scope ('/') is not under the max scope allowed ('/uploads/js/'). Adjust the scope, move the Service Worker script, or use the Service-Worker-Allowed HTTP header to allow the scope.
  * The above log was encountered on 'localhost' when using this service_worker.js file from './uploads/js/' folder. The only current solution for it is to use service_worker.js file from root directory.
  */