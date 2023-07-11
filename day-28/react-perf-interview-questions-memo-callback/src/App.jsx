import { useState, useMemo } from "react";
import "./App.css";
// import CounterApplication from "./CounterApplication";
// useMemo

// 1. prevent re-work for heavy computations
// import PrimeNumber from "./PrimeNumber";
import DemoUseMemo from "./DemoUseMemo";
function App() {
    const [count, setCount] = useState(0);
    const names = useMemo(() => ["harshit", "john"]);

    return (
        <div className="card">
            <button onClick={() => setCount(count + 1)}>
                Increase, {count}
            </button>
            <DemoUseMemo names={names} />
        </div>
    );
}

export default App;
