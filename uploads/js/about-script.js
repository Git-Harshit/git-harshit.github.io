try{
    // Showing the Current URL of Page
    let URLFeed = document.querySelector(".URL_Box");
    URLFeed.innerHTML = " ( " + "<a href=\"" + document.URL.substring(0, document.URL.lastIndexOf('/')) /* document.location.origin should yield same unless the site is hosted on some subdirectory or supath of a domain */ + "\">" + window.location.origin + "</a> )";

    let page_URLs = {
        "#github-repo-button":"https://github.com/Git-Harshit/git-harshit.github.io",
    };

    for ( let page_URL in page_URLs ) {
        document.querySelector(page_URL).onclick = ()=> {
            window.open(page_URLs[page_URL]);
        }
    }
}

catch(err){
    // Error-Handling Error-Free JS
    console.log("Unable to load about.js Completely! Error:", err.message, ". [ In detail:",  err, ". ]\nYou may face some performance limitations of this page.");
}
