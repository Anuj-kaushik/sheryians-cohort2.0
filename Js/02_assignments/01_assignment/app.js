// Js assignment 27-oct-2025

// Introduction to JavaScript
// 1. document.title - 'Sheryians Coding School | Learn Coding in India'
// 2. give pop-up with message
// alert("Hello from Sheryians!");
// 3. If HTML is skeleton, CSS is clothes, JS is the brain
// 4. I have seen JS being used in from google browser, youtube.com, etc. I have seen animations in website boy-coy, bruno simon

// Linking JavaScript Files
// 1. linking js in head tag make js loads earlier than html but it may cause problems as it might block page rendering
// 2. prints Connected! in browser console
// console.log("Connected!");
// 3. If we move script tag to body section it says Connected - it runs after html loads
// 4. scripts loads in order but after html is parsed

// Running JS in Browser Console
// 1. 2 + 2 gives 4
// 2. Show pop-up with message
// alert("Hi")
// 3. Show pop-up ans ask for input with message
// prompt("Your name?")
// 4. Creates variable named city with value "Bhopal" and city in console shows value("Bhopal")
// let city = "Bhopal";
// city;

// Variables and Keywords (var, let, const)
// 1.
// var a = "Harsh";
// let b = "Sheryians";
// const c = "School";

// 2.
// a = "Updated";
// b = "Updated";
// c = "Updated"; // error: TypeError: Assignment to constant variable.

// 3.
// {
//   let val;
// }
// console.log(val); // error:  ReferenceError: val is not defined

// 4. ReferenceError
// 5.
// ex1: storing immutable values: min_password_length
// ex2: storing theme colors : primiry_color, secondary_color
// ex3: storing sensitive data that never changes: Aadhaar_card_no, PAN_no

// Logging and Interaction (console, alert, prompt)
// 1.
// let name = "Harsh"
// let age = 26
// let city = "Bhopal"
// console.log(name)
// console.info(age)
// console.warn(city)

// 2.
// let userName = prompt("Enter your name?")
// alert(`Welcome ${userName}, to our website`)

// 3.
// console.log(typeof userName);

// 4. It merge the two values instead of summing up them
// let age = prompt("Enter age: ");
// console.log(age + 5);

// Working with Strings
// 1.
// let msg = "I love Sheryians";
// 2.
// msg.slice(2, 6); // love
// 3.
// msg.split(" "); // no of words : 3
// 4.
// msg.replace("love", "study at"); // "I study at Sheryians"
// 5.
// let name = "Harsh";
// console.log(`Hey ${name}, welcome to JS!`); // Hey Harsh, welcome to JS!
// 6.
// msg.includes("love"); // true

// Statements and Semicolons

// 1. yes, removing semicolon works in majority cases but there can be some cases where js automatic semicolon insertion (ASI) can cause error
// example:
// let a = 10
// let b = 20
// let c = 30
// [1,2,3].forEach((val)=> (console.log(val)))
// Uncaught TypeError: Cannot read properties of undefined (reading 'forEach')

// 2. if we combine two statements without semicolon if will break, if semicolon added it will not break
// let a = 10 let b = 20

// 3. js automatic semicolon insertion (ASI) adds semicolon if statements are written in separate lines otherwise gives error
// console.log("a");
// console.log("b");
// console.log("c");

// Comments

// 1. anuj kaushik
// 2.
// the comment line
// is ignored by the
// javascript compiler
// 3.
// console.log("one");

// Expressions vs Statements
// 1. 5 + 10 gives 15 in browser console
// 2. let x = 10 initialises variable x with 10 and it can be accessible
// 3. expression gives value immediately
// 4. 30
// 5.
// expression evaluates and return final value immediately.
// statement evaluates and save the final value in a variable which can be accessed and used in further operations.

// Data Types
// 1.
// let age = 25;
// let name = "Harsh";
// let isStudent = true;
// let skills = ["JS", "HTML"];
// let user = { city: "Bhopal" };
// let x = null;
// let y;
// let z = Symbol("id");

// 2.
// console.log(typeof age) //number
// console.log(typeof name) //string
// console.log(typeof isStudent) //boolean
// console.log(typeof skills) //object
// console.log(typeof user) //object
// console.log(typeof x) //object
// console.log(typeof y) //undefined
// console.log(typeof z) //symbol

// 3.
// y = function(number){console.log(number)}
// console.log(typeof y)

// 4.
// let add = age + name
// console.log(add)
// console.log(typeof add) //string

// Special Values
// 1.
// console.log(1/0) //Infinity
// console.log(0/0) //NaN
// console.log(Number("abc")) //NaN
// console.log(undefined + 1) //NaN

// 2.
// Infinity: A special value representing number which exceeds finite value. Ex: 1 / 0 gives Infinity
// NaN: A special value which indicate that a result is not a valid number. Ex: 0 / 0

// 3.
// null represents an intentional absence of any object value. It is explicitly assigned by the programmer when they want to indicate "no value" or "nothing here yet".
// let user = null; // means: user currently has no value, but might later

// undefined represents a variable that has been declared but not assigned any value yet. It is the default value given by JavaScript itself, though it can also be assigned explicitly (not recommended).
// let name; // name is undefined (no value assigned)

// Primitive vs Reference
// // 1.
// let x = 5;
// let y = x;
// y = 10;
// console.log(x, y); // 5, 10

// //2.
// let obj1 = { name: "Harsh" };
// let obj2 = obj1;
// obj2.name = "Sheryians";
// console.log(obj1.name); // "Sheryians"

// //3.obj1 and obj2 values changes together
// //4. Done



// let arr = {
//   name : "sdfdg",
// }
// console.log(arr instanceof Array)

