import { createContext, useContext } from "react";

const AppContext = createContext();
const data = {
    firstKey: "value1",
    secondKey: "value2",
};
function AppProvider({ children }) {
    return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
}

function useAppContext() {
    return useContext(AppContext);
}

export { AppContext, AppProvider, useAppContext };
