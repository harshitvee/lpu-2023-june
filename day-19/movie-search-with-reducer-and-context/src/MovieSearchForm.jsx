import { useState } from "react";
import styles from "./MovieSearchForm.module.css";
import axios from "axios";
function MovieSearchForm({ dispatch }) {
    const [movieName, setMovieName] = useState("");
    async function fetchMovies() {
        const URL = `https://www.omdbapi.com/?s=${movieName}&apikey=${
            import.meta.env.VITE_API_KEY
        }`;

        // setIsLoading(true);
        dispatch({ type: "SET_IS_MOVIE_LOADING", payload: true });
        // setIsError(false);
        dispatch({ type: "SET_IS_ERROR", payload: false });
        try {
            const response = await axios.get(URL);
            // Response : true / false
            if (response.data.Response === "False") {
                throw new Error(response.data.Error);
            }
            // addNewMovies(response.data.Search);
            dispatch({
                type: "ADD_NEW_MOVIES",
                payload: response.data.Search,
            });
        } catch (error) {
            // setIsError(true);
            dispatch({ type: "SET_IS_ERROR", payload: true });
            // setErrorMessage(error.message);
            dispatch({ type: "SET_ERROR_MESSAGE", payload: error.message });
        } finally {
            dispatch({ type: "SET_IS_MOVIE_LOADING", payload: false });
        }
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
                placeholder="Movie Name"
            />
            <button type="submit">Search</button>
        </form>
    );
}

export default MovieSearchForm;
