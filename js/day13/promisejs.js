









// Create a new promise
const myPromise = new Promise((resolve, reject) => {
    const success = true; // Change this to false to see the error handling

    setTimeout(() => {
        if (success) {
            resolve("Promise resolved successfully!");
        } else {
            reject("Promise rejected!");
        }
    }, 2000); // Simulate an asynchronous operation with a 2-second delay
});

// producing

// Handle the promise resolution and rejection
myPromise
    .then((message) => {
        console.log(message); // This will run if the promise is resolved
    })
    .catch((error) => {
        console.error(error); // This will run if the promise is rejected
    });


//consuming