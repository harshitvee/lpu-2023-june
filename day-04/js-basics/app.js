// const , let, var
// rules for naming variables

// you cannot start with number
// _,$
// let $name = "harshit";
// console.log($name);

// camelCase convention
// snake_case convention

// const firstName = "Harshit";
// const age = 25;

// const about = "User name is " + firstName + " and his age is " + age;
// console.log(about);

// const about = `user name is ${firstName} and his age is ${age}`;
// console.log(about);
// console.log(firstName[firstName.length - 2]);
// console.log(firstName[firstName.length - 1]);

// let nme;
// let age = 12;
// age = 14;

// let array1 = [1, 2, 3, 4, "five", null, undefined];
// primitives , refernce data types

// number, null, undefined, string, symbol , bigInt, boolean

// ----------- stack of memory -----------------
// age : 4 + 1
// age2 : 4

// -----------------------------------------------

// let age = 4;
// let age2 = age;
// age = age + 1;

// console.log(age, age2);
// age : 5
// age2 : 4

// reference data types

// array, object, function

// reference data types

// stack

// numbers: 0x112
// numbers2 : 0x112

// ----------------  heap ---------------------

// 0x112 : [1,2,3,4, 77]

//

// const numbers = [1, 2, 3, 4];
// const numbers2 = [1, 2, 3];
// numbers.push(77);
// console.log(numbers);
// console.log(numbers2);

// const fruits = ["apple", "grapes", "mango"];

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

// for (let fruit of fruits) {
//     console.log(fruit);
// }

// let timeoutId = null;

// if (timeoutId) {
//     console.log(timeoutId);
// } else {
//     console.log("inside else");
// }

let myvariable1 = 25.56;
let myvariable2 = "my string";
let myvariable3;
let myvariable4 = null;
let myvariable5 = true;

// typeof null ---> object

// console.log(typeof myvariable5);

// const obj1 = {
//     name: "harshit",
//     age: 25,
// };

// function hello() {
//     console.log("hello world");
// }

// const array1 = [1, 2, 3];

// console.log(typeof obj1);

// console.log(Array.isArray(array1));

// const userData = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 19,
//     address: "2661, City, State, country",
//     "new property": "value for new property",
// };

// console.log(userData);
// console.log(userData.firstName);
// console.log(userData.lastName);
// console.log(userData.age);
// console.log(userData.address);

// bracket notation
// console.log(userData["new property"]);

// console.log(userData["firstName"]);

// const userData2 = {};

// userData2.name = "Jane";
// userData2.age = 23;
// userData2.gender = "Female";

// console.log(userData2);

// const userData = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 19,
//     address: "2661, City, State, country",
// };

// for in loop

// for (let key in userData) {
//     // console.log(key);
//     // console.log(userData.key);
//     console.log(userData[key]);
// }

// function declaration

// function expresssion

// arrow function

// function declaration

// function hello() {
//     console.log("hello world");
// }

// function add(a, b) {
//     return a + b;
// }

// const ans = add(7, 8);

// console.log(ans);

// function expression

// let mul = function (a, b) {
//     return a * b;
// };

// arrow function

const add = function (a, b) {
    return a + b;
};

const addArrow = (a, b) => {
    return a + b;
};

// const isEven = (a) => {
//     return a % 2 === 0;
// };

// implicit return

const mul = (a, b) => a * b;

// you can avoid paranthesis if function has only one param

const isEven = a => a % 2 === 0;

// console.log(add(5, 6));
// console.log(addArrow(5, 6));
// console.log(isEven(3));

// console.log(mul(2, 3));


// == vs ===

let var1 = "5";

let var2 = 5;

// when we use == , it compares value only , not data type

// console.log(var1 == var2);

// when we use === it checks both value and data type
// console.log(var1 === var2)


// clone an array 

const nums1 = [1,2,3];
const nums2 = [...nums1];

console.log(nums1)
console.log(nums2)

