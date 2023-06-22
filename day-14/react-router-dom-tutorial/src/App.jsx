import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import {
    RouterProvider,
    createRoutesFromElements,
    createBrowserRouter,
    Route,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";

// http://localhost:5174/ ---> Home path
// http://localhost:5174/about --->About path ,  Child of home path
// http://localhost:5174/posts ---> Posts path, child of home path
// http://localhost:5174/posts/3 --->single post path,  child of posts path

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
        </Route>
    )
);

function App() {
    return (
        <div className="app">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
