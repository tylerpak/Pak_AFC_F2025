console.log("Hello World");
let car = {
    make : "Subaru",
    cost : 10009.00,
    color : "Blue",
    print : function() {
        return "Make: " + this.make + " Price: " + this.cost + " Color: " + this.color;
    }
}

console.log(car.print());

let input = "24";
let parsedNumber = Number(input)
console.log(typeof input)
console.log(typeof parsedNumber)
let parsedIntNumber = Number.parseInt(input)
console.log(typeof parsedIntNumber)

let dog = "34dog12"
let newNumber = Number.parseInt(dog)
console.log(newNumber)
console.log(typeof  newNumber)

newNumber = Number(dog)
console.log(newNumber)

//Boolean values
// falsey = 0, "", false, undefined, null



