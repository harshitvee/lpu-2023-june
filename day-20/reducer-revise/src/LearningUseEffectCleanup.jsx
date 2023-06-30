import { useReducer, useEffect } from "react";
import "./App.css";

// reducer + cotext syntax ----> (redux toolkit)

function reducer(count, action) {
    if (action.type === "INCREASE") {
        return count + 1;
    }
    if (action.type === "RESET") {
        return 0;
    }
    if (action.type === "DECREASE") {
        return count - 1;
    }
}

// useEffect ---> side Effects (things which are not directly connected to react)

// useEffect --> data fetching , event listeners add

function LearningUseEffectCleanup() {
    const [count, dispatch] = useReducer(reducer, 0);
    useEffect(() => {
        function changeBackground(e) {
            e.target.style.background = "blue";
        }
        document.body.addEventListener("click", changeBackground);

        return function () {
            document.body.removeEventListener("click", changeBackground);
        };
    }, []);
    return (
        <>
            <h1>{count}</h1>
            <button
                onClick={() => {
                    dispatch({ type: "INCREASE" });
                }}
            >
                Increase
            </button>
            <button
                onClick={() => {
                    dispatch({ type: "RESET" });
                }}
            >
                Reset
            </button>
            <button
                onClick={() => {
                    dispatch({ type: "DECREASE" });
                }}
            >
                Decrese
            </button>
        </>
    );
}

export default LearningUseEffectCleanup;
