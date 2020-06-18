try{
    // Declaring some of the variables
    let top_portion = document.querySelector("#top_section");
    let back_to_top = document.querySelector(".back-to-top");

    // Clicking Top Portion scrolls to advance to the next section
    top_portion.onclick = ()=>{
        // window.scroll(0, window.innerHeight);
        window.scroll(0, top_portion.offsetHeight); 
    }

    // Setting a Read More option within "About Me" section
    let Read_More_Toggle = document.querySelector(".expand-content");
    Read_More_Toggle.style.cssText = "";
    Read_More_Toggle.onclick = () => {
        if (Read_More_Toggle.style.cssText === "display:none;"){
            Read_More_Toggle.style.cssText = "";
        }
        else {
            Read_More_Toggle.style.cssText = "display:none;";
        }
    }

    // Handling window onscroll events (using jQuery)
    $(window).scroll(function(){
        // Back-to-Top option to be kept hidden when at the top of page
        if (window.outerHeight > window.outerWidth){
            $checkpoint_division = 2;
        }
        else{
            $checkpoint_division = 3;
        }
        $(back_to_top).toggleClass("d-none", $(this).scrollTop() < $(top_portion).height()/$checkpoint_division);
        // Clearing Back-to-Top style attribute when window is scroled to top
        if ($(document).scrollTop() < $(top_portion).height()){
            $(back_to_top).children("i.fa-space-shuttle").attr("style", "");
        }
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
            secondaryPlaceholder: "+ Type to add more skills",
            autoCompleteOptions: {
                data: {
                    "Programming":null,
                    "Developement":null,
                    'Web Development':null,
                    'Python Programming':null,
                    'C Programming':null, 'C++ Programming':null,
                    'HTML':null, 'CSS':null, 'JavaScript':null, 
                }
            },
        }
        let instances = M.Chips.init(elems, options);

    });

    // Adding Quotation Marks for Quotes in Carousel Slider 
    let _quotes = document.querySelectorAll(".self-quotes .quote-view p");  // Selecting all p tags in .quote-view class elements of .self-quotes class element
    for (let quoteIndex=0; quoteIndex<_quotes.length; quoteIndex++){
        _quotes[quoteIndex].innerText = "\"" + ((_quotes[quoteIndex].innerText[0]==" ")?"":" ") + _quotes[quoteIndex].innerText + ((_quotes[quoteIndex].innerText[_quotes[quoteIndex].innerText.length-1]==" ")?"":" ") + "\""
    }

	// Initialising Bootstrap Tooltips (using jQuery)
	$(function () {
		$('[data-toggle="tooltip"]').tooltip();
	});

	// Setting back_to_top space-shuttles animation with CSS and JS
	back_to_top.onclick = ()=>{
        back_to_top.querySelector("i.fa-space-shuttle").style.animation="launch-and-settle .75s";
        window.scrollTo(0, 0);
		// setTimeout(clearHash, 1000);
    };
    
}

catch(err){
    // Error-Handling Error-Free JS
    console.log("Unable to load index-script.js completely! Error:", err.message, ". [ In detail:",  err, ". ]\nYou may face some performance limitations of this page.");
}