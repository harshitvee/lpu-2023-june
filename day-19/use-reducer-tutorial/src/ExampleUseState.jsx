import { useState } from "react";

function ExampleUseState() {
    const [count, setCount] = useState(0);
    function handleIncrease() {
        setCount((count) => count + 1);
    }
    function handleDecrease() {
        setCount((count) => count - 1);
    }

    function handleReset() {
        setCount(0);
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleIncrease}>increase</button>
            <button onClick={handleReset}>reset</button>
            <button onClick={handleDecrease}>decrease</button>
        </div>
    );
}

export default ExampleUseState;
