import { useReducer, useEffect, useRef } from "react";
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
    // useEffect(() => {
    //     // function changeBackground(e) {
    //     //     e.target.style.background = "blue";
    //     // }
    //     // document.body.addEventListener("click", changeBackground);
    //     // return function () {
    //     //     document.body.removeEventListener("click", changeBackground);
    //     // };
    // }, []);

    // const [renderCount, setRenderCount] = useState(1);

    // -------------- To display the render count----
    const renderCount = useRef(1);
    useEffect(() => {
        console.log("component rendered");
        renderCount.current = renderCount.current + 1;
    });

    // ---------------------------------------------
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
            <h2>Render count : {renderCount.current}</h2>
        </>
    );
}

export default LearningUseEffectCleanup;
