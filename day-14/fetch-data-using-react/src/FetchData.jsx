import { useEffect, useState } from "react";

function FetchData() {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    async function fetchPosts() {
        try {
            const URL = " https://jsonplaceholder.typicode.com/postsss";
            const response = await fetch(URL);
            // response (JSON) => javascript object (js object/ array)
            const data = await response.json();
            if (!response.ok) {
                throw new Error(`something went wrong ${response.status}`);
            }
            setPosts(data);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            setIsError(true);
            setErrorMessage(error.message);
        }
    }
    useEffect(() => {
        fetchPosts();
    }, []);

    if (isLoading) {
        return <h1>Loading .......</h1>;
    }
    if (isError) {
        return <h1>{errorMessage}</h1>;
    }
    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "1rem",
            }}
        >
            {posts.map((post) => (
                <div
                    key={post.id}
                    style={{
                        backgroundColor: "lightgray",
                        padding: "1rem",
                        borderRadius: "1rem",
                    }}
                >
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    );
}

export default FetchData;
