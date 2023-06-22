import React from "react";
import { useParams } from "react-router-dom";
function SinglePost() {
    const { id } = useParams();
    return <div>SinglePost , {id}</div>;
}

export default SinglePost;
