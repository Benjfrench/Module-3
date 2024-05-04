// let twentyCents = 0.2;
// let tenCents = 0.1;
// console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`);
// // 0.2 + 0.1 = 0.30000000000000004

// let fixedTwenty = twentyCents.toFixed(2);
// let fixedTen = tenCents.toFixed(2);
// console.log(fixedTwenty + fixedTen); //why is this not working?
// //a)
// //  toFixed turns the number into a String, so concatination is occuring, rather than addition

// //b)
// function currencyAddition(float1, float2) {
//   // Convert to integer by multiplying with a power of 10 to preserve precision
//   let int1 = Math.round(float1 * 100);
//   let int2 = Math.round(float2 * 100);

//   // Perform addition
//   let sum = int1 + int2;

//   // Convert back to float
//   let result = sum / 100;

//   return result;
// }
// console.log(
//   `${twentyCents} + ${tenCents} = ${currencyAddition(twentyCents, tenCents)}`
// );

// //c)
// function currencyOperation(float1, float2, operation) {
//   // Convert to integers by multiplying with a power of 10 to preserve precision
//   let int1 = Math.round(float1 * 100);
//   let int2 = Math.round(float2 * 100);

//   // Perform the specified operation
//   let result;
//   switch (operation) {
//     case "+":
//       result = (int1 + int2) / 100;
//       break;
//     case "-":
//       result = (int1 - int2) / 100;
//       break;
//     case "*":
//       result = (int1 * int2) / 10000; // Division by 10000 to adjust for multiplication
//       break;
//     case "/":
//       if (int2 !== 0) {
//         result = (int1 / int2) * 100;
//       } else {
//         throw new Error("Division by zero error");
//       }
//       break;
//     default:
//       throw new Error("Invalid operation. Please provide one of: +, -, /, *");
//   }

//   return result;
// }

// // Example usage:

// console.log(
//   `${twentyCents} + ${tenCents} = ${currencyOperation(
//     twentyCents,
//     tenCents,
//     "+"
//   )}`
// );
// console.log(
//   `${twentyCents} - ${tenCents} = ${currencyOperation(
//     twentyCents,
//     tenCents,
//     "-"
//   )}`
// );
// console.log(
//   `${twentyCents} * ${tenCents} = ${currencyOperation(
//     twentyCents,
//     tenCents,
//     "*"
//   )}`
// );
// console.log(
//   `${twentyCents} / ${tenCents} = ${currencyOperation(
//     twentyCents,
//     tenCents,
//     "/"
//   )}`
// );

//d)
function currencyOperation(float1, float2, operation, numDecimals) {
    // Validate numDecimals parameter
    if (numDecimals < 1 || numDecimals > 10 || !Number.isInteger(numDecimals)) {
        throw new Error("numDecimals must be an integer between 1 and 10 inclusive");
    }

    // Calculate the multiplier based on the desired number of decimal places
    let multiplier = Math.pow(10, numDecimals);

    // Convert to integers by multiplying with the multiplier to preserve precision
    let int1 = Math.round(float1 * multiplier);
    let int2 = Math.round(float2 * multiplier);

    // Perform the specified operation
    let result;
    switch (operation) {
        case '+':
            result = (int1 + int2) / multiplier;
            break;
        case '-':
            result = (int1 - int2) / multiplier;
            break;
        case '*':
            result = (int1 * int2) / (multiplier * multiplier); // Division by (multiplier * multiplier) to adjust for multiplication
            break;
        case '/':
            if (int2 !== 0) {
                result = (int1 / int2) * multiplier;
            } else {
                throw new Error("Division by zero error");
            }
            break;
        default:
            throw new Error("Invalid operation. Please provide one of: +, -, /, *");
    }

    return result;
}

// Example usage:

console.log(`${twentyCents} + ${tenCents} = ${currencyOperation(twentyCents, tenCents, '+', 2)}`);
console.log(`${twentyCents} - ${tenCents} = ${currencyOperation(twentyCents, tenCents, '-', 3)}`);
console.log(`${twentyCents} * ${tenCents} = ${currencyOperation(twentyCents, tenCents, '*', 4)}`);
console.log(`${twentyCents} / ${tenCents} = ${currencyOperation(twentyCents, tenCents, '/', 5)}`);

