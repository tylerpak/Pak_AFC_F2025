// script.js
// Name: Tyler Pak
// Lab1 - Task6 - Student Array Operations

// creates array of 3 objects and assigns the array to varaible students
// the objects have two properties each, one string name, and one number age
let students = [
    { name: "Alice", age: 20 },
    { name: "Bob", age: 22 },
    { name: "Charlie", age: 18 }
];

//assigns arrow function to new const variable updateStudentAge, passing one parameter called array
const updateStudentAge = (array) => {
    // calls prompt function and asks user to provide students name to update
    // returned user input is assigned to new variable called studentName
    let studentName = prompt("Enter the student's name to update:");

    // calls "find" method on the passed parameter array. find uses an iterator to iterate array and return the first value that matches the condition that is passed as a parameter
    // condition passed checks to see if the user input matches the "name" property of the object that the iterator is on
    // the first object that satisfies the condition in array is assigned to a new variable called student
    let student = array.find(s => s.name.toLowerCase() === studentName.toLowerCase());

    //checks condition inverse of student meaning if student is false, null or undefined this condition will pass
    // Array.find returns undefined if it cannot find an object that satisfies the passed condition so this if statement will execute if a student cannot be found whose name matches user input
    if (!student) {
        //displays error message to console and returns function
        console.log("Error: Student not found.");
        return;
    }

    // calls prompt and asks user to input a new age and returns user input as string
    // user input is passed as parameter to Number constructor that returns user input as Number type
    // returned value is assigned to new variable called newAge
    let newAge = Number(prompt("Enter the new age:"));

    // checks condition, calling isNaN, checking to see if newAge is value NaN
    if (Number.isNaN(newAge)) {
        //if newAge is NaN, displays error message in console and returns function
        console.log("Error: Age must be a number.");
        return;
    }

    // assigns age property of the student found to newAge value
    student.age = newAge;

    // displays updated array to console
    console.log("Updated students:", array);
};

// call to above defined function passing hardcoded students array
updateStudentAge(students);