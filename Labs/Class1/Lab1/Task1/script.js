// script.js.js
// Name: Tyler Pak
// Lab1 - Task 1 - Dynamic Age Calculator

// Function that calculates age by subtracting parameter from current year
function calculateAge(year) {
    // initializes const variable and assigns it to take the value of a new Date object calling method getFullYear
    // getFullYear returns the current year in Number type
    const currentYear = new Date().getFullYear();

    // Returns the difference between current year and the passed parameter year which should be the user's age
    return currentYear - year;
}

// initializes const variable and assigns it to the value "prompt" returns
// prompt takes in a message to the user as a parameter and returns the user's response
const input = prompt("Enter your birth year (e.g., 2004):");

// initializes const variable and assigns it to the value that "Number()" returns
// number is a constructor and in this case takes a string, casts the string to a Number and returns that Number type
const birthYear = Number(input);

// Checks to see if the input is null, as in the user inputted no value, or if the user input is assessed as "NaN"
// Number.isNaN is a function in the Number class that takes in a value and determines if its "NaN". It returns false if the parameter is not "Number" type or if the value is anything other than NaN
if (input === null || Number.isNaN(birthYear)) {
    // Displays error message to user if the above condition is met
    console.log("No valid year provided.");
} else {
    // Otherwise if the above condition is met, call function "calculateAge" passing the user input as a parameter and assigns the return value to a new const variable called "age"
    const age = calculateAge(birthYear);

    // Displays the calculated age and a prefix string to the console
    console.log("Your age is:", age);
}