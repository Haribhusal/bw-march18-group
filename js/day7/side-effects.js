let count = 0;
// 1
// 3
// 6
// 10
// 15


let numbers = [1, 2, 3, 4, 5]

numbers.forEach(num => {
    count = count + num
    // count += num;  // side effect: modifies outer variable
});

console.log(count);  // 6
