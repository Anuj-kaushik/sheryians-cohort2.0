// 1. Basic Operators (Arithmetic, Assignment, Increment, Decrement, Comparison, Logical, Bitwise)

// a.
// let a = 10;
// let b = 3;
// console.log(a + b); // 13
// console.log(a - b); // 7
// console.log(a * b); // 30
// console.log(a / b); // 3.33333333
// console.log(a % b); // 1
// console.log(a ** b); // 1000

// b.
// let x = 5;
// x = x + 3; // 8
// x += 3; // 11
// x -= 3; // 8
// x *= 3; // 24
// x /= 3; // 8

// c.
// let count = 5;
// console.log("before increment: ", count);
// count++;
// console.log("after increment: ", count);
// console.log("before decrement: ", count);
// count--;
// console.log("after decrement: ", count);

// d. Compare two values: 5 == “5” and 5 === “5”.
// 5 == "5" // true
// 5 === "5" // false

// e. Check if 10 is greater than 5, less than 20, and equal to 10.
// 10 > 5 // true
// 10 < 20 // true
// 10 === 10 // true
// 10 > 5 && 10 < 20 && 10 === 10 // true

// f. Try logical AND and OR:
// true && false // false
// true || false // true
// !(true) //false

// g. Predict the result of:
// (5 > 3 && 10 > 8) // true
// (5 > 3 || 10 < 8) // true

// h. Bitwise:
// 5 & 1; // 1
// 5 | 1; // 5
// bitwise works on bits --> it converts the number into bits and performs bitwise and operation and bitwise or operation

// 2. Variable Hoisting in JavaScript

// a. Predict output of:
// console.log(a); // undefined
// var a = 10

// b. Predict output of:
// console.log(b); // ReferenceError: Cannot access "b" before initialization
// let b = 10

// c. Predict output of:
// test() // "Hello"
// function test() { console.log(“Hello”) }

// d. Try writing a function expression before initialization and call it:
// hello() // hello is not a function
// var hello = function() { console.log("Hi") }
// this is a function and it does not hoist. Therefore, we cannot call it before initialization

// e. Write one sentence:
// What gets hoisted? -> variable created using var and function statement get hoisted
// What does not get hoisted fully? ->

// 3. Conditional Operators (if, else, else-if, ternary, switch)

// a.
// let age = parseInt(prompt("Enter your age: "));
// if (age > 18) console.log("Adult");
// else console.log("Minor");

// b.
// let marks = parseInt(prompt("Enter your marks: "));
// if (marks >= 90) console.log("A grade");
// else if (marks >= 75) console.log("B grade");
// else if (marks >= 50) console.log("C grade");
// else console.log("Fail");

// c.
// let city = "Bhopal";
// if (city === "Bhopal") console.log("MP");
// else if (city === "Delhi") console.log("Capital");
// else console.log("Unknown City");

// d.
// let score = 40;
// score > 35 ? console.log("Pass") : console.log("Fail");

// e.
// let temperature = 35;
// temperature > 30 ? console.log("Hot") : console.log("Pleasant");

// f. Write a switch case:
// Take day number (1 to 7).
// Print the day name.
// Default case: “Invalid Day”.
// let day = 5;
// switch (day) {
//   case 1:
//     console.log("Sunday");
//     break;
//   case 2:
//     console.log("Monday");
//     break;
//   case 3:
//     console.log("Tuesday");
//     break;
//   case 4:
//     console.log("Wednesday");
//     break;
//   case 5:
//     console.log("Thursday");
//     break;
//   case 6:
//     console.log("Friday");
//     break;
//   case 7:
//     console.log("Saturday");
//     break;
//   default:
//     console.log("Invalid Day");
// }

// g. Using logical operators in condition:
// If age > 18 and country == “India” → log “Eligible for Vote”
// Else → “Not Eligible”
// let age = 20;
// let country = "India";
// if (age > 18 && country === "India") console.log("Eligible for Vote");
// else console.log("Not Eligible");

