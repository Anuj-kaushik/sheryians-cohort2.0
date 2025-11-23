// //01.
// function sayHello() {
//   console.log("Hello JavaScript");
// }
// sayHello();

// //02.
// function add(a, b) {
//   return a + b;
// }
// let ans = add(1, 2);
// console.log(ans);

// //03.
// function greeting(guest = "Anuj") {
//   console.log(`Hi ${guest}`);
// }

// greeting(); // Hi Anuj
// greeting("Harsh"); // Hi Harsh

//04. - Method 1
// function addUnlimited(...num){
//   let sum = 0
//   num.forEach((val)=>{
//     sum += val
//   })
//   console.log(sum)
// }
// addUnlimited(1,2,3,4,5,6)

// - Method 2
// function addUnlimited(...num) {
//   let sum = 0;
//   for (let i = 0; i < num.length; i++) sum += num[i];
//   console.log(sum);
// }
// addUnlimited(1, 2, 3, 4, 5, 6);

// - Method 3
// function addUnlimited(...num) {
//   let sum = num.reduce((curr, acc) => acc + curr, 0);
//   console.log(sum);
// }
// addUnlimited(1, 2, 3, 4, 5, 6);

// //05.
// (function () {
//   console.log("I run instantly!");
// })();

// // 06.
// function parent() {
//   let a = 12;
//   function child() {
//     console.log(a);
//   }
//   child();
// }
// parent();

// // 07.
// let fruits = ["apple", "banana", "cherry", "orange", "grapes"];
// console.log(`Before : ${fruits}`);
// fruits.push("strawberry");
// console.log(`After push : ${fruits}`);
// fruits.shift();
// console.log(`After shift : ${fruits}`);

// //08.
// let arr = [1, 2, 3, 4, 5, 6];
// for (let i = 0; i < arr.length; i++) console.log(arr[i]);

// //09.
// const person = {
//   name: "Anuj",
//   age: 20,
//   city: "Roorkee",
// };

// for (const key in person) {
//   console.log(person[key]);
// }

// //10.
// setTimeout(() => {
//   console.log("Time's up!");
// }, 2000);
