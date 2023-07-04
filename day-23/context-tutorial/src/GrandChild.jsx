import React from "react";
import { useAppContext } from "./context/appContext";
function GrandChild() {
    const data = useAppContext();
    return (
        <div>
            GrandChild <br />
            {data.firstKey} <br />
            {data.secondKey} <br />
        </div>
    );
}

export default GrandChild;
