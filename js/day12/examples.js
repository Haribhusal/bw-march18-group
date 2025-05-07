
// console.log(myCollegeName)

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     // Method
//     greet() {
//         console.log(`Hello, my name is ${this.name}`);
//     }
// }

// const user = new Person("Ishan", 25);
// user.greet(); // Hello, my name is Ishan




// class Circle {
//     constructor(radius) {
//         this._radius = radius;
//     }

//     get radius() {
//         return this._radius;
//     }

//     set radius(value) {
//         if (value < 0) throw new Error("Radius must be positive");
//         this._radius = value;
//     }
// }

// const c = new Circle(5);

// // console.log(c.radius); // 5

// c.radius = 10;







// console.log(c.radius); // 10


// let fruits = ['Apple', "Banana", "Orange"]
// console.log(fruits[0]);

// fruits.push('Grapes')

// console.log(fruits[3])




// class MathUtil {
//     static square(n) {
//         return n * n;
//     }
// }

// let myUtil = new MathUtil();

// console.log(MathUtil.square(4)); // 16

// console.log(myUtil.square(9))


// class Animal {
//     constructor(name) {
//         this.name = name;
//     }

//     speak() {
//         console.log(`${this.name} makes a noise`);
//     }
// }

// class Dog extends Animal {
//     constructor(name, breed) {
//         super(name); // Call parent constructor


//         this.breed = breed;
//     }

//     speak() {
//         console.log(`${this.name} barks`);
//     }
// }

// const d = new Dog("Rex", "German Shepherd");
// d.speak(); // Rex barks



// class Counter {
//     #count = 0;

//     increment() {
//         this.#count++;
//         console.log(this.#count);
//     }
// }

// const c = new Counter();
// c.increment(); // 1



// console.log(c.#count);
// ❌ SyntaxError: Private field '#count' must be declared



// let person1 = new Person("Ram")

// class Person {
//     constructor(name) {
//         this.name = name;
//     }
// }


// console.log(person1.name)

// it is not hoisted.


// let Logger = (Base) =>
//     class extends Base {
//         log(msg) {
//             console.log("Log:", msg);
//         }
//     };

// class Product { }
// class LoggedProduct extends Logger(Product) { }

// const p = new LoggedProduct();
// p.log("Product created"); // Log: Product created


// setTimeout(() => { console.log("I will be printed after 5 seconds") }, 5000)


// class Button {
//     constructor(message) {
//         this.label = message;
//     }

//     click = () => {
//         console.log(this.label);
//     };
// }

// const b = new Button("Print this message");
// setTimeout(b.click, 3000); // Click Me (arrow function binds `this`)

