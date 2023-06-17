import { useState } from "react";
import "./App.css";

// click event
// when broswer calls this handleClick function
// broswer pass an event object
// handleClick({target: "", a: "", b:""})

// we use useState hook to store the values
// values can by anything
// primities
// reference

// useEffect

// rule of hooks (apply to all hooks)
// 1. call directly inside components,
// it should not present inside any other block like if-else,
// function, loops

// useState hook
// argument
// 1. intial value

// return value
// [value, functionToUpdateThatValue]

// when state changes
// component re-renders with new state value and it's children also re-render

// diffing algo

function App() {
    const [firstName, setFirstName] = useState("Harshit");

    function handleFirstName() {
        console.log("button clicked");
        if (firstName === "Harshit") {
            setFirstName("Mohit");
        } else {
            setFirstName("Harshit");
        }
    }
    return (
        <>
            <h2>Hello {firstName}</h2>
            <button onClick={handleFirstName}>Change First Name</button>
        </>
    );
}

export default App;
