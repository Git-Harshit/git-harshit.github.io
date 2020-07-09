try{
    
    // Feedback JS Here
    let myForm = document.forms["FeedbackForm"];

    // Triggering informational Modal at beginning (as page loads)
    // $(document).ready(function() {
    //     $('.modal').modal();
    // });

    // Our web app's Firebase configurations
    var firebaseConfig = {
        apiKey: "AIzaSyCrR1pYvn2MgbLTj__Kb8YKZNY8phidTd0",
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
            // delete dataObject["name"];
            // dataObject["name"] = "Not Provided!";
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

        // console.log("Updated Values:", dataObject);

        if (entry_counts===0) {
            console.log("Nothing Entered into database!");
            return;
        }

        firebase.database().ref("response").push().set(dataObject);
        
    }

    // Pushing form data on clicking submit button
    if (myForm) {
        myForm.addEventListener("submit", (event) => {
            event.preventDefault();
            firebaseDataLogger(myForm);
            alert("Thank You for your valuable feedback! It'll be looked into, for sure!");
        } );
    }

}

catch(err){
    // Error-Handling Error-Free JS
    console.log("Unable to load feedback.js Completely! Error:", err.message, ". [ In detail:",  err, ". ]\nYou may face some performance limitations of this page.");
}