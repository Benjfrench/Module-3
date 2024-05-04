// function camelCase(cssProp) {
//   return cssProp.replace(/-([a-z])/g, function (match, letter) {
//     return letter.toUpperCase();
//   });
// }

// // Example usage:
// console.log(camelCase("margin-left-right")); // Output: 'marginLeft'
// console.log(camelCase("background-color")); // Output: 'backgroundColor'

const camelCase = (cssProp) => {
    if (typeof cssProp === "string") {
      // step1: split into array of 2 strings
      var updatedValue = cssProp.split("-");
      var [firstWord, secondWord] = updatedValue;
      // step2: capitalize the first letter of the second word
      var [firstChar, ...rest] = secondWord;
      var secondWordJoined = firstChar.toUpperCase() + rest.join("");
      // step3: join the two words
      var finalValue = firstWord + secondWordJoined;
      return finalValue;
    }
    return "Please enter a string";
  };
  console.log(camelCase("background-image"));
  console.log(camelCase("first-second"));
  console.log(camelCase("background"));

  // version 2
// const camelCaseV2 = (cssProp) => {
//     if (typeof cssProp === "string") {
//       // step1: split into array of 2 strings
//       var updatedValue = cssProp.split("-");
//       // var counterForTargetChar = cssProp.split("-").length - 1;
//       // console.log(counterForTargetChar);
//       updatedValue.forEach((word, index) => {
//         if (index > 0) {
//           // stuff here to pull out 1st char and rest of word
//           // then
//           // for first char, capitalize it
//           // then
//           // return concatinated word = firstChar + rest
//         }
//         return word;
//       });
//       //   ... prep final value
//       return finalValue;
//     }
//     return "Please enter a string";
//   };
//   console.log(camelCase("background-image"));
//   console.log(camelCase("first-second-third"));
//   console.log(camelCase("background-a-b-c-something"));
