// let fruits = ["Mango", "Apple", "Orange", "Banana", "Kiwi"]
// fruits.sort();
// let another = fruits.toString();
// console.log(typeof another)


let numbers = [99, 111, 34, 232, 35, 90, 12, 41, 73, 88]

// Find the biggest number in given array. 

numbers.sort(function (a, b) { return a - b })
console.log(numbers[numbers.length - 1])
console.log(numbers[0])

// numbers.sort();
// console.log(numbers.sort())
// console.log(numbers[0])

// function sortItems(a, b) {
//     return a - b
// }

// 99 left side 111 right
// 99 - 34 = +ve =>  34 left, 99 right
// 34 - 234 => -ve => 34 left, 234 right
// 34 - 35 => -ve => 34 left, 35 right
// 34 - 90 => -ve => 34 on left , 90 on right
// 34 - 12 => +ve => 12 on left , 34 on right
// 12- 41 => -ve => 12 on left, 41 on right

// numbers.sort(sortItems)
// console.log(numbers)