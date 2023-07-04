import "./App.css";
import Home from "./Pages/home";
import Cart from "./Pages/Cart";
import RootLayout from "./Pages/layouts/RootLayout";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<RootLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
        </Route>
    )
);
function App() {
    return <RouterProvider router={router} />;
}

export default App;
