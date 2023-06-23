import React from "react";

function MoviesList({ movies }) {
    return (
        <div>
            {movies.map((movie) => {
                return <p>{movie.Title}</p>;
            })}
        </div>
    );
}

export default MoviesList;
