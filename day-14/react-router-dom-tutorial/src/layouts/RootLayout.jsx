import React from "react";
import { Outlet, Link } from "react-router-dom";
function RootLayout() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="about">About</Link>
                    </li>
                    <li>
                        <Link to="contact">Contact</Link>
                    </li>
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
