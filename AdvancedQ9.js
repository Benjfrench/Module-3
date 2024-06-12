// 9. We can delay execution of a function using setTimeout, where we need to provide both the callback function and the delay after which it should execute.
// a) Create a promise-based alternative randomDelay() that delays execution for a
// random amount of time (between 1 and 20 seconds) and returns a promise we can use
// via .then(), as in the starter code below

// function randomDelay() {
//     return new Promise((resolve) => {
//         const delay = Math.floor(Math.random() * 20000) + 1000; // random delay between 1000ms (1s) and 20000ms (20s)
//         setTimeout(resolve, delay);
//     });
// }

// randomDelay().then(() => console.log('There appears to have been a delay.'));




// b) If the random delay is even, consider this a successful delay and resolve the promise,
// and if the random number is odd, consider this a failure and reject it
// c) Update the testing code to catch rejected promises and print a different message

function randomDelay() {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 20000) + 1000; 
        setTimeout(() => {
            if (delay % 2 === 0) {
                resolve(delay);
            } else {
                reject(delay);
            }
        }, delay);
    });
}

// randomDelay()
//     .then(() => console.log('There appears to have been a delay.'))
//     .catch(() => console.log('The delay was unsuccessful.'));


// d) Try to update the then and catch messages to include the random delay value

randomDelay()
    .then((delay) => console.log(`There appears to have been a delay of ${delay} milliseconds.`))
    .catch((delay) => console.log(`The delay of ${delay} milliseconds was unsuccessful.`));
// const randomNumberGen = Math.ceil(Math.random() * 20);
// const checkNumber = (number) => {
//   return new Promise((resolve, reject) => {
//     //IF SOMETHING
//       reject(new Error("Even number"));
//     // ELSE IF SOMETHING
//       resolve("Odd number");
//     }
//   });
// };