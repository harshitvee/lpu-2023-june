// function ricePromise() {
//     const bucket = ["coffee", "chilly powder", "rice", "water"];
//     return new Promise((resolve, reject) => {
//         if (bucket.includes("rice") && bucket.includes("water")) {
//             resolve("Rice");
//         } else {
//             reject("Could not cook");
//         }
//     });
// }

// ricePromise()
//     .then((value) => {
//         console.log("lets eat", value);
//     })
//     .catch((value) => {
//         console.log(value);
//     });

// promise chaining

// then method , always returns promise
function myPromise() {
    return new Promise((resolve, reject) => {
        resolve("foo");
    });
}

myPromise()
    .then((value) => {
        console.log("first then", value);
        value += "bar";
        // return Promise.resolve(value); // internally this is hapenning.
        return value;
    })
    .then((value) => {
        console.log("second then", value);
        value += "baz"; // foobar
        // return Promise.resolve(value)
        return value;
        // return Promise.reject("rejected");
    })
    .then((value) => {
        console.log("third then", value);
        value += "bas";
        return value;
    })
    .then((value) => {
        console.log("final then", value);
    })
    .catch((value) => {
        console.log("catch block", value);
    });
