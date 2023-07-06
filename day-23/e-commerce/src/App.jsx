import "./App.css";
import Home from "./Pages/home";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import RootLayout from "./Pages/layouts/RootLayout";

import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import Profile from "./Pages/Profile";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<RootLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
        </Route>
    )
);
function App() {
    return <RouterProvider router={router} />;
}

export default App;
