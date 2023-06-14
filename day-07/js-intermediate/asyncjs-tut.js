// promise --> future value

// promise : I will make you rice

// state of promise

// 1. pending
// 2. fullfiled / resolve
// 3. reject
console.log("script start");
const bucket = ["coffee", "chilly powder", "", "water"];

// How to create promise (5%)

const ricePromise = new Promise((resolve, reject) => {
    if (bucket.includes("rice") && bucket.includes("water")) {
        resolve("Rice");
    } else {
        reject("Could not cook");
    }
});

// How to consume promise (95%)
ricePromise
    .then((value) => {
        console.log("lets eat", value);
    })
    .catch((value) => {
        console.log(value);
    });

setTimeout(() => {
    console.log("hello from set time out");
}, 0);

// queue 1 (for setTimeouts ) : callback queue
// queue 2 (for promises) : micro task

console.log("script end");
