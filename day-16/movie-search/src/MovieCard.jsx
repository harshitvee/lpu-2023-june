import React from "react";

function MovieCard({ Poster, Title }) {
    return (
        <div>
            <img src={Poster} alt={Title} />
            <h3> {Title}</h3>
        </div>
    );
}

export default MovieCard;
