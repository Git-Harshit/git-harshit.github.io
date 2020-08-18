try{

    window.addEventListener('load', () => {
        // To be replaced with a loader
        // alert("Page Loaded!");
        console.log("Webpage Loading Complete!");
    });

    // M.AutoInit();        // Initialising all materialize css elements in one go

    // Materialize CSS Sidenav initialiser (for small screens)
    document.addEventListener('DOMContentLoaded', function() {
        let elems = document.querySelectorAll('.sidenav');
        let options = {};
        let instances = M.Sidenav.init(elems, options);
    });
    
    // Clear the console (on successfully loading this JS)
    // console.clear();

}

catch(err){
    // Error-Handling Error-Free JS
    console.log(`Unable to load common.js (${document.currentScript}) completely! Error: ${err.message}. [ In detail: ${err}. ]\nPlease ensure that your browser is set to allow JavaScript files, or consider whitelisting this site, and reload this page. You may face some performance limitations of this page.`);
}