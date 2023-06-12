// console.log("hello world")

// const , let , var

// const
// let
// var

// const firstname = "john";
// firstname = "jane"
// console.log(firstname)

// let firstname = "john";
// let firstname = "jane"
// console.log(firstname)

// var firstname = "john";
// var firstname = "jane"
// console.log(firstname)

// rules for naming variable

// const 1name = "john"
// const name1 = "john"

// const name = "something"

// const firstName = "john"

// data types

// const myvar1 = 12;

// const myvar2 = "12";

// == (only check values)

// === (check values and data type both)

// 95 % ===
// 5 ==
// console.log(myvar1 == myvar2);

// primitives
// number, string, null, undefined, boolean , bigInt, symbol

// const myvar = 12.12; // number
// const myvar = "12.12"; // string

// const myvar = null; // object // error

// let myvar; // undefined

// const is18 = true;

// console.log(typeof is18)

// reference data types

// truthy and falsy values

// "", 0, null, undefined ---> falsy

// let myVar = undefined;

// if (myVar) {
//     console.log("inside if");
// } else {
//     console.log("inside else");
// }

// refernce data types

// array ---> [1,2, "three", [1,2], null, undefined, function(){}]

// const myArray = [1, 2, 3];

// push -> append at last
// pop --> remove from last

// myArray.push("four");

// const poppedItem = myArray.pop();
// console.log(myArray);
// console.log(poppedItem);

// console.log(typeof myArray);

// console.log(Array.isArray(myArray));

// reference data types

// array -> [1,2]
// object -> {}
// function -> function , () => {}

// primitives vs refernce types

// ---------------- stack of memory ---------------

// myArray = 0x123
// myArray2 = 0x123

// ------------------------------------------------

// ---------------- heap --------------------------

// 0x123 : [1, 2, 3, "four"]

// ------------------------------------------------

// primitives

// let num = 12;
// let num2 = num;
// num = num + 1;
// console.log(num);
// console.log(num2);

// referene data types

// let myArray = [1, 2, 3];
// let myArray2 = myArray;

// myArray.push("four");
// console.log(myArray);
// console.log(myArray2);

// strings are immutable

// arrays are mutable

// array = [1,2,3,19];

// how to iterate arrays

const fruits = ["apple", "mango", "grapes"];

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

// for of loop

// for (let abc of fruits) {
//     console.log(abc);
// }
