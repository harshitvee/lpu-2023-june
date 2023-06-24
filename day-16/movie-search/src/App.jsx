import { useState } from "react";

import "./App.css";
import MovieSearchForm from "../MovieSearchForm";
import MoviesList from "./MoviesList";
// https://www.omdbapi.com/?s=spiderman&apikey=api_key

function App() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    function updateMovies(newMovieArray) {
        setMovies(newMovieArray);
    }

    return (
        <>
            <MovieSearchForm
                setIsLoading={setIsLoading}
                updateMovies={updateMovies}
            />
            {isLoading ? <h1>Loading ...</h1> : <MoviesList movies={movies} />}
        </>
    );
}

export default App;
