// // Define a Car class
// class Car {
//     // Constructor to initialize properties
//     constructor(make, model, year) {
//         this.make = make; // Car make (e.g., Toyota)
//         this.model = model; // Car model (e.g., Camry)
//         this.year = year; // Year of manufacture
//     }

//     // Method to display car details
//     displayDetails() {
//         console.log(`Car: ${this.year} ${this.make} ${this.model}`);
//     }

//     // Method to start the car
//     start() {
//         console.log(`${this.make} ${this.model} is starting...`);
//     }

//     // Method to stop the car
//     stop() {
//         console.log(`${this.make} ${this.model} is stopping...`);
//     }
// }

// // Create an instance of the Car class
// const myCar = new Car('Toyota', 'Camry', 2020);

// // Use the methods of the Car class
// myCar.displayDetails(); // Output: Car: 2020 Toyota Camry
// myCar.start(); // Output: Toyota Camry is starting...
// myCar.stop(); // Output: Toyota Camry is stopping...



// Base class
class Shape {
    constructor(name) {
        this.name = name; // Name of the shape
    }

    // Method to display the shape's name
    display() {
        console.log(`Shape: ${this.name}`);
    }
}

// Derived class
class Rectangle extends Shape {
    constructor(width, height) {
        super('Rectangle'); // Call the constructor of the base class
        this.width = width; // Width of the rectangle
        this.height = height; // Height of the rectangle
    }

    // Method to calculate the area
    calculateArea() {
        return this.width * this.height;
    }

    // Overriding the display method
    display() {
        super.display(); // Call the display method of the base class
        console.log(`Width: ${this.width}, Height: ${this.height}`);
    }
}

// Create an instance of the Rectangle class
const myRectangle = new Rectangle(100, 40);

// Use the methods of the Rectangle class
myRectangle.display(); // Output: Shape: Rectangle, Width: 100, Height: 40
const area = myRectangle.calculateArea();
console.log(`Area: ${area}`); // Output: Area: 4000