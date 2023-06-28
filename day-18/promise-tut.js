console.log("Script start");

// promise (browser)

// setTimeout (browser)

console.log("script end");

// js file complete execute --> promise ---> setTimeout

// promise --- > future value

// promise consume , promise create

// promise consume
// fetch() return promise
// axios.get(), axios.post() return promise

// pending , fulfilled , reject

// fetch("https://jsonplaceholder.typicode.com/todosss/1")
//     .then((response) => {
//         if (!response.ok) {
//             throw Error("Something went wrong");
//         } else return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error) => {
//         console.log(error.message);
//     });

// axios
//     .get("https://jsonplaceholder.typicode.com/todosss/1")
//     .then((response) => {
//         console.log(response.data);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// if you don't want to use then and catch you can use asyn await

// async function fetchTodo() {}

const fetchTodo = async () => {
    try {
        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/todosss/1"
        );
        console.log(response.data);
    } catch (error) {
        console.log(error.message);
    }
};

fetchTodo();
