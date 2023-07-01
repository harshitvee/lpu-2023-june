import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
function UserProfile() {
    const { isAuthenticated, user } = useAuth0();

    return (
        isAuthenticated && (
            <div>
                {Object.keys(user).map((userObjKey) => (
                    <p key={userObjKey}>
                        {userObjKey} : {user[userObjKey]}
                    </p>
                ))}
            </div>
        )
    );
}

export default UserProfile;
