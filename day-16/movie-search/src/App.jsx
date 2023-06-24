import { useState } from "react";
import axios from "axios";
import "./App.css";

// https://www.omdbapi.com/?s=spiderman&apikey=api_key

function App() {
    const [movieName, setMovieName] = useState("");
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    // function handleChange(e) {
    //     setMovieName(e.target.value);
    async function fetchMovies() {
        setIsLoading(true);
        const response = await axios.get(
            `https://www.omdbapi.com/?s=${movieName}&apikey=${
                import.meta.env.VITE_API_KEY
            }`
        );
        setMovies(response.data.Search);
        setIsLoading(false);
    }
    function handleSubmit(e) {
        e.preventDefault();
        fetchMovies();
    }
    // }
    return (
        <>
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
            {isLoading ? (
                <h1>Loading ...</h1>
            ) : (
                <div className="movies">
                    {movies.map((movie) => {
                        return (
                            <div>
                                <img src={movie.Poster} alt={movie.title} />
                                <h3> {movie.Title}</h3>
                            </div>
                        );
                    })}
                </div>
            )}
        </>
    );
}

export default App;
