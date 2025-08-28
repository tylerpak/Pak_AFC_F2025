// script.js
// Name: Tyler Pak
// Lab1 - Task8 - Shopping List Operations

// initialize a variable called shoppintList and assign it a hardcoded array of strings
let shoppingList = ["eggs", "butter", "flour"];

// arrow function that takes two parameters and assigns it to a new const variable called modifyItem
const modifyItem = (list, newItem) => {
    // adds the parameter new item to the parameter list by call Array.push function. Push adds to the end of the array
    list.push(newItem);

    // displays the updated list to console
    console.log("Updated shopping list:", list);
};

// calls prompt to ask user for input, returned user input is assigned to new const variable userItem as a string
const userItem = prompt("Enter a new item to add to the shopping list:");

// ! is the NOT operator so this condition inverses the truthy or falsey value meaning if userItem is not an empty string, this will pass
if (!userItem) {
    //displays error message if above condition passes
    console.log("Error: You must enter a valid item.");
} else {
    // if the condition doesnt pass, call arrow function above and pass the shoppingList array and the userItem as parameters
    modifyItem(shoppingList, userItem);
}