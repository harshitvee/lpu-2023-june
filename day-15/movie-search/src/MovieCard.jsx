import React from "react";
import styles from "./MovieCard.module.css";
// Title
// Year
// imdbID
// Type
// Poster
function MovieCard({ Title, Year, imdbID, Type, Poster }) {
    return (
        <div className={styles.movieCard}>
            <img
                src={
                    Poster === "N/A"
                        ? "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.iQs2Y6KaCvvRLfhhULXsrwHaLD%26pid%3DApi&f=1&ipt=77720d684ff9f868dc3ec3a79eac87430c1b297981428b95dde9647b5935ec49&ipo=images"
                        : Poster
                }
                alt=""
                className={styles.moviePoster}
            />
            <h2 className={styles.movieTitle}>{Title}</h2>
            <h4 className={styles.movieYear}>{Year}</h4>
            <h4 className={styles.movieType}>{Type}</h4>
        </div>
    );
}

export default MovieCard;
