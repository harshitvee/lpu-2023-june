import React from "react";
import { Outlet } from "react-router-dom";
function RootLayout() {
    return (
        <div>
            <nav>
                <ul>
                    <li>About</li>
                    <li>contact</li>
                    <li>Home</li>
                </ul>
            </nav>
            <Outlet />
            <footer
                style={{
                    width: "100%",
                    position: "fixed",
                    bottom: "0",
                    backgroundColor: "lightblue",
                }}
            >
                Footer
            </footer>
        </div>
    );
}

export default RootLayout;
