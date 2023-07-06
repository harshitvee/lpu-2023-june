import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../../context/authContext";
function RootLayout() {
    const { session } = useAuth();
    return (
        <>
            <div className=" bg-zinc-100 mb-8">
                <nav className="flex justify-between items-center place-items-center h-14  container mx-auto">
                    <h1 className="text-sky-800 text-3xl">Ecom</h1>
                    <ul className="flex items-center space-x-8 font-medium">
                        <li className="text-zinc-800 hover:text-zinc-600">
                            <Link to="/">Products</Link>
                        </li>
                        <li className="text-zinc-800 hover:text-zinc-600">
                            <Link to="/cart">Cart</Link>
                        </li>
                        {session && (
                            <li className="text-zinc-800 hover:text-zinc-600">
                                <Link to="/profile">Profile</Link>
                            </li>
                        )}
                        {!session && (
                            <li className="text-zinc-800 hover:text-zinc-600">
                                <Link to="/login">Login</Link>
                            </li>
                        )}
                    </ul>
                </nav>
            </div>
            <main>
                <Outlet />
            </main>
        </>
    );
}

export default RootLayout;
