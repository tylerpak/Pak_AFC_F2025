// script.js.js
// Name: Tyler Pak
// Lab1 - Task3 - Favorite Color Selector

// initializes a variable and assign it to a hardcoded array of strings with length of 3
let colors = ["red", "blue", "green"];

// function that takes in one parameter
function addColor(colorArray) {
    // calls prompt function asking user to input a color to add
    // returns user input as a string and assigns it to a newly initialized const variable called newColor
    const newColor = prompt("Enter a color to add:");

    // calls the Array.unshift function on the passed parameter. This function takes in the string user input as a parameter.
    // unshift function takes parameter and adds it to the beginning of the array
    colorArray.unshift(newColor);

    // displays the colors in the colorArray parameter in console
    console.log("Updated colors:", colorArray);
}

// calls the above function, passing in the array colors that was initialized in the beginning of the file
addColor(colors);