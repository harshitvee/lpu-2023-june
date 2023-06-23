import React from "react";
import MovieCard from "./MovieCard";
import styles from "./MoviesList.module.css";
function MoviesList({ movies }) {
    return (
        <div className={`container ${styles.moviesList}`}>
            {movies.map((movie) => {
                return <MovieCard key={movie.imdbID} {...movie} />;
            })}
        </div>
    );
}

export default MoviesList;
