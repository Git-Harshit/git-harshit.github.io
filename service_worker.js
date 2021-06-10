try{

    console.log("Service Working! ;)");

    // To-Do: Handle Appropriate Events (such as install, fetch, activate, ...)
    self.addEventListener("install", (event)=>{             // Install event is useful for configuring: opening/reading a cache, cache our files, confirm whether all the required assets are cached or not.
        console.log("Installing Service Worker");
        let CACHE_NAME = "MySite-Cache-1";
        let ResourcesURLsToCache = ['/', '/uploads/css/common_stylesheet.css', '/uploads/js/common_script.js'];

        event.waitUntil(
            // This is a chain of promises (caches.open() and cache.addAll()). 
            caches.open(CACHE_NAME)
            .then(function(cache) {
                console.log("Cache "+CACHE_NAME+" Opened!");
                return cache.addAll(ResourcesURLsToCache);      // The serviceWorker will be installed only when ALL the files are successfully cached.
            })
        );

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