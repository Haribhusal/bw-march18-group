

// Function



function addTwoNumbers(parameter1, parameter2, parameter3) {
    // we call parameters
    let c = parameter1 + parameter2 - parameter3
    // console.log(c)
    return null;
}

let result1 = addTwoNumbers(10, 20, 30)
let result2 = addTwoNumbers(23, 32, 21)

// console.log(result1)
// console.log(result2)

// console.log(result2)

// addTwoNumbers(11, 22)
// addTwoNumbers(22, 52)
// addTwoNumbers(12213, 54312)
// here we call arguments for 55&45


// we call or invoke the function

// calculate the simple interest 
// let p = 2000, t = 2, r = 0.2

let serviceCharge = 100;

function calculateInterest(p, t, r = 0.5) {
    // r = 0.5 is default parameter

    let interest = p * t * r / 100
    return interest + serviceCharge
}

console.log(calculateInterest(2000, 2));
console.log(calculateInterest(120000, 10))