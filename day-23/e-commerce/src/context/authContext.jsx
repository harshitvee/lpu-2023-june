import { createContext, useContext, useState, useEffect } from "react";
import { supabase } from "../config/supabase";
const AuthContext = createContext();

function AuthProvider({ children }) {
    const [session, setSession] = useState(null);

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
        });

        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        });
    }, []);
    return (
        <AuthContext.Provider value={{ session: session }}>
            {children}
        </AuthContext.Provider>
    );
}

function useAuth() {
    return useContext(AuthContext);
}

export { AuthProvider, useAuth };
