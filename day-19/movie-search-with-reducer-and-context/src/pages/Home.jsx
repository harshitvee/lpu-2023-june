import { useState, useReducer } from "react";

import LoadingSpinner from "../assets/LoadingSpinner.svg";

import MovieSearchForm from "../MovieSearchForm";
import MoviesList from "../MoviesList";

const initialMovies = [
    {
        Title: "Captain America: The Winter Soldier",
        Year: "2014",
        imdbID: "tt1843866",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BMzA2NDkwODAwM15BMl5BanBnXkFtZTgwODk5MTgzMTE@._V1_SX300.jpg",
    },
    {
        Title: "Captain America: The First Avenger",
        Year: "2011",
        imdbID: "tt0458339",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BMTYzOTc2NzU3N15BMl5BanBnXkFtZTcwNjY3MDE3NQ@@._V1_SX300.jpg",
    },
    {
        Title: "Captain America: Civil War",
        Year: "2016",
        imdbID: "tt3498820",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg",
    },
    {
        Title: "Captain Marvel",
        Year: "2019",
        imdbID: "tt4154664",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_SX300.jpg",
    },
    {
        Title: "Captain Phillips",
        Year: "2013",
        imdbID: "tt1535109",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BODhiZWRhMjctNDUyMS00NmUwLTgwYmItMjJhOWNkZWQ3ZTQxXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    },
    {
        Title: "Captain Fantastic",
        Year: "2016",
        imdbID: "tt3553976",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BMjE5OTM0OTY5NF5BMl5BanBnXkFtZTgwMDcxOTQ3ODE@._V1_SX300.jpg",
    },
    {
        Title: "Sky Captain and the World of Tomorrow",
        Year: "2004",
        imdbID: "tt0346156",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BMTM0NDQzMDA1NF5BMl5BanBnXkFtZTcwNTU3ODAzMw@@._V1_SX300.jpg",
    },
    {
        Title: "Captain Corelli's Mandolin",
        Year: "2001",
        imdbID: "tt0238112",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BNzc0MmRmZDAtZWRjYi00ODM3LTllZDEtNjljMjNiMzgxZDcyXkEyXkFqcGdeQXVyNzQ5MzY0NjM@._V1_SX300.jpg",
    },
    {
        Title: "Captain Underpants: The First Epic Movie",
        Year: "2017",
        imdbID: "tt2091256",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BMmQwMzdiOGMtNGZiYS00YjgyLWJlMjItYzQ3Nzc2OGIwYjQwXkEyXkFqcGdeQXVyMzQ1MTM3NjY@._V1_SX300.jpg",
    },
    {
        Title: "Captain Ron",
        Year: "1992",
        imdbID: "tt0103924",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BOWZkYTk4YjAtZmViZS00ZTY5LWE2YmItOGQ3Y2Y0N2MzODkyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    },
];

const initialState = {
    isMoviesLoading: false,
    isError: false,
    movies: initialMovies,
    errorMessage: "",
};

function reducer(state, action) {
    switch (action.type) {
        case "SET_IS_MOVIE_LOADING": {
            return { ...state, isMoviesLoading: action.payload };
        }
        case "SET_IS_ERROR": {
            return { ...state, isError: action.payload };
        }
        case "ADD_NEW_MOVIES": {
            return { ...state, movies: action.payload };
        }
        case "SET_ERROR_MESSAGE": {
            return { ...state, errorMessage: action.payload };
        }
    }
    throw Error("Unknown action type" + action.type);
}

function Home() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { isMoviesLoading, isError, movies, errorMessage } = state;

    return (
        <div>
            <MovieSearchForm dispatch={dispatch} />
            {isMoviesLoading ? (
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
