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

const todos = [
    {
        id: 1,
        title: "Teach React to students",
        completed: true,
    },
    {
        id: 2,
        title: "Breakfast",
        completed: true,
    },
    {
        id: 1,
        title: "Go to bank",
        completed: false,
    },
];

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
const completedTodos = todos.filter(todo => todo.completed);
console.log(completedTodos);
