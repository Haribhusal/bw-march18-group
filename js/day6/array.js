
// let person1 = "Samir";
// let person2 = "Kelsang"
// let person3 = "Tara"


// let members = [person1, person2, person3]
// let students = ["Samir", "Kelsang", "Tara"]
// let students = ["Samir", "Kelsang", "Tara", "Ramesh", "Shyam", "Hari", "Sita", "Samir", "Kelsang", "Tara", "Ramesh", "Shyam", "Hari", "Sita", "Mango"]

// One dimensional array
// let students = ["Samir", "Kelsang", "Tara", true, 12, { name: "ramesh" }, [1, 2, 3]]
// Multi Dimensional Array

// console.log(students[0])
// let count = students.length / 2
// let roundedPosition = Math.floor(count)
// here Math is math object available in javascript.
// Math.ceil returns 9 for 8.5
// Math.floor returns 8 for 8.5
// console.log(roundedPosition)
// console.log(count)
// console.log(students[roundedPosition])

// console.log(students.length)
// here 0 is index


// Alternative idea to create array

// let persons = new Array();
// persons.push('Samir');
// persons.push('Ram');
// persons.push("Shyam")

// console.log('persons', persons)

// let students = new Array('Ram', "Shyam", "Hari")
// let students2 = ['Ram', 'Shyam', "Hari"]
// console.log(students)

// let accountDepartment = ['Ram', "Shyam", "Hari"]
// let adminDepartment = ['Ramesh', "Prakash"]
// let itDepartment = ['Karan']

// // let staffs = [accountDepartment, adminDepartment, itDepartment]
// let staffs = [['Ram', "Shyam", "Hari"], ['Ramesh', "Prakash"], ['Karan']]
// console.log(staffs[2][0])
// staffs[2][0] = "Shiva"

// console.log(typeof staffs)

// console.log(staffs[2][0])
// let stringed = staffs.toString();

// console.log(typeof stringed)
// console.log(stringed)



function addTwoNumbers(a, b) {
    return a + b
}
function multiplyNumbers(a, b) {
    return a * b
}
function squareIt(a) {
    return a * a
}

let calculationOne = addTwoNumbers(2, 3);
let calculationTwo = multiplyNumbers(3, 5)
let calculationThree = squareIt(6)

let calculations = [addTwoNumbers(2, 3), multiplyNumbers(3, 5), squareIt(6), false, 1, { name: "sa" }]

console.log(calculations[2])