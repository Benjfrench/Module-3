// a) Create a debounce(func) decorator, which is a wrapper that takes a function func and
// suspends calls to func until there's 1000 milliseconds of inactivity. After this 1 second
// pause, the most recent call to func should be executed and any others ignored.
// b) Extend the debounce decorator function to take a second argument ms, which defines the
// length of the period of inactivity instead of hardcoding to 1000ms
// c) Extend debounce to allow the original debounced function printMe to take an argument
// msg which is included in the console.log statement.

// function printMe() {
//     console.log('printing debounced message')
// }
// printMe = debounce(printMe); //create this debounce function for a)
//fire off 3 calls to printMe within 300ms - only the LAST one should print, after
// 1000ms of no calls
// setTimeout( printMe, 100);
// setTimeout( printMe, 200);
// setTimeout( printMe, 300);

//a)
function debounce(func, delay) {
  let timerId;

  return function () {
    const context = this;
    const args = arguments;

    clearTimeout(timerId);
    timerId = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
}

function printMe() {
  console.log("printing debounced message");
}

printMe = debounce(printMe, 1000);

setTimeout(printMe, 100);
setTimeout(printMe, 200);
setTimeout(printMe, 300);

// b)
function debounce(func, ms) {
  let timerId;

  return function () {
    const context = this;
    const args = arguments;

    clearTimeout(timerId);
    timerId = setTimeout(() => {
      func.apply(context, args);
    }, ms);
  };
}

function printMe() {
  console.log("printing debounced message");
}

printMe = debounce(printMe, 9000); // 9000ms period of inactivity

setTimeout(printMe, 100);
setTimeout(printMe, 200);
setTimeout(printMe, 300);

//c)
function debounce(func, ms) {
    let timerId;

    return function(...args) {
        const context = this;

        clearTimeout(timerId);
        timerId = setTimeout(() => {
            func.apply(context, args);
        }, ms);
    };
}

function printMe(msg) {
    console.log('printing debounced message:', msg);
}

printMe = debounce(printMe, 1000);

setTimeout(() => printMe("First message"), 100);
setTimeout(() => printMe("Second message"), 200);
setTimeout(() => printMe("Third message"), 300);

