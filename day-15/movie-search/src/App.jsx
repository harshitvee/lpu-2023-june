import { useState } from "react";
import "./App.css";
import LoadingSpinner from "./assets/LoadingSpinner.svg";
// console.log(import.meta.env.VITE_API_KEY);
import MovieSearchForm from "./MovieSearchForm";
import MoviesList from "./MoviesList";

function App() {
    const [isLoading, setIsLoading] = useState(false);
    const [movies, setMovies] = useState([]);
    function addNewMovies(newMoviesArray) {
        setMovies(newMoviesArray);
    }
    return (
        <div>
            <MovieSearchForm
                addNewMovies={addNewMovies}
                setIsLoading={setIsLoading}
            />
            {isLoading ? (
                <img
                    src={LoadingSpinner}
                    alt="Loading..."
                    className="loadingSpinner"
                />
            ) : (
                <MoviesList movies={movies} />
            )}
        </div>
    );
}

export default App;
