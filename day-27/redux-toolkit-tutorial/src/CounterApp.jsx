// mutable ds array, object, function's prototype

// immutable : numbers, strings, null, undefined

import { useSelector, useDispatch } from "react-redux";
import {
    increaseCount,
    decreaseCount,
    resetCount,
} from "./feature/counter/counterSlice";

function CounterApp() {
    const dispatch = useDispatch();
    const { count } = useSelector((state) => {
        return state.counter;
    });

    return (
        <>
            <h1>Counter Application using redux-toolkit</h1>
            <h1>Count : {count}</h1>
            <button onClick={() => dispatch(increaseCount())}>Increase</button>
            <button onClick={() => dispatch(resetCount())}>Reset</button>
            <button onClick={() => dispatch(decreaseCount())}>Decrease</button>
        </>
    );
}

export default CounterApp;
