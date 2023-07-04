import { AppProvider } from "./context/appContext";
import Parent from "./Parent";

import "./App.css";

// prop drilling

function App() {
    return (
        <>
            <AppProvider>
                <Parent />
            </AppProvider>
        </>
    );
}

export default App;
