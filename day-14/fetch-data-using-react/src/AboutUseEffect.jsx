import { useEffect, useState } from "react";

// useEffect
// side effects : things that are not directcly connected with your component

// case 1 : useEffect(()=>{})
// callback of useEffect run every time when component renders

// case 2 : useEffect(() => {}, [value1, value2])

// case 3 : useEffect(() => {}, [])

function AboutUseEffect() {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
    // useEffect(() => {
    //     console.log("component rendered, inside useEffect");
    // });

    // useEffect(() => {
    //     console.log("inside useEffect");
    // }, [count2]);

    useEffect(() => {
        console.log("inside useEffect after initial render");
    }, []);

    function increase() {
        // setCount(count + 1);
        // callback way
        setCount((count) => count + 1);
    }
    return (
        <>
            <h1>{count}</h1>
            <button onClick={increase}>increase count</button>
        </>
    );
}

export default AboutUseEffect;
