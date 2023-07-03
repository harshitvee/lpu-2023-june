import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
function RootLayout() {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
}

export default RootLayout;
