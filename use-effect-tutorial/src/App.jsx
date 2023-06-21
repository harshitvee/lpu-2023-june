import "./App.css";

import { useEffect, useState } from "react";

// useEffect hook

// useEffect args
// 1. callback function
// 2. dependency array (optional )

// case 1 : useEffect without dependency array

// case 2 : useEffect with dependency array

// case 3 : useEffect with empty dependency array

function App() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    // useEffect(() => {
    //     console.log("Component redered");
    // });

    // useEffect(() => {
    //     console.log("Component redered");
    // }, [count1]);

    useEffect(() => {
        console.log("I ran after intial render");
    }, []);
    return (
        <>
            <div
                style={{
                    backgroundColor: "lightgray",
                    padding: "1rem",
                    margin: "1rem",
                }}
            >
                <button onClick={() => setCount1(count1 + 1)}>
                    increase count1
                </button>
                <h1>{count1}</h1>
            </div>

            <div
                style={{
                    backgroundColor: "lightcoral",
                    padding: "1rem",
                    margin: "1rem",
                }}
            >
                <button onClick={() => setCount2(count2 + 1)}>
                    increase count2
                </button>
                <h1>{count2}</h1>
            </div>
        </>
    );
}

export default App;
