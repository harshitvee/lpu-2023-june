import { useReducer } from "react";

// state manage -- > useState

// state manage --> useReducer (very very similar to redux)

// useReducer
// return an array 1. state, 2. dispatch
// [state, dispatch]

// useReducer args
// 1. reducer function ---> logic is written to update state
// 2. initial state

// const [state, disptach] = useReducer(reducer, initialState)

function reducer(state, action) {
    if (action.type === "INCREASE") {
        return state + 1;
    }
    if (action.type === "DECREASE") {
        return state - 1;
    }
    if (action.type === "RESET") {
        return 0;
    }
}

function LearningUseReducer() {
    const [state, dispatch] = useReducer(reducer, 0);
    function handleIncrease() {
        dispatch({ type: "INCREASE" });
    }
    function handleDecrease() {
        dispatch({ type: "DECREASE" });
    }
    function handleReset() {
        dispatch({ type: "RESET" });
    }
    return (
        <div>
            <h1>{state}</h1>
            <button onClick={handleIncrease}>increase</button>
            <button onClick={handleReset}>reset</button>
            <button onClick={handleDecrease}>decrease</button>
        </div>
    );

    // return (
    //     <div>
    //         <h1>{state}</h1>
    //         <button onClick={() => dispatch({ type: "INCREASE" })}>
    //             increase
    //         </button>
    //         <button onClick={() => dispatch({ type: "RESET" })}>reset</button>
    //         <button onClick={() => dispatch({ type: "DECREASE" })}>
    //             decrease
    //         </button>
    //     </div>
    // );
}

export default LearningUseReducer;
