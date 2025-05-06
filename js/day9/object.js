
// let firstName = "Hari"
// let age = 24
// let isEmployed = true
// let hobbies = ['Paiting', "Coding", "Designing"]


// let firstName2 = "Rakesh"
// let age2 = 34
// let isEmployed2 = false
// let hobbies2 = ["Playing"]

// let collegeName = 'ABC college'
// collegeName = "CDE college"

// let user = {
//     name: "Hari",
//     age: 37,
//     fullName: "Hari Bhusal",
//     isEmployed: true,
//     hobbies: ['Paiting', "Coding", "Designing"]
// }

// user.age = 26
// console.log(user.hobbies)



// console.log(user.fullName)
// Dot notation

// console.log(user['fullName'])


// let users = ['Ram', "Shyam"]
// console.log(users[0])



const car = {
    brand: "Suzuki",
    power: 1000,
    startPosition: 0,

    moveCar: function (positon) {
        // this.startPosition += positon;
        this.startPosition = this.startPosition + positon
    },

    start: function () {
        console.log("The car has started")
    },
    getCarInfo: function () {
        // console.log("The brand of car is: " + this.brand)
        console.log(`The brand of car is ${this.brand}`)
        // here this referred to current object
    },
    // here start is a Method.

    brake: function () {
        console.log("The car has applied brake")
    }

    // here break is also a Method
}
// console.log(car.start())
// car.brake();
// car.start();

// car.getCarInfo();

// console.log(car.startPosition)

car.moveCar(500);
car.moveCar(100);
car.moveCar(50);
// car.moveCar(500);


console.log(car.startPosition)
