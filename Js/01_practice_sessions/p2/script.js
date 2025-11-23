// //07.
// class version
// let age = prompt("Enter your age:");

// if (age === null) console.error("You pressed cancelled...");
// else if (age.trim() === "") console.error("Plese enter you age...");
// else {
//   age = Number(age);
//   if (isNaN(age)) console.error("Please enter your age in numbers...");
//   else console.info(`Your age is ${Number(age)}`);
// }

//my version
//we can use ternary operator to solve this in single line

// let age = parseInt(prompt("Enter your age: "));
// if (!isNaN(age) && age <= 100 && age >= 0) console.log(`Your age is ${age}`);
// else console.error("Please enter a number...");

// //08.
// let n = 5;
// for (let i = 1; i <= 10; i++) console.log(`${n} x ${i} = ${n * i}`);

// //09.
// let count = 0;
// for (let i = 1; i <= 15; i++) {
//   if (i > 8) {
//     count++;
//     console.log(i);
//   }
// }
// console.log(`Total count : ${count}`);

// //10.
// let savedPassword = "abc123";
// let userPassword = prompt("Enter your password: ");

// if (userPassword === savedPassword) console.log("Access Granted");
// else console.log("Access Denied");

// Level 2

// //11. -- method 01
// let attempts = 0;
// let pass = "harshbhai";
// let matchPass = false;

// let password = prompt("Enter your password: ");
// if (password === pass) matchPass = true;

// while (password !== pass) {
//   if (attempts === 3) {
//     console.log("Account Locked");
//     break;
//   }

//   password = prompt("Enter your password: ");
//   if (password === pass) matchPass = true;
//   attempts++;
// }

// if (matchPass === true) console.log("Account Opended");

// //11. -- method 2

// let attempt = 0;
// const sahipassword = "harsh";
// let userpassword = prompt("apna password btao: ");
// attempt++;

// while (attempt < 3 && sahipassword !== userpassword) {
//   user = prompt("apna password btao: ");
//   attempt++;
// }

// if (attempt === 3 && sahipassword !== userpassword)
//   console.log("Account Locked!");
// else console.log("Access Granted...");

// //12.
// let word = prompt("word bolo");
// let counter = 0;

// while (word != "stop") {
//   if (word === "yes") counter++;
//   word = prompt("word bolo");
// }
// console.log(`total times yes count : ${counter}`);

// //13.
// for (let i = 1; i < 51; i++) {
//   if (i % 7 === 0) console.log(i);
// }

// //14.
// let sum = 0;
// for (let i = 1; i < 31; i++) {
//   if (i % 2) sum = sum + i;
// }
// console.log(sum);

// //15.
// let num = prompt("Number bolo: ");
// num = Number(num);

// while (num % 2 !== 0) {
//   num = prompt("Number bolo: ");
//   num = Number(num);
// }

// //16.
// let start = +prompt("start");
// let end = +prompt("end");

// if (start > end) console.error("start cannot be bigger than end");

// for (let i = start; i <= end; i++) console.log(i);

// //17.
// let counter = 0;
// for (let i = 1; i < 21; i++) {
//   if (counter === 3) break;
//   if (i % 2) {
//     console.log(i);
//     counter++;
//   }
// }

// //18.
// let counter = 0;
// for (let i = 1; i < 6; i++) {
//   let num = +prompt("numder do:");
//   if (num >= 0) counter++;
// }

// console.log(counter);

// //19.
// let balance = 1000;
// let flag = false;
// let counter = 0;
// while (balance > 0 && counter != 3) {
//   let withdraw = +prompt("Kitna paisa withdraw krna h ?");
//   counter++;
//   if (withdraw <= balance) balance -= withdraw;
//   else {
//     flag = true;
//     break;
//   }
// }

// if (flag === true) console.log("Insufficient Balance");
// else console.log(`Balance : ${balance}`);

function one (a,b,c){
  console.log(a,b,c)
}

one(1,, 2)