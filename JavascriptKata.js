/**
 *
 *.****************** VERY EVEN NUMBERS.******************
 */

// Write a function that returns true if the number is a "Very Even" number.

// If the number is odd, it is not a "Very Even" number.

// If the number is even, return whether the sum of the digits is a "Very Even" number.

// #Examples:

// input(88) => returns false -> 8 + 8 = 16 -> 1 + 6 = 7 => 7 is odd

// input(222) => returns true

// input(5) => returns false
// Note: The numbers will always be positive!
function returnArray(n) {
  return n
    .toString()
    .split("")
    .map(num => {
      return parseInt(num, 10);
    });
}

function isVeryEvenNumber(n) {
  if (n == 0) {
    return true;
  } else if (n < 10) {
    return n % 2 == 0 ? true : false;
  }
  let number = returnArray(n);
  let sum = 0;
  do {
    for (let i = 0; i < number.length; i++) {
      sum += number[i];
    }
    number = returnArray(sum);
    sum = 0;
  } while (number.length > 1);
  return Number(number.toString().split("")) % 2 == 0 ? true : false;
}

isVeryEvenNumber(200);

// best practice

// function isVeryEvenNumber(n) {
//   while (n.toString().length > 1) {
//     let array = n.toString().split('')
//     n = array.reduce((a, b) => Number(a) + Number(b), 0)
//   }
//   if (!(n % 2 === 0)) {
//     return false;
//   }

//   return true;
// }

/**
 *
 *.****************** ROT 13 TEST.******************
 */

// function rot13(str) {
//   // LBH QVQ VG!
//   //the below RegExp is going to be used to test whether there is character at a specific position of a string
//   var re = new RegExp("[a-z]", "i");
//   var min = "A".charCodeAt(0);
//   var max = "Z".charCodeAt(0);
//   var factor = 13;
//   var result = "";
//   str = str.toUpperCase();
//   for (var i = 0; i < str.length; i++) {
//     result += re.test(str[i])
//       ? String.fromCharCode(
//           ((str.charCodeAt(i) - min + factor) % (max - min + 1)) + min
//         ) //e.g: "hello" hello is string and the charCodeAt(i) for H is 72. so the above calc is: 72 - 65 + 13 = 20. max - min + 1 = 90 - 65 + 1 = 26. 20 % 26 = 20 + 65 = 85.
//       : str[i];
//   }

//   return result;
// }

//console.log(rot13("hello and welcome"));

// DOING ROT 13 BY MYSELF

// rot13Ms = str => {
//   let re = new RegExp("[a-z]", "i");
//   let factor = 13;
//   let min = "A".charCodeAt(0);
//   let max = "Z".charCodeAt(0);
//   let result = "";
//   str = str.toUpperCase();
//   for (let i = 0; i < str.length; i++) {
//     result += re.test(str[i])
//       ? String.fromCharCode(
//           ((str.charCodeAt(i) - min + factor) % (max - min + 1)) + min
//         )
//       : str[i];
//   }
//   return result;
// };

// console.log(rot13Ms("whats up"));

// Another way of doing it

// function rot13Aw(str) {
//   var codeA = "A".charCodeAt(0);
//   var codeN = "N".charCodeAt(0);
//   var codeZ = "Z".charCodeAt(0);
//   var newArr = [];

//   for (var i = 0; i < str.length; i++) {
//     var code = str.charCodeAt(i);
//     if (code >= codeA && code <= codeZ) {
//       if (code >= codeN) newArr.push(String.fromCharCode(code - 13));
//       else newArr.push(String.fromCharCode(code + 13));
//     } else {
//       newArr.push(str[i]);
//     }
//   }
//   return newArr.join("");
// }

// console.log(rot13Aw("HELLO AND WELCOME"));

// // New way of doing it

// rot13MyMethod = str => {
//   let charA = "A".charCodeAt(0);
//   let charN = "N".charCodeAt(0);
//   let charZ = "Z".charCodeAt(0);
//   let factor = 13;
//   let newArr = [];

//   for (let i = 0; i < str.length; i++) {
//     let code = str.charCodeAt(i);
//     if (code >= charA && code <= charZ) {
//       if (code >= charN) {
//         newArr.push(String.fromCharCode(code - factor));
//       } else {
//         newArr.push(String.fromCharCode(code + factor));
//       }
//     } else {
//       newArr.push(str[i]);
//     }
//   }
//   return newArr.join("");
// };

// console.log(rot13MyMethod("MY HELLO"));

// rot13Again = str => {
//   let chatA = "A".charCodeAt(0);
//   let chatN = "N".charCodeAt(0);
//   let chatZ = "Z".charCodeAt(0);
//   let factor = 13;
//   let newArr = [];

//   for (let i = 0; i < str.length; i++) {
//     let code = str.charCodeAt(i);
//     if (code > chatA && code < chatZ) {
//       if (code >= chatN) {
//         newArr.push(String.fromCharCode(code - factor));
//       } else {
//         newArr.push(String.fromCharCode(code + factor));
//       }
//     } else {
//       newArr.push(str[i]);
//     }
//   }
//   return newArr.join("");
// };

// console.log(rot13Again("HELLO MY NAME IS NIMA"));

// //rot13 yet again

// rot13YetAgain = str => {
//   let charA = "A".charCodeAt(0);
//   let charN = "N".charCodeAt(0);
//   let charZ = "Z".charCodeAt(0);
//   let newArr = [];
//   let factor = 13;

//   for (let i = 0; i < str.length; i++) {
//     let code = str.charCodeAt(i);
//     if (code >= charA && code <= charZ) {
//       if (code >= charN) {
//         newArr.push(String.fromCharCode(code - factor));
//       } else {
//         newArr.push(String.fromCharCode(code + 13));
//       }
//     } else {
//       newArr.push(str[i]);
//     }
//   }
//   return newArr.join("");
// };

// console.log(rot13YetAgain("OOPS I DID IT AGAIN"));

//****** FIZZBUZZ TEST ******/
//return fizzbuzz if number divided by 3 and 5 has no decimals.
//return fizz if number divided by 3 has no decimals
//return buzz if number divided by 5 has no decimals

// fizzBuzz = () => {
//   let newArr = [];
//   for (let i = 0; i < 101; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       newArr.push("FizzBuzz");
//     } else if (i % 3 === 0) {
//       newArr.push("Fizz");
//     } else if (i % 5 === 0) {
//       newArr.push("Buzz");
//     } else {
//       newArr.push(i);
//     }
//   }
//   return newArr;
// };

//console.log(fizzBuzz());

//******************Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained. */

//example:  "This is an example!" ==> "sihT si na !elpmaxe"
//          "double  spaces"      ==> "elbuod  secaps"

// reverseWords = str => {
//   return str
//     .split(" ")
//     .map(word => {
//       return word
//         .split("")
//         .reverse()
//         .join("");
//     })
//     .join(" ");
// };
// console.log(reverseWords("This is an example"));

// //Reverse words on my own

// function reverseWordsOMO(str) {
//   return str
//     .split(" ")
//     .map(function(word) {
//       return word
//         .split("")
//         .reverse()
//         .join("");
//     })
//     .join(" ");
// }

// console.log(reverseWordsOMO("lets try reversing this"));

/**
 * The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

Input
Input will consist of a list of lists containing two items each. Each list contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

Note for F#: The input will be of (int list list) which is a List<List>

Example Input
[[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]]
//  */

// membership = list => {
//   let membershipOption = [];
//   list.map(member => {
//     if (member[0] >= 55 && member[1] > 7) {
//       membershipOption.push("Senior");
//     } else if (member[0] >= 55 && member[1] <= 7) {
//       membershipOption.push("Open");
//     } else if (member[0] < 55) {
//       membershipOption.push("Open");
//     }
//   });
//   return membershipOption;
// };

// console.log(
//   membership([
//     [18, 20],
//     [45, 2],
//     [61, 12],
//     [37, 6],
//     [21, 21],
//     [78, 9]
//   ])
// );

// //Pro solution
// function openOrSenior(data) {
//   return data.map(([age, handicap]) =>
//     age > 54 && handicap > 7 ? "Senior" : "Open"
//   );
// }

// console.log(
//   openOrSenior([
//     [18, 20],
//     [45, 2],
//     [61, 12],
//     [37, 6],
//     [21, 21],
//     [78, 9]
//   ])
// );
