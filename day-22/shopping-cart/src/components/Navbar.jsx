import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
    return (
        <nav className="flex bg-blue-500 text-white space-x-8 border-solid border-blue-500 border-4">
            <h1 className="logo text-lg font-bold hover:underline">SC</h1>
            <ul className="flex space-x-4 mb-8">
                <li className="hover:underline">
                    <Link to="/">Products</Link>
                </li>
                <li className="hover:underline">
                    <Link to="/cart">Cart</Link>
                </li>
                <li>cart logo</li>
            </ul>
        </nav>
    );
}

export default Navbar;
