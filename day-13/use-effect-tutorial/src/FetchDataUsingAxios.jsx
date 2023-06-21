import { useState, useEffect } from "react";
import loadingSpinner from "./assets/loadingSpinner.svg";
import axios from "axios";
// api : application programming interface
// rest : representation state transfer

// HTTP verbs
// GET
// POST
// PUT
// PATCH
// DELETE

// status codes
// 200 : OK
// 201 : resourse created
// 400 : Error
// 401 : Unautorized ( token not provided )
// 422 : Unprocessable Entity

// client (browser, terminal , postman ) : send request to server

// server (Node js, python django, php, java spring) : send response to client

// endpoint: jsontypeicode/posts,
// method : get
// send json response : {}

function FetchDataUsingAxios() {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    async function fetchPosts() {
        try {
            const URL = "https://jsonplaceholder.typicode.com/posts";
            const response = await axios.get(URL);
            setPosts(response.data);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            setIsError(true);
        }
    }
    useEffect(() => {
        setTimeout(fetchPosts, 3000);
    }, []);

    if (isLoading) {
        return (
            <div>
                <img src={loadingSpinner} />
            </div>
        );
    }
    if (isError) {
        return <h1> Something went wrong</h1>;
    }
    return (
        <div>
            {posts.map((post) => {
                return (
                    <article key={post.id}>
                        <h2> {post.title}</h2>
                        <p>{post.body} </p>
                    </article>
                );
            })}
        </div>
    );
}

export default FetchDataUsingAxios;
