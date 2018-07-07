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

$(document).ready(function() {
    console.log( "ready!" );
    
});

$("#submitButton").on("click", function(event){
    event.preventDefault();
    var flightPath = $("#flightPath").val().trim();
    var whereGoing = $("#whereGoing").val().trim();
    var startTime = moment($("#startTime").val().trim(), "HH:mm").subtract(1, "year").format("X");
    var howOften = $("#howOften").val().trim();


    console.log(startTime)

    database.ref().push({

        flightPath: flightPath,
        whereGoing: whereGoing,
        startTime: startTime,
        howOften: howOften,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    });
});

database.ref().on("child_added", function(childSnapshot){
    var sv = childSnapshot.val();

    $("#flightPath").val("");
    $("#whereGoing").val("");
    $("#startTime").val("");
    $("#howOften").val("");

    
    console.log("XXXXXXXXXXXXXXXXXXX")
    console.log(sv)

    var tRemainder = moment().diff(moment.unix(sv.startTime), "minutes") % sv.howOften;
    var tMinutesTillTrain = sv.howOften - tRemainder;
    var nextTrain = moment().add(tMinutesTillTrain, "minutes").format("hh:mm A");

    var newPlaneRow = $("<tr>")
    var tdFlightPath = $("<td>").text(sv.flightPath);
    var tdWhereGoing = $("<td>").text(sv.whereGoing);
    var tdHowOften = $("<td>").text(sv.howOften);
    var tdFrequency = $("<td>").text(nextTrain);
    var tdTimeAway = $("<td>").text(tMinutesTillTrain);


    newPlaneRow.append(tdFlightPath);
    newPlaneRow.append(tdWhereGoing);
    newPlaneRow.append(tdHowOften);
    newPlaneRow.append(tdFrequency);
    newPlaneRow.append(tdTimeAway);
    console.log(newPlaneRow);
    $("#tableBodyData").prepend(newPlaneRow);

    
    /// DEALS WITH TIME

    

    console.log(nextTrain) 
    console.log(tMinutesTillTrain)
    console.log("^^ Time to arrival and Time of Arrival ^^^")
     
  
}, function(errorOject){
    console.log("Error:" + errorOject.code);
});

    

/*

 var tRemainder = moment().diff(moment.unix(startTime), "minutes") % howOften;
    console.log(tRemainder);
  
    // Minute Until Train
    var minAway = howOften - tRemainder;
    console.log("MINUTES TILL TRAIN: " + minAway);
  
    // Next Train
    var nextTrain = moment().add(minAway, "minutes").format("hh:mm A");
    console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));





/*
// Assumptions
var thowOften = 3;

// Time is 3:30 AM
var startTime = "03:30";

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
var tRemainder = diffTime % thowOften;
console.log(tRemainder);

// Minute Until Train
var tMinutesTillTrain = thowOften - tRemainder;
console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

// Next Train
var nextTrain = moment().add(tMinutesTillTrain, "minutes");
console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));
*/


/*

startTime = moment(startTime, "HH:mm").format("hh:mm A");
    var convertedYear = moment(startTime, "hh:mm A").subtract(1, "year");
    var currentTime = moment().format("hh:mm A");
    var diffTime = moment().diff(moment(convertedYear), "minutes");
    var remainder = diffTime % howOften;
    console.log(startTime);
    console.log(convertedYear);
    if (currentTime > startTime) {
        minAway = howOften - remainder;
        nextArrival = moment().add(minAway, "minutes").format("hh:mm A");
        console.log("test2");
    } else if (currentTime < startTime) {
        console.log("test");
        minAway = howOften - remainder;
        nextArrival = moment(startTime).subtract(minAway, "minutes").format("hh:mm A");
        
        
    console.log(nextArrival);
    
    } else {
        nextArrival = currentTime + howOften;
        console.log("test3");
    }

    */




    /*  modded

    var startingTime = sv.startTime
    var convertedTime = moment(startingTime, "hh:mm A").subtract(1, "year");
    var currentTime = moment().format("hh:mm A");
    var diffTime = moment().diff(moment(convertedTime), "minutes");
    var remainder = diffTime % howOften;
    if (currentTime > startingTime) {
        var minAway = howOften - remainder;
        var nextArrival = moment().add(minAway, "minutes").format("hh:mm A");
    } else if (currentTime < startTime) {
        minAway = howOften - remainder;
        nextArrival = moment(startTime).subtract(minAway, "minutes").format("hh:mm A");
    } else {
        nextArrival = currentTime + howOften;
    }
     */