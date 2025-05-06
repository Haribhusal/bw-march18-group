let numbers = [23, 53, 66, 22, 33, 11, 86, 96];

function checkNumber(num) {
    return num < 50
}


let filtered = numbers.filter(checkNumber)
console.log(filtered)
// console.log(checkNumber(20))