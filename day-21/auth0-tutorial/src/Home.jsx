import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";

function Home() {
    const { isAuthenticated } = useAuth0();
    return (
        <>
            <h1>Auth Tutorial</h1>
            {isAuthenticated ? <LogoutButton /> : <LoginButton />}
        </>
    );
}

export default Home;
