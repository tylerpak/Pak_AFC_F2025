// script.js.js
// Name: Tyler Pak
// Lab1 - Task4 - Event Countdown with Date Object

// function that takes in one parameter called eventDate
function calculateDaysUntil(eventDate) {
    // constructs new Date object and assigns object to a newly initialized const variable called "Today"
    //Date() calls the default constructor for date which returns Date type object that represents the current date at runtime
    const today = new Date();

    // constructs new Date object using a non-default constructor, passing in eventDate as a parameter
    // assigns this new Date object to a newly initialized cosnt variable called event
    const event = new Date(eventDate);

    // assigns the difference between the two date objects from above and assigns it to a newly initialized const variable called diff
    // this value equates to the difference between the two date objects in milliseconds
    const diff = event - today;

    // divides diff variable by a static product of 1000, 60, 60, 24 which equates to the diff in days
    // this value is passed as a parameter into the Math.ceil function which takes the parameter and rounds the value up to the nearest integer, essentially getting rid of decimals
    // the returned value from the Math.ceil call is assigned to a new const variable called days
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));

    //function returns the value from the days variable
    return days;
}

// calls prompt function that asks the user the passed string and returns input in string type
// assigns the returned string from prompt to a new variable called eventDate
let eventDate = prompt("Enter event date (YYYY-MM-DD):");

// initializes const variable dateFormat and assigns a regex value defined below
const dateFormat = /^\d{4}-\d{2}-\d{2}$/;

//while loop, the condition of the while loop is the inverse of the regex test function
//this test function returns true if the passed parameter contains a match of the regex. In this cass we are passing eventDate which is the string user input
//essentially if the user's input does not contain the specified regex (date format), then execute the following loop
while (!dateFormat.test(eventDate)) {
    //essentially asks the user again to reinput in the correct format
    eventDate = prompt("Invalid format. Please enter date as YYYY-MM-DD:");
}
//by the end of this loop, eventDate will have a value in the correct format if it didn't already

// calls the function defined above and assigns the returned value to a new const variable daysRemaining
const daysRemaining = calculateDaysUntil(eventDate);

// displays the value of daysRemaining to console
console.log("Days until the event:", daysRemaining);