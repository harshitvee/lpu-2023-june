import "./App.css";
// import CounterApplication from "./CounterApplication";
// useMemo

// 1. prevent re-work for heavy computations
import PrimeNumber from "./PrimeNumber";

function App() {
    return (
        <div className="card">
            {/* <CounterApplication /> */}
            <PrimeNumber />
        </div>
    );
}

export default App;
