// //Question 1
// "" + 1 + 0;
// "" - 1 + 0;
// true + false;
// !true;
// 6 / "3";
// "2" * "3";
// 4 + 5 + "px";
// "$" + 4 + 5;
// "4" - 2;
// "4px" - 2;
// " -9 " + 5;
// " -9 " - 5;
// null + 1;
// undefined + 1;
// undefined == null;
// undefined === null;
// " \t \n" - 2;

// console.log("" + 1 + 0); // "10"
// console.log("" - 1 + 0); // -1
// console.log(true + false); // 1
// console.log(!true); // false
// console.log(6 / "3"); // 2
// console.log("2" * "3"); // 6
// console.log(4 + 5 + "px"); // "9px"
// console.log("$" + 4 + 5); // "$45"
// console.log("4" - 2); // 2
// console.log("4px" - 2); // NaN
// console.log(" -9 " + 5); // " -9 5"
// console.log(" -9 " - 5); // -14
// console.log(null + 1); // 1
// console.log(undefined + 1); // NaN
// console.log(undefined == null); // true
// console.log(undefined === null); // false
// console.log(" \t \n" - 2); // -2

// //Question 2
// let three = "3"
// let four = "4"
// let thirty = "30"
// //what is the value of the following expressions?


// let addition = three + four;
// console.log(addition);

// let multiplication = three * four;
// console.log(multiplication);

// let division = three / four;
// console.log(division);

// let subtraction = three - four;
// console.log(subtraction);

// let lessThan1 = three < four;
// console.log(lessThan1);

// let lessThan2 = thirty < four;
// console.log(lessThan2);

// //Question 3
// if (0) console.log('#1 zero is true')
// if ("0") console.log('#2 zero is true')
// if (null) console.log('null is true')
// if (-1) console.log('negative is true')
// if (1) console.log('positive is true')

//If there is a value, console log prints, but if there is an empty or 0 value (such as null) it is considered false, so will not print

//Question 4
// let a = 2, b = 3;
// let result = `${a} + ${b} is `;

// if (a + b < 10) {
//   result += 'less than 10';
// } else {
//   result += 'greater than 10';
// }

// let a = 2, b = 3;
// let result = `${a} + ${b} is `;
// result += (a + b < 10) ? 'less than 10' : 'greater than 10';

// console.log(result)

//Question 5

function getGreeting(name) {
    return "Hello " + name + "!";
  }
  
  // Answer
  // a
  const getGreetings_function = function (name) {
    return "Hello " + name + "!";
  };
  
  // b
  const getGreetings_arrow = (name) => {
    return "Hello " + name + "!";
  };

  //Question 6
  