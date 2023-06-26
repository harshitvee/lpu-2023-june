import { useState } from "react";

// import LoadingSpinner from "../assets/LoadingSpinner.svg";
import LoadingSpinner from "../assets/LoadingSpinner.svg";
// console.log(import.meta.env.VITE_API_KEY);
// import MovieSearchForm from "./MovieSearchForm";
import MovieSearchForm from "../MovieSearchForm";
import MoviesList from "../MoviesList";

function Home() {
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [movies, setMovies] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");
    function addNewMovies(newMoviesArray) {
        setMovies(newMoviesArray);
    }
    return (
        <div>
            <MovieSearchForm
                addNewMovies={addNewMovies}
                setIsLoading={setIsLoading}
                setIsError={setIsError}
                setErrorMessage={setErrorMessage}
            />
            {isLoading ? (
                <img
                    src={LoadingSpinner}
                    alt="Loading..."
                    className="loadingSpinner"
                />
            ) : (
                <>
                    {isError ? (
                        <h1
                            style={{ textAlign: "center", margin: "2rem auto" }}
                        >
                            {errorMessage}
                        </h1>
                    ) : (
                        <MoviesList movies={movies} />
                    )}
                </>
            )}
        </div>
    );
}

export default Home;
