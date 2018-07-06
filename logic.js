var config = {
    apiKey: "AIzaSyDOSVQEARRZaoI1SW1eA20srt7feA2zu5E",
    authDomain: "fir-homework-31e03.firebaseapp.com",
    databaseURL: "https://fir-homework-31e03.firebaseio.com",
    projectId: "fir-homework-31e03",
    storageBucket: "fir-homework-31e03.appspot.com",
    messagingSenderId: "387102046778"
};
firebase.initializeApp(config);

var database = firebase.database();
var currentTime = moment();


$(document).ready(function() {
    console.log( "ready!" );
    
});

$("#submitButton").on("click", function(event){
    event.preventDefault();
    var flightPath = $("#flightPath").val().trim();
    var whereGoing = $("#whereGoing").val().trim();
    var startTime = $("#startTime").val().trim();
    var howOften = $("#howOften").val().trim();


    console.log(flightPath)
    console.log(whereGoing)
    console.log(startTime)
    console.log(howOften)

    database.ref().push({

        flightPath: flightPath,
        whereGoing: whereGoing,
        startTime: startTime,
        howOften: howOften,
        dateAdded: firebase.database.ServerValue.TIMESTAMP

    })

})

database.ref().on("child_added", function(childSnapshot){

    console.log(childSnapshot.val().flightPath);
    console.log(childSnapshot.val().whereGoing);
    console.log(childSnapshot.val().startTime);
    console.log(childSnapshot.val().howOften);
    
}, function(errorOject){
    console.log("Error:" + errorOject.code);

})





/*
// Assumptions
var tFrequency = 3;

// Time is 3:30 AM
var firstTime = "03:30";

// First Time (pushed back 1 year to make sure it comes before current time)
var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
console.log(firstTimeConverted);

// Current Time
var currentTime = moment();
console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

// Difference between the times
var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
console.log("DIFFERENCE IN TIME: " + diffTime);

// Time apart (remainder)
var tRemainder = diffTime % tFrequency;
console.log(tRemainder);

// Minute Until Train
var tMinutesTillTrain = tFrequency - tRemainder;
console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

// Next Train
var nextTrain = moment().add(tMinutesTillTrain, "minutes");
console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));
*/