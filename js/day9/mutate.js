//Create an Object
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
}

// Try to create a copy
const x = person;

// This will change age in person:
x.age = 10;

console.log(x.firstName)