// script.js
// Name: Tyler Pak
// Lab 1 - Task10 - How Long Until Graduation

// arrow function assigned to const getToday that returns a new Data object using default constructor which returns today's date
const getToday = () => {
    return new Date();
};

// calls getToday which returns today's date in Date type and assigns to new const today
const today = getToday();

// assigns string from hardcoded array to const weekday using today.getDay as the index
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const weekday = days[today.getDay()];

// Applies same strategy above to create and assign values to variables for year month and day
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const year = today.getFullYear();
const month = months[today.getMonth()];
const day = today.getDate();

// arrow function assigned to const getSuffix with one parameter that determines the right suffix for the day of the month
const getSuffix = (n) => {
    //checks condition if the value is 11th, 12th, 13th day by using includes method and modulus 100 and returns "th" if this is met
    if ([11, 12, 13].includes(n % 100)) return "th";
    //switch performs modulus 10 on n and if that equals 1, 2, 3 returns the corresponding string, otherwise returns "th"
    switch (n % 10) {
        case 1: return "st";
        case 2: return "nd";
        case 3: return "rd";
        default: return "th";
    }
};


// concats the year month and day variables with the string returned by getSuffix function and assigns to const variable formattedDate
const formattedDate = year + ", " + month +  " " + day + getSuffix(day);

// displays weekday and formatted date to console
console.log("Today is:", weekday);
console.log("Formatted date:", formattedDate);

// creates new Date object using non-default constructor passing in the date of graduation
// new Date object representing graduation date value is assigned to graduationDate
const graduationDate = new Date("2025-11-13");

// calculates difference between grad date and today and assigns to diff, value will be in milliseconds
const diff = graduationDate - today;
//converts diff to days by dividing by a constant and passing it to Math.ceil which rounds up to nearest day
const daysRemaining = Math.ceil(diff / (1000 * 60 * 60 * 24));

// displays the days remaining into console
console.log("And you have " + daysRemaining + " days left in this web design program until graduation.");