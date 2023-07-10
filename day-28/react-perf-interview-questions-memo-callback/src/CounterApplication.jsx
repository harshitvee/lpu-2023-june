import { useState } from "react";
import ShowCount from "./ShowCount";
import PureReactLogo from "./ReactLogo";

// why this is not default react behaviour for all components ?

// should I render it or not ?
// compare props from current snapshot and upcoming snapshot (t2 times )

// render takes (t1 time)

// t2 > t1

function CounterApplication() {
    const [count, setCount] = useState(0);

    return (
        <>
            <PureReactLogo />
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    Increase
                </button>
                <ShowCount count={count} />
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    );
}

export default CounterApplication;
