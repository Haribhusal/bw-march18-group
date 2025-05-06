const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits.keys();

let text = ''
for (let x of keys) {
    text += x + "\n";
}

console.log(text)

// let person = {
//     name: "Hari",
//     address: "Kathmandu",
//     email: "bhusalhari89@gmail.com"
// }
// let allKeys = ''

// for (let x of keys) {
//     allKeys += x
// }

// let person = {
//     name: "Hari",
//     address: "Kathmandu",
//     email: "bhusalhari89@gmail.com"
// }

// let allKeys = ''
// let keys = Object.keys(person)

// for (let x of keys) {
//     allKeys += x + '\n'
// }

// console.log(allKeys) // Output: "nameaddressemail"