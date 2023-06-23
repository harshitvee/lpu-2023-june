import { useState } from "react";
import styles from "./MovieSearchForm.module.css";
function MovieSearchForm() {
    const [movieName, setMovieName] = useState("");
    return (
        <form className={`container ${styles.form}`}>
            <input
                type="text"
                onChange={(e) => setMovieName(e.target.value)}
                value={movieName}
            />
            <button type="submit">Search</button>
        </form>
    );
}

export default MovieSearchForm;
