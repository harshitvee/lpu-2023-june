/* eslint-disable react/prop-types */

// inline styles : you have to create object for inline styles , and you have to use camelCase for css properties
// external css file
// css modules

import "./Greeting.css";

function Greeting({ firstName, lastName }) {
    return (
        <h1 className="greetingsHeading">
            Good Morning, {firstName} {lastName}
        </h1>
    );
}

export default Greeting;
