// Break
// The break command will break the loop 
// and continue executing the code that follows after the loop(if any).


// let i = 0;
// for (i; i <= 10; i++) {

//     if (i == 5) {
//         break;
//     }
//     console.log(i)

// }

// The continue command will break the current loop and continue with the next value.

var count = 0
for (count = 0; count <= 10; count++) {
    if (count == 3) {
        continue;
    }
    console.log(count)
}