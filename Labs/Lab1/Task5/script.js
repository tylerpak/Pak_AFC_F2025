// script.js.js
// Name: Tyler Pak
// Lab1 - Task5 - Temperature Classifier

// function that takes one parameter called celsius
function classifyTemperature(celsius) {
    // applies static formula to convert parameter to "fahrenheit" and assign to new const variable fahrenheit
    const fahrenheit = (celsius * (9 / 5)) + 32;

    // checks three conditions and returns a string based on those conditions. Returns "Chilly" if none of the conditions apply
    if (fahrenheit > 100) {
        return "Hot";
    } else if (fahrenheit > 80) {
        return "Warm";
    } else if (fahrenheit < 40) {
        return "Cold";
    } else {
        return "Chilly";
    }
}

// calls prompt to ask user to enter a temp in celsius and returns the user input to new const variable called input
const input = prompt("Enter temperature in Celsius:");

// calls Number constructor, passing user input. Constructor returns value in Number type
// value is assigned to new const variable called celsius
const celsius = Number(input);

// checks condition if celsius is NaN
// Number.isNaN takes celsius as a parameter and returns true if its value is NaN and false if its is not NaN or not a Number type
if (Number.isNaN(celsius)) {
    //prints error message to console if above condition is met
    console.log("Error: Please enter a valid number.");
} else {
    // if the condition above is not met, calls defined function above passing in celsius as parameter
    // returned value from function is passed into new const variable called classification
    const classification = classifyTemperature(celsius);

    // displays classification in console
    console.log("The temperature is:", classification);
}

//This code is not adequate for a good user experience. Only handles user error once and does not give user opportunity to re-enter an input. User would have to refresh the page