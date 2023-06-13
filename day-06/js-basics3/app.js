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

// const fruits = ["apple", "mango", "grapes"];

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

// for of loop

// for (let abc of fruits) {
//     console.log(abc);
// }

// for in loop

// for (let index in fruits) {
//     console.log(index);
// }

// object

// const userData = {
//     firstName: "Harshit",
//     lastName: "Vashisth",
//     gender: "Male",
//     age: 8,
//     hobbies: ["Guitar", "Swimming"],
//     "some key": "some value",
// };

// console.log(userData.hobbies[0]);
// access keys

// console.log(userData.gender);

// dot notation

// bracket notation

// console.log(userData["some key"]);
// console.log(userData["hobbies"]);

// how to iterate in object

// for in loop

// for (let key in userData) {
//     // console.log(key);
//     // console.log(userData[key]);
//     // const ans = "key : " + key + " , " + "value : " + userData[key];
//     const ans = `key: ${key}, value: ${userData[key]}`;
//     console.log(ans);
// }

// spread operator
// clone an array
// clone an object

// array destructuring
// object destructuring

// const array1 = [1, 2, 3];
// const array2 = [...array1, "array 2 unique item"];

// console.log(array1);
// console.log(array2);

// object , array  --- > reference types

// stack

// userData : 0x123456
// userData2 : 0x123456

// ~~~~~~~~~~~~~~~~~~~~~~` heap  ~~~~~~~~~~~~~~~~~`

// 0x123456 = {
//     firstName: "Harshit",
//     lastName: "Vashisth",
//     gender: "Male",
//     age: 8,
//     hobbies: ["Guitar", "Swimming"],
// };

// 0x123457  = {
//         firstName: "Harshit",
//     lastName: "Vashisth",
//     gender: "Male",
//     age: 8,
//     hobbies: ["Guitar", "Swimming"],
// };

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// const userData1 = {
//     firstName: "Harshit",
//     lastName: "Vashisth",
//     gender: "Male",
//     age: 8,
//     hobbies: ["Guitar", "Swimming"],
// };

// const newUserData = {
//     ...userData1,
//     firstName: "Jane",
//     gender: "female",
//     occupation: "music teacher",
// };

// console.log(newUserData);

// const array1 = ["item 1", "item 2", "item3", "item4"];

// let [myVar1, myVar2, ...restitems] = array1;

// console.log(myVar1);
// console.log(myVar2);
// console.log(restitems);

// const userData1 = {
//     firstName: "Harshit",
//     lastName: "Vashisth",
//     gender: "Male",
//     age: 8,
//     hobbies: ["Guitar", "Swimming"],
// };

// const { firstName: fName, lastName } = userData1;

// console.log(fName);

// functions

// 1. function declaration

// 2. function expression

// 3. arrow functions

// ~~~~~~~~~~~~~ function declaration ~~~~~~~~~~~~~~
function greeting(username) {
    return `hello ${username}`;
}

// ~~~~~~~~~` function expression ~~~~~~~~~~~~~~`

// you can store function inside variable

const greeting2 = function (username) {
    return `hello ${username}`;
};

// ~~~~~~~~~~~~~~` arrow function ~~~~~~~~~~~~~~~~~~~~`

const greeting3 = (username) => {
    return `hello ${username}`;
};

// imlicit return in arrow functions

const greeting4 = (username) => `hello ${username}`;

// you can avoid parameter's paranthesis if there is only one parameter

const greeting5 = username => `hello ${username}`;

const sum = (num1, num2) => num1 + num2;

const ans = sum(4,5);
console.log(ans);
