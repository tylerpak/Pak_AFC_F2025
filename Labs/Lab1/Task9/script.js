// script.js
// Name: Tyler Pak
// Lab 1 - Task9 - Weekday Detector

// arrow function with no parameters assigned to new const variable getWeekday
const getWeekday = () => {
    // creates new Date object with default constructor and assigns to new const variable today
    // default Date constructor creates Date object with current date/time
    const today = new Date();

    // calls getDay function on today which returns day of the week in Number type
    const dayNumber = today.getDay();

    // assigns hardcoded array of strings to new variable const days. Array is the days of the week
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    // returns string from array at index retrieved from calling today.getDay(). This will return the day of the week in string
    return days[dayNumber];
};

// displays day of the week to console by calling arrow function
console.log("Today is:", getWeekday());