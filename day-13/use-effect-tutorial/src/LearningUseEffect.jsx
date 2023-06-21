import { useEffect, useState } from "react";
function LearningUseEffect() {
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

export default LearningUseEffect;
