// console.log("hello world")

const URL = "https://jsonplaceholder.typicode.com/pos";



// async await 

async function fetchPosts() {
    try {
        const response = await fetch(URL);
        console.log(response);
        if(!response.ok) {
            throw new Error("Something went wrong")
        }
        const data = await response.json(); // convert json to js data
        console.log(data);
    } catch (error) {
        console.log("inside catch block")
        console.log(error)
    }
}

fetchPosts();