// //08.
// const num = 5;
// for (let i = 1; i <= 10; i++) {
//   console.log(`${num} x ${i} = ${num * i}`);
// }

// //09.
// let count = 0;
// for (let i = 1; i <= 15; i++) {
//   if (i > 8) count++;
// }
// console.log(count);

// //10.
// let savedPassword = "abc123";
// let userPassword = prompt("Enter your password: ");

// if (userPassword === savedPassword) console.log("Access Granted");
// else console.log("Access Denied");

//Level 2 – Slightly Tougher but Logical

// //11.
// let cnt = 3;
// const savedPassword = "abc123";

// while (cnt--) {
//   let userPassword = prompt("Enter your password: ");
//   if (savedPassword === userPassword) {
//     console.log("Access Grandted");
//     break;
//   } else {
//     console.log(`Access Denied, ${cnt} attempts remaining`);
//   }
// }

// if (cnt < 0) console.log("Account Locked");

//12.
// let cnt = 0;
// while (true) {
//   let word = prompt("Enter yes | stop: ");
//   if (word === "stop") {
//     console.log(`Count of yes : ${cnt}`);
//     break;
//   }
//   if (word === "yes") cnt++;
// }

// //13.
// for (let i = 1; i <= 50; i++) {
//   if (i % 7 === 0) console.log(i);
// }

// //14.
// let sum = 0;
// for (let i = 1; i <= 30; i++) {
//   if (i % 2) sum += i;
// }
// console.log(sum);

// //15.
// while (true) {
//   let userNumber = prompt("Enter a number: ");
//   if (!(userNumber % 2)) {
//     console.log(`You entered an even number : ${userNumber}`);
//     break
//   }
//   console.log(userNumber);
// }

// //16.
// let n1 = parseInt(prompt("Enter first number : "));
// let n2 = parseInt(prompt("Enter second number : "));

// if (n1 < n2) {
//   for (let i = n1; i <= n2; i++) console.log(i);
// } else {
//   for (let i = n2; i <= n1; i++) console.log(i);
// }

// //17.
// let cnt = 3;
// for (let i = 1; i <= 20; i++) {
//   if (i % 2) {
//     console.log(i);
//     cnt--;
//   }
//   if (cnt === 0) break;
// }

// //18.
// let cnt = 0;
// alert("Enter 5 numbers");
// for (let i = 1; i <= 5; i++) {
//   let userNumber = prompt("Enter number :");
//   if (userNumber > 0) cnt++;
// }
// console.log(cnt);

// //19.
// let cnt = 3;
// let balance = 1000;
// while (cnt--) {
//   let withdrawlAmount = parseInt(prompt("Enter withdrawl amount : "));
//   if (withdrawlAmount > balance) alert("Insufficient balance");
//   else {
//     balance = balance - withdrawlAmount;
//     console.log(`Deducted amount : ${withdrawlAmount}`);
//     console.log(`Total balance : ${balance}`);
//   }
// }
