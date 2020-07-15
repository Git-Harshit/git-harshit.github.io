try{
    
    // Feedback JS Here
    let myForm = document.forms["FeedbackForm"];

    // Triggering informational Modal at beginning (as page loads)
    // $(document).ready(function() {
    //     $('.modal').modal();
    // });

    // Our web app's Firebase configurations
    var firebaseConfig = {
        apiKey: atob("QUl6YVN5Q3JSMXBZdm4yTWdiTFRqX19LYjhZS1pOWThwaGlkVGQw"), // "AIzaSyCrR1pYvn2MgbLTj__Kb8YKZNY8phidTd0",
        authDomain: "data-for-me.firebaseapp.com",
        databaseURL: "https://data-for-me.firebaseio.com",
        projectId: "data-for-me",
        storageBucket: "data-for-me.appspot.com",
        messagingSenderId: "400644291146",
        appId: "1:400644291146:web:87a6064fe3f773e0cb44b3",
        measurementId: "G-STH2SQPP5M"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

    // Function for Logging data into Firebase Web-App
    function firebaseDataLogger(form) {
        // Checking for open firebase apps to prevent app from breaking
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }

        // Keeping a count of valid (non-empty) data entered
        let entry_counts = 0;

        // Data segregation (maybe encrypted in future)
        name_value = form.name.value;
        email_value = form.email.value;
        phone_value = form.phone.value;
        phone2_value = form.phone2.value;
        subject_value = form.subject.value;
        message_value = form.message.value;

        // Setting and Pushing Data
        let dataObject = {
            name: name_value,
            email: email_value,
            phone: phone_value,
            phone2: phone2_value,
            subject: subject_value,
            message: message_value,
        };

        // console.log("Initial Values:", dataObject);

        if (form.name.value != "") {
            entry_counts++;
        }
        else {
            dataObject.name = "Anonymous";
        }
        if (form.email.value != "") {
            entry_counts++;
        }
        else {
            delete dataObject["email"];
        }
        if (form.phone.value != "") {
            entry_counts++;
        }
        else {
            delete dataObject["phone"];
        }
        if (form.phone2.value != "") {
            entry_counts++;
        }
        else {
            delete dataObject["phone2"];
        }
        if (form.subject.value != "") {
            entry_counts++;
        }
        else {
            delete dataObject["subject"];
        }
        if (form.message.value != "") {
            entry_counts++;
        }
        else {
            delete dataObject["message"];
        }

        if (entry_counts===0) {
            console.log("Nothing Entered into database!");
            return 0;
        }

        // Loading non-empty Data into firebase
        firebase.database().ref("response").push().set(dataObject);
        
        // console.log("Updated Values:", dataObject);
        return 1;

    }

    // Pushing form data on clicking submit button
    if (myForm) {
        myForm.addEventListener("submit", (event) => {
            event.preventDefault();
            isLogged = firebaseDataLogger(myForm);
            if (isLogged) {
                alert("Thank You for your valuable feedback! It'll be looked into, for sure!");
                // location.reload();  // Not Refreshing the webpage to instantly clear field logs! [Idea Dropped, with reason: Instant Reload is preventing data submission to Google FireBase, atleast on slower to mid-speed networks]

                // Clearing the individual fields after form submission
                myForm.name.value     = "" ;
                myForm.email.value    = "" ;
                myForm.phone.value    = "" ;
                myForm.phone2.value   = "" ;
                myForm.subject.value  = "" ;
                myForm.message.value  = "" ;
        
            }
        } );
    }

}

catch(err){
    // Error-Handling Error-Free JS
    console.log("Unable to load feedback.js Completely! Error:", err.message, ". [ In detail:",  err, ". ]\nYou may face some performance limitations of this page.");
}