import React from "react";
import { Link, Outlet } from "react-router-dom";

function RootLayout() {
    return (
        <div>
            <nav>
                <h1 className="logo">Logo</h1>
                <ul>
                    <li>
                        <Link to="/">Products</Link>
                    </li>
                    <li>
                        <Link to="/cart">Cart</Link>
                    </li>
                </ul>
            </nav>
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default RootLayout;
