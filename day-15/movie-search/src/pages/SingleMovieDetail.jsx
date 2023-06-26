import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import LoadingSpinner from "../assets/LoadingSpinner.svg";
import styles from "./SingleMovieDetail.module.css";
// 1. imdb id (moveCard)
// 2. i parameter
function SingleMovieDetail() {
    const { imdbid } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [movieDetail, setMovieDetail] = useState({});
    async function fetchMovieDetails() {
        const URL = `https://www.omdbapi.com/?i=${imdbid}&apikey=${
            import.meta.env.VITE_API_KEY
        }`;
        try {
            const response = await axios.get(URL);
            if (response.data.Response === "False") {
                throw new Error(response.data.Error);
            }
            setMovieDetail(response.data);
        } catch (error) {
            console.log(error.message);
        } finally {
            setIsLoading(false);
        }
    }
    useEffect(() => {
        fetchMovieDetails();
    }, []);

    if (isLoading) {
        return (
            <img
                src={LoadingSpinner}
                alt="Loading..."
                className="loadingSpinner"
            />
        );
    }
    return (
        <div className={`container ${styles.movieDetail}`}>
            <div className={styles.infoOnLeft}>
                <h2>{movieDetail.Title}</h2>
                <img src={movieDetail.Poster} alt={movieDetail.Title} />

                <p className={styles.infoPara}>
                    <span className={styles.key}>Release Date </span>
                    <span className={styles.value}>{movieDetail.Released}</span>
                </p>
                <p className={styles.infoPara}>
                    <span className={styles.key}> Genre </span>
                    <span className={styles.value}> {movieDetail.Genre}</span>
                </p>
                <p className={styles.infoPara}>
                    <span className={styles.key}>Runtime </span>
                    <span className={styles.value}> {movieDetail.Runtime}</span>
                </p>
                <p className={styles.infoPara}>
                    <span className={styles.key}>Language </span>
                    <span className={styles.value}>{movieDetail.Language}</span>
                </p>

                <p className={styles.infoPara}>
                    <span className={styles.key}>Awards </span>
                    <span className={styles.value}> {movieDetail.Awards}</span>
                </p>
            </div>
            <div className={styles.infoOnright}>
                <div className="plot">
                    <div className={styles.bigInfo}>
                        <h3>Plot</h3>
                        <p>{movieDetail.Plot}</p>
                    </div>
                    <div className={styles.bigInfo}>
                        <h3>Actors</h3>
                        <p>{movieDetail.Actors}</p>
                    </div>
                    <div className={styles.bigInfo}>
                        <h3>Country</h3>
                        <p>{movieDetail.Country}</p>
                    </div>
                    <h2>More Info</h2>
                    <p className={styles.infoPara}>
                        <span className={styles.key}>Director </span>
                        <span className={styles.value}>
                            {movieDetail.Director}
                        </span>
                    </p>
                    <p className={styles.infoPara}>
                        <span className={styles.key}>imdb Rating </span>
                        <span className={styles.value}>
                            {movieDetail.imdbRating}
                        </span>
                    </p>
                    <p className={styles.infoPara}>
                        <span className={styles.key}>imdb Votes </span>
                        <span className={styles.value}>
                            {movieDetail.imdbVotes}
                        </span>
                    </p>
                    <p className={styles.infoPara}>
                        <span className={styles.key}>Boxoffice </span>
                        <span className={styles.value}>
                            {movieDetail.BoxOffice}
                        </span>
                    </p>
                    <p className={styles.infoPara}>
                        <span className={styles.key}>Metascore</span>
                        <span className={styles.value}>
                            {movieDetail.Metascore}
                        </span>
                    </p>
                    <p className={styles.infoPara}>
                        <span className={styles.key}>Rated</span>
                        <span className={styles.value}>
                            {movieDetail.Rated}
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SingleMovieDetail;
