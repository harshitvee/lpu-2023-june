import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import "./App.css";

// day : 15 : movie search project
// day : 16 : reducers and context ( redux )
// day : 17 : auth0,  one more project
// console.log(console.log(import.meta.env.VITE_SOME_KEY));
function App() {
    console.log(import.meta.env.VITE_SOME_KEY);
    return <div>{import.meta.env.VITE_SOME_KEY}</div>;
}

export default App;
