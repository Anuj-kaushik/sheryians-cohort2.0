// //01.
// function runTwice(fn) {
//   fn();
//   fn();
// }
// runTwice(() => {
//   console.log("Hello");
// });

// //02.
// function pure(a, b) {
//   return a + b;
// }
// console.log(pure(1, 2));

// let global = 0;
// function impure(a) {
//   global++;
//   console.log(a + global);
// }

// impure(2);
// impure(2);
// impure(2);

// //03.
// function one({ name, age }) {
//   console.log(name, age);
// }
// one({ name: "Anuj", age: 20 });

// //04.
// console.log(this); // this -> window

// let obj = {
//   name: "Anuj",
//   fnc: function () {
//     console.log(this); // this -> current object
//   },
//   arfnc: () => {
//     console.log(this); // arrow function takes this value from its parent. this-> window
//   },
//   newFnc: function () {
//     let one = () => {
//       console.log(this); //this -> current object
//     };
//     one();
//     function two() {
//       console.log(this); // this -> window
//     }
//     two(); //window
//   },
// };

// obj.fnc();
// obj.arfnc();
// obj.newFnc();

// //05.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sqArr = arr.map((val) => val * val);
// console.log(sqArr);

// //06.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let evenArr = arr.filter((val) => !(val % 2));
// console.log(evenArr);

// //07.
// const salary = [1000, 2000, 3000];
// let totalSalary = salary.reduce((curr, acc) => acc + curr, 0);
// console.log(totalSalary);

// //08.
// let names = ["Joe", "John", "Smith"];
// let someName = names.some((val) => val.length > 3);
// console.log(someName);
// let everyName = names.every((val) => val.length > 3);
// console.log(everyName);

//09.
// let user = {
//   name: "a",
// };
// user.name = "b";
// console.log(user.name); // b

// Object.freeze(user);
// user.name = "c";
// console.log(user.name); // it will not change and also does not give error

// let user = {
//   name: "a",
// };
// Object.seal(user);
// user.name = "b"; // allowed
// user.age = 20; // not allowed

let nestedObj = {
  user: {
    address: {
      city: "Roorkee",
    },
  },
};

console.log(nestedObj.user.address.city);
//another way
let { city } = nestedObj.user.address;
console.log(city);
