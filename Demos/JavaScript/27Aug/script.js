let student = {
    firstName : String,
    lastName : String
}

function Student(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

function returnFullName(student) {
    return student.firstName + " " + student.lastName;
}

let s1 = new Student("John", "Doe");

console.log(returnFullName(s1))


let array1 = ["apple", "banana","Apple", "Orange", "aPricot", "orange"];

let arraySort = (array) => {
    if(!Array.isArray(array)) {
        return "Passed value is not an array"
    }
    if(array.length === 0) {
        return "Array is empty"
    }
    array.sort((a, b) => {
        let lowA = a.toLowerCase();
        let lowB = b.toLowerCase();
        if(lowA < lowB) {
            return -1;
        }
        if(lowA > lowB) {
            return 1;
        }
        return 0;
    });
    return array;
}

console.log(arraySort(5));