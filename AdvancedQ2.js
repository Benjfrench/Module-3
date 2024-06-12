
// The following delayMsg function is intended to be used to delay printing a message until
// some time has passed.
// a) What order will the four tests below print in? Why?
// b) Rewrite delayMsg as an arrow function
// c) Add a fifth test which uses a large delay time (greater than 10 seconds)
// d) Use clearTimeout to prevent the fifth test from printing at all.

// function delayMsg(msg) {
//   console.log(`This message will be printed after a delay: ${msg}`);
// }

//a) 4,3 (same time?),2,1

//b)
const delayMsg = (msg) => {
    console.log(`This message will be printed after a delay: ${msg}`);
}
setTimeout(delayMsg, 100, "#1: Delayed by 100ms");
setTimeout(delayMsg, 20, "#2: Delayed by 20ms");
setTimeout(delayMsg, 0, "#3: Delayed by 0ms");
delayMsg("#4: Not delayed at all");


//c)
setTimeout(delayMsg, 11000, "Long delay")

//d)
// const timeoutId = delayMsg("Long Delay", 12000)
