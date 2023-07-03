import "./App.css";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import {
    Route,
    RouterProvider,
    createRoutesFromElements,
    createBrowserRouter,
} from "react-router-dom";
import RootLayout from "./layout/RootLayout";
// backend as a service
// 2 options : both are free

// 1. firebase (document database)
// 2. supabase (postgres database)

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="/cart" element={<Cart />} />
        </Route>
    )
);

function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
