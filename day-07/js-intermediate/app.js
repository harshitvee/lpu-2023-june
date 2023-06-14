// const todos = [
//     {
//         id: 1,
//         title: "Teach React to students",
//         completed: true,
//     },
//     {
//         id: 2,
//         title: "Breakfast",
//         completed: false,
//     },
//     {
//         id: 1,
//         title: "Go to bank",
//         completed: false,
//     },
// ];

// const titles = todos.map( todo => {
//     return todo.title;
// })

// const titles = todos.map( todo => todo.title)

// const updatedTodos = todos.map(todo => {
//     return {...todo, completed: !todo.completed}
// })

// implicit return when you want to return object from arrow function

// const updatedTodos = todos.map((todo) => ({
//     ...todo,
//     completed: !todo.completed,
// }));

// console.log(updatedTodos);

// filter method

// const todos = [
//     {
//         id: 1,
//         title: "Teach React to students",
//         completed: true,
//     },
//     {
//         id: 2,
//         title: "Breakfast",
//         completed: true,
//     },
//     {
//         id: 1,
//         title: "Go to bank",
//         completed: false,
//     },
// ];

// filter's method callback function should always return boolean value

// const completedTodos = todos.filter((todo) => {
//     if (todo.completed) {
//         return true;
//     } else {
//         return false;
//     }
// });

// const completedTodos = todos.filter((todo) => {
//     return todo.completed;
// });

// implicit return
// const completedTodos = todos.filter(todo => todo.completed);
// const filterTodoWithBreafastTitle = todos.filter(todo => todo.title === "Breakfast");
// console.log(filterTodoWithBreafastTitle);

// reduce method

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// map => array
// filter => array
// reduce => value
// const initialValue = 10;

// ac + cur
// 0  +  1 ==> 1
// 1  +  2 ==> 3
// 3  +  3 ==> 6
// 6  +  4 ==> 10

// const sum = nums.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// }, 0);

// console.log(sum);

// const shoppingCart = [
//     { id: 1, productName: "Macbook Air", price: 20000 },
//     { id: 2, productName: "Macbook Pro", price: 21000 },
//     { id: 2, productName: "Macbook Pro Max", price: 22000 },
// ];

//  acc      curr.price
//  0     +  20000 ===> 20000
//  20000 +  21000 ===> 41000
//  41000 +  22000 ===> 63000

// const totalAmount = shoppingCart.reduce((acc, currentValue) => {
//     return acc + currentValue.price;
// }, 0);

// map, filter, reduce ==> they don't mutate/change original array

// "Macbook Air Macbook Pro Macbook Pro Max"

// acc       +        curr.name     +   " "
// ""         +       Macbook Air     +     " " ==> "Macbook Air "
// "Macbook Air "     Macbook pro     +     " " ==> Macbook Air Mb Pro

// const fatStringOfCartItems = shoppingCart.reduce((acc, currentValue) => {
//     return acc + currentValue.productName + " ";
// }, "");

// console.log(fatStringOfCartItems);

// forEach

// const fruits = ["apple", "mango", "grapes"];

// fruits.forEach((fruit, index) => {
//     console.log("index number", index);
//     console.log(fruit.toUpperCase());
// });

// for, for of, forEach

// async javascript
