import { useState } from "react";

import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    function handleIncrease() {
        // setCount(count + 1);
        // callback way
        // setCount((prevCount) => {
        //     return prevCount + 1;
        // });
        // use implicit return
        setCount((prevCount) => prevCount + 1);
    }

    function handleReset() {
        setCount(0);
    }
    return (
        <div style={{ textAlign: "center" }}>
            <h1>{count}</h1>
            <button onClick={handleIncrease}>Increase</button>
            <button onClick={handleReset}>Reset</button>
            <button
                onClick={() => {
                    setCount((prevCount) => prevCount - 1);
                }}
            >
                Decrease
            </button>
        </div>
    );
}

export default App;
