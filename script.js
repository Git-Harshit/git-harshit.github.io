try{
    // Declaring the variables
    let top_portion = document.querySelector("#top_section");

    top_portion.onclick = ()=>{
        // window.scroll(0, window.innerHeight);
        window.scroll(0, top_portion.offsetHeight); 
    }

    // M.AutoInit();        // Initialising all materialize css elements

    // Materialize CSS Sidenav initialiser (for small screens)
    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems, {});
    });

    // Materialize CSS Chips (used for Skills Tags) Initialiser
        // using Vanilla JS
        document.addEventListener('DOMContentLoaded', function() {
            let elems = document.querySelectorAll('.chips');
            let options = {
                limit:Infinity,
                data: [{
                    tag: 'Web Development',}, { tag: 'Python Programming',}, 
                    { tag: 'C Programming',}, { tag: 'C++ Programming',}, 
                    { tag: 'HTML',}, { tag: 'CSS',}, { tag: 'JavaScript',}, 
                    { tag: 'Bootstrap',}, { tag: 'Materialize',}, { tag: 'React',}, 
                    { tag: 'Regular Expressions (RegEx)',}, 
                    { tag: 'GitHub',}, { tag: 'Git',}, 
                    { tag: 'NumPy',}, { tag: 'Pandas',}, { tag: 'Matplotlib',},
                    //{ tag: 'Any Skill',}, 
                    { tag: 'MATLAB',}, { tag: "MS Office"
                    }],
                placeholder: 'Enter a skill',
                secondaryPlaceholder: '+ Type in to add more skills',
            }
            let instances = M.Chips.init(elems, options);
        });

      // using jQuery
    // $('.chips').chips({
    //     limit:Infinity,
    //     data: [{
    //         tag: 'Web Development',}, { tag: 'C Programming',}, { tag: 'Python Programming',
    //       }],
    //     placeholder: 'Enter a skill',
    //     secondaryPlaceholder: '+ Type in to add more skills',
    // });
    // $('.chips').chips();
}

catch(err){
    // Error-Handling Error-Free JS
    console.log("Unable to load Esummit.js Completely! Error:", err.message, ". [ In detail:",  err, ". ]\nYou may face some performance limitations of this page.");
}