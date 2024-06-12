// The Fibonacci sequence of numbers is a famous pattern where the next number in the sequence is the sum of the previous 2.
// e.g. 1, 1, 2, 3, 5, 8, 13, 21, 34, etc.
// a) Write a function printFibonacci() using setInterval that outputs a number in the Fibonacci sequence every second.

function printFibonacci() {
    let a = 0, b = 1;
    console.log(a); // Output the first Fibonacci number
    console.log(b); // Output the second Fibonacci number
  
    const fibInterval = setInterval(() => {
      const nextFib = a + b;
      console.log(nextFib);
      a = b;
      b = nextFib;
    }, 1000); // Output every second
  
    // Stop the interval after some time (e.g., 10 seconds)
    setTimeout(() => {
      clearInterval(fibInterval);
      console.log("Fibonacci sequence stopped.");
    }, 10000); // Stop after 10 seconds
  }
  
  // Call the function to start printing Fibonacci sequence
  printFibonacci();

// b) Write a new version printFibonacciTimeouts() that uses nested setTimeout calls to do the same thing
function printFibonacciTimeouts() {
    let a = 0, b = 1;
    console.log(a); // Output the first Fibonacci number
    console.log(b); // Output the second Fibonacci number
  
    let count = 2; // Tracks the number of Fibonacci numbers printed
  
    function nextFibonacci() {
      const nextFib = a + b;
      console.log(nextFib);
      a = b;
      b = nextFib;
      count++;
  
      if (count <= 10) { // Output 10 Fibonacci numbers
        setTimeout(nextFibonacci, 1000); // Output every second
      } else {
        console.log("Fibonacci sequence stopped.");
      }
    }
  
    setTimeout(nextFibonacci, 1000); // Start after 1 second
  }
  
  // Call the function to start printing Fibonacci sequence
  printFibonacciTimeouts();
  
// c) Extend one of the above functions to accept a limit argument, which tells it how many numbers to print before stopping.