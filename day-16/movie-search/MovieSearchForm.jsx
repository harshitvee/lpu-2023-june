import { useState } from "react";
import axios from "axios";
function MovieSearchForm({ updateMovies, setIsLoading }) {
    const [movieName, setMovieName] = useState("");
    async function fetchMovies() {
        setIsLoading(true);
        const response = await axios.get(
            `https://www.omdbapi.com/?s=${movieName}&apikey=${
                import.meta.env.VITE_API_KEY
            }`
        );
        updateMovies(response.data.Search);
        setIsLoading(false);
    }
    function handleSubmit(e) {
        e.preventDefault();
        fetchMovies();
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={movieName}
                onChange={(e) => {
                    setMovieName(e.target.value);
                }}
            />
            <button>Search</button>
        </form>
    );
}

export default MovieSearchForm;
