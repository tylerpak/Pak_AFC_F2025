// script.js
// Name: Tyler Pak
// Lab1 - Task7 - Grade Classification

// creates arrow function with one parameter called grade and assigns it to new const variable classifyGrade
const classifyGrade = (grade) =>
    // Checks four conditions using only ternary operators
    // essentially if grade is greater than or equal to 90 return "A", else if greater than or equal to 80 return "B" etc.
    // if grade satisfies none of the conditions return "F"
    (grade >= 90) ? "A" :
        (grade >= 80) ? "B" :
            (grade >= 70) ? "C" :
                (grade >= 60) ? "D" :
                    "F";

// calls prompt to ask user to enter a grade between 0-100 and assigns user input to new const variable input
const input = prompt("Enter a grade (0-100):");

// calls Number constructor and passes user input as parameter. returns parameter as Number type
// assigns new const variable grade as the returned value from constructor
const grade = Number(input);

// checks condition if grade is NaN
if (Number.isNaN(grade)) {
    //displays error message if condition is met
    console.log("Error: Please enter a valid number.");
} else {
    // if condition is not met, calls arrow function above and passes grade.
    // assigns the returned value from arrow function to new const variable classification
    const classification = classifyGrade(grade);
    // displays classification value to console
    console.log("The grade classification is:", classification);
}