function isPalindrome(word) {
    if(arguments.length != 1) {
        throw new Error("Invalid number of parameters. This function can only accept 1")
    }
    if(!(typeof word === "string")) {
        throw new Error("Invalid parameter type. This function only accepts Strings")
    }
    word = word.replace(/[^a-zA-Z0-9]/g, "");
    word = word.toLowerCase();
    let flipped = word.split("").reverse().join("");
    return flipped === word;
}



module.exports = isPalindrome;