// function func() {
//     console.log("hello from func");
// }

// console.dir(func);

// const func = () => {
//     console.log("hello from func");
// };

// console.dir(func);

// [1,2,3].map(()=>{})

// higher order functions

// map, filter, reduce

// const data = [{}, {}, {}];

const myVar = 21;

function myFunc() {
    function nestedFunc() {
        const myVar = 54;
        function deeplyNestedFunc() {
            const myVar = 78;
            console.log(myVar);
        }
        deeplyNestedFunc();
    }
    nestedFunc();
}

myFunc();

console.log(myVar);
