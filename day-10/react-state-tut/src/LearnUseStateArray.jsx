import { useState } from "react";
import { v4 as uuid } from "uuid";
function LearnUseStateArray() {
    const [fruits, setFruits] = useState(["apple", "mango"]);
    function addFruit() {
        // in case of array

        // first way
        // const newArray = [...fruits, "grapes"];
        // setFruits(newArray);

        // setState  callback version

        setFruits((prevFruits) => {
            return [...prevFruits, "grapes"];
        });
    }
    return (
        <div>
            <h1>Learn use State array</h1>
            <ul>
                {fruits.map((fruit) => (
                    <li style={{ fontSize: "1.8rem" }} key={uuid()}>
                        {fruit}
                    </li>
                ))}
            </ul>
            <button onClick={addFruit}>Add grapes to fruits </button>
        </div>
    );
}

export default LearnUseStateArray;
