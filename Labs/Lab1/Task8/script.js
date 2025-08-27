// script.js
// Name: Tyler Pak
// Lab1 - Task8 - Shopping List Operations

// Step 1: Hardcode an array for the shopping list
let shoppingList = ["eggs", "butter", "flour"];

// Step 2: Create a fat arrow function named modifyItem
const modifyItem = (list, newItem) => {
    // Step 3: Add the new item to the end of the array
    list.push(newItem);

    // Step 4: Log the updated array to the console
    console.log("Updated shopping list:", list);
};

// Step 5: Prompt the user to input a new item
const userItem = prompt("Enter a new item to add to the shopping list:");

// Step 6: Validate input (check for empty string)
if (!userItem) {
    console.log("Error: You must enter a valid item.");
} else {
    // Step 7: Call the function with the shopping list and user input
    modifyItem(shoppingList, userItem);
}