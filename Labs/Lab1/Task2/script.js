// script.js.js
// Name: Tyler Pak
// Lab1 - Task 2 - Simple Interest Calculator

// function that takes three parameters
function calculateSimpleInterest(principal, rate, time) {
    // Takes all three parameters and multiplies them together, then divides by 100 and returns the value
    return (principal * rate * time) / 100;
}


// prompt function asks the user for the principal amount, and returns the user input in type string
// Number constructor is passed the return value of the prompt function which is a string. Constructor takes that string and returns the value in Number type if possible
// initializes new const variable and assigns it to the output of a Number constructor
// so the variable principle has a Number type value that is the user input
const principal = Number(prompt("Enter the principal amount:"));

// applies the same operations as the previous step except this time asking the user for the rate of interest
const rate = Number(prompt("Enter the rate of interest:"));

// applies the same operations as the previous step except this time asking the user for the time in years
const time = Number(prompt("Enter the time in years:"));

// calls the calculateSimpleInterest function that is at the beginning of the file and assigns the return value to a newly initialized const variable called "interest"
const interest = calculateSimpleInterest(principal, rate, time);

// displays a string and the value of the variable "interest" as the
console.log("Your simple interest is:", interest);