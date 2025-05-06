// Traditional Function Syntax

// function addNumbers(a, b) {
//     let sum = a + b
//     return sum
// }

// function getSquare(num) {
//     return num * num;
// }

// console.log(addNumbers(10, 35))
// console.log(getSquare(10))

// Arrow function syntax

// const addNumbers = (a, b) => {
//     let sum = a + b;
//     return sum
// }


// const addNumbers1 = (a, b) => { let sum = a + b; return sum }

// const squareNum = num => num * num;
// console.log(squareNum(9))


// const person = {
//     name: "Hari",
//     sayHi: function () {
//         console.log("Hello" + this.name)
//     },
//     sayNamaste: () => {
//         console.log('Namaste' + this.name)
//     }
// }
// person.sayNamaste();


// function addNumbers(p, q) {
//     console.log(arguments)
//     return p + q
// }
// addNumbers(30, 50)


// const addNumbers = (p, q) => {
//     console.log(arguments)
//     return p + q
// }
// addNumbers(30, 50)


// const Arrow = () => { };
// // new Arrow(); ❌ TypeError

// function Regular() { }
// new Regular(); // ✅ Works


// console.log(() => { }.prototype); // undefined
// console.log(function () { }.prototype); // object


// const add = (a, b) => a + b;
// function addTraditional(a, b) {
//     return a + b;
// }


// const nums = [1, 2, 3];
// const squared = nums.map(n => n * n);


// console.log(squared)




// function outer() {
//     let count = 0;

//     function inner() {
//         count++;
//         console.log(count);
//     }

//     return inner;
// }

// const counter = outer(); // outer() runs, returns inner()
// counter(); // 1
// counter(); // 2
// counter(); // 3



// function createUser(name) {
//     let score = 0;

//     return {
//         getName: () => name,
//         increaseScore: () => score++,
//         getScore: () => score,
//     };
// }

// const user1 = createUser("Ishan");
// user1.increaseScore();
// user1.increaseScore();
// console.log(user1.getName()); // "Ishan"
// console.log(user1.getScore()); // 2

