import React from "react";
import MovieCard from "./MovieCard";

function MoviesList({ movies }) {
    return (
        <div className="movies">
            {movies.map((movie) => {
                return <MovieCard {...movie} />;
            })}
        </div>
    );
}

export default MoviesList;
