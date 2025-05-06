
let numbers = [23, 52, 66, 33, 73, 88]

function checkNumber(num) {
    return num > 50
}

let result = numbers.some(checkNumber)
console.log(result)