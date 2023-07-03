import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
    const { logout } = useAuth0();

    return (
        <button
            className="border-solid border-2 border-sky-500 m-4"
            onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
            }
        >
            Log Out
        </button>
    );
};

export default LogoutButton;
