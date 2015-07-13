//Define a function called sum that takes two numbers as arguments and returns their sum.//

// function sum(number1, number2) {
//     return number1 + number2;
// }
// console.log(sum(4, 2))

// Define a function called isEqual that takes two arguments and returns a boolean. Return true if the two arguments are equal and return false if they are not.
//
// function isEqual(x, y) {
//   if (x === y) {
//     return true;
//   } else {
//     return false;
//   }
// };
// console.log(isEqual(1, 2));

// Define a function called discountPercentage that returns the total discount ($), given the original amount and discount percentage (as arguments). Return a warning if the discount amount is greater than 100 or less that 0 percent.

// alert("Please enter the original amount in whole numbers and the discount percentage as a decimal")
// function discountPercentage(originalAmount, discountPercentage) {
//   if(discountPercentage >= 1) {
//     alert("Discount percentage is greater then 100%");
//   } else if (discountPercentage < 0) {
//     alert("Discount percentage is less then 0%");
//   } else {
//     var totalDiscount = originalAmount / discountPercentage;
//     return totalDiscount;
//   };
// };
// console.log(discountPercentage(100, 1.1))
//

// Define a function called stringCapitalize that takes a string as an argument and returns the same string with the first letter of each word capitalized. Assume that each individual work is separated by only one space.

// function stringCapitalize (stringIn) {
//   var stringOut = "";
//   stringIn.charAt(1).toUpperCase;
//   for (var i = 0; i < stringIn.length; i++) {
//     if(stringIn.charAt(i-1) === " ") {
//       stringOut += stringIn.charAt(i).toUpperCase();
//       } else {
//       stringOut += stringIn.charAt(i);
//     }
//   }
// return stringOut;
// console.log(stringCapitalize("What is the answer"));


// Define a function called evenNumbers that takes a random integer, from 0 to 100, and outputs all the even integers from 0 to that random number.


// function evenNumbers(randomNumber) {
//     var line = ""
//     for(var i = 0; i < randomNumber; i++) {
//         if ((i < randomNumber) && (i % 2 === 0))
//           line += " " + i;
//     }
//     return line;
// }
// console.log(evenNumbers(53))

// Define a function called isDivisible that takes two arguments and returns a boolean. Return true if the first argument is divisible by the second; otherwise, return false.

function isDivisible(x,y) {
    if((x % y) === 0) {
      return true;
    } else {
      return false;
    }
}
console.log(isDivisble(4,2));
