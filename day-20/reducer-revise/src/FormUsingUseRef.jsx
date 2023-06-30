import { useRef } from "react";

// uncontrolled component

function FormUsingUseRef() {
    const firstNameRef = useRef();
    function handleSubmit(e) {
        e.preventDefault();
        // console.log(firstNameRef.current.value);
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="firstname" ref={firstNameRef} />
            <input type="submit" value="submit" />
        </form>
    );
}

export default FormUsingUseRef;
