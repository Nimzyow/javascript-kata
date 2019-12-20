/**
 *
 *.****************** ROT 13 TEST.******************
 */

function rot13(str) {
  // LBH QVQ VG!
  //the below RegExp is going to be used to test whether there is character at a specific position of a string
  var re = new RegExp("[a-z]", "i");
  var min = "A".charCodeAt(0);
  var max = "Z".charCodeAt(0);
  var factor = 13;
  var result = "";
  str = str.toUpperCase();
  for (var i = 0; i < str.length; i++) {
    result += re.test(str[i])
      ? String.fromCharCode(
          ((str.charCodeAt(i) - min + factor) % (max - min + 1)) + min
        ) //e.g: "hello" hello is string and the charCodeAt(i) for H is 72. so the above calc is: 72 - 65 + 13 = 20. max - min + 1 = 90 - 65 + 1 = 26. 20 % 26 = 20 + 65 = 85.
      : str[i];
  }

  return result;
}

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

function rot13Aw(str) {
  var codeA = "A".charCodeAt(0);
  var codeN = "N".charCodeAt(0);
  var codeZ = "Z".charCodeAt(0);
  var newArr = [];

  for (var i = 0; i < str.length; i++) {
    var code = str.charCodeAt(i);
    if (code >= codeA && code <= codeZ) {
      if (code >= codeN) newArr.push(String.fromCharCode(code - 13));
      else newArr.push(String.fromCharCode(code + 13));
    } else {
      newArr.push(str[i]);
    }
  }
  return newArr.join("");
}

console.log(rot13Aw("HELLO AND WELCOME"));

// New way of doing it

rot13MyMethod = str => {
  let charA = "A".charCodeAt(0);
  let charN = "N".charCodeAt(0);
  let charZ = "Z".charCodeAt(0);
  let factor = 13;
  let newArr = [];

  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);
    if (code >= charA && code <= charZ) {
      if (code >= charN) {
        newArr.push(String.fromCharCode(code - factor));
      } else {
        newArr.push(String.fromCharCode(code + factor));
      }
    } else {
      newArr.push(str[i]);
    }
  }
  return newArr.join("");
};

console.log(rot13MyMethod("MY HELLO"));

rot13Again = str => {
  let chatA = "A".charCodeAt(0);
  let chatN = "N".charCodeAt(0);
  let chatZ = "Z".charCodeAt(0);
  let factor = 13;
  let newArr = [];

  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);
    if (code > chatA && code < chatZ) {
      if (code >= chatN) {
        newArr.push(String.fromCharCode(code - factor));
      } else {
        newArr.push(String.fromCharCode(code + factor));
      }
    } else {
      newArr.push(str[i]);
    }
  }
  return newArr.join("");
};

console.log(rot13Again("HELLO MY NAME IS NIMA"));

//rot13 yet again

rot13YetAgain = str => {
  let charA = "A".charCodeAt(0);
  let charN = "N".charCodeAt(0);
  let charZ = "Z".charCodeAt(0);
  let newArr = [];
  let factor = 13;

  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);
    if (code >= charA && code <= charZ) {
      if (code >= charN) {
        newArr.push(String.fromCharCode(code - factor));
      } else {
        newArr.push(String.fromCharCode(code + 13));
      }
    } else {
      newArr.push(str[i]);
    }
  }
  return newArr.join("");
};

console.log(rot13YetAgain("OOPS I DID IT AGAIN"));

//****** FIZZBUZZ TEST ******/
//return fizzbuzz if number divided by 3 and 5 has no decimals.
//return fizz if number divided by 3 has no decimals
//return buzz if number divided by 5 has no decimals

fizzBuzz = () => {
  let newArr = [];
  for (let i = 0; i < 101; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      newArr.push("FizzBuzz");
    } else if (i % 3 === 0) {
      newArr.push("Fizz");
    } else if (i % 5 === 0) {
      newArr.push("Buzz");
    } else {
      newArr.push(i);
    }
  }
  return newArr;
};

console.log(fizzBuzz());