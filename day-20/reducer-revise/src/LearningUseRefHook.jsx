// useState
// 1. store some state/value
// 2. when state changes it re-renders the component and it's child components

// useRef
// 1. store some state/value
// 2. when state changes it does not re-renders the component and it's child components

import React, { useRef } from "react";

function LearningUseRefHook() {
    const headingRef = useRef();
    function changeColor() {
        // console.log(headingRef.current);
        headingRef.current.style.color = "lightgreen";
    }
    return (
        <div>
            <h1 ref={headingRef}>Heading</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
                soluta?
            </p>
            <button onClick={changeColor}>Change heading color</button>
        </div>
    );
}

export default LearningUseRefHook;
