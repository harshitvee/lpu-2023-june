import { useState } from "react";
import styles from "./MovieSearchForm.module.css";
import axios from "axios";
function MovieSearchForm({ addNewMovies, setIsLoading }) {
    const [movieName, setMovieName] = useState("");
    async function fetchMovies() {
        const URL = `https://www.omdbapi.com/?s=${movieName}&apikey=${
            import.meta.env.VITE_API_KEY
        }`;
        setIsLoading(true);
        const response = await axios.get(URL);
        setIsLoading(false);
        addNewMovies(response.data.Search);
    }
    function handleSubmit(e) {
        e.preventDefault();
        fetchMovies();
    }
    return (
        <form className={`container ${styles.form}`} onSubmit={handleSubmit}>
            <input
                type="text"
                onChange={(e) => setMovieName(e.target.value)}
                value={movieName}
            />
            <button type="submit">Search</button>
        </form>
    );
}

export default MovieSearchForm;
