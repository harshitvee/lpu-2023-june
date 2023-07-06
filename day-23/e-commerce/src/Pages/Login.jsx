import { useState } from "react";
import { supabase } from "../config/supabase";
function Login() {
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");

    const handleLogin = async (event) => {
        event.preventDefault();

        setLoading(true);
        const { error } = await supabase.auth.signInWithOtp({ email: email });

        if (error) {
            alert(error.error_description || error.message);
        } else {
            alert("Check your email for the login link!");
        }
        setLoading(false);
    };

    return (
        <form className="form-widget m-auto w-72" onSubmit={handleLogin}>
            <div>
                <label htmlFor="email" className="block">
                    Email
                </label>
                <input
                    className="border-solid border-2 border-zinc-200 p-2 mb-2"
                    type="email"
                    placeholder="Your email"
                    value={email}
                    required={true}
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <button
                    className="bg-zinc-800 text-zinc-100 px-6 py-2 rounded"
                    disabled={loading}
                >
                    {loading ? (
                        <span>Loading</span>
                    ) : (
                        <span>Send magic link</span>
                    )}
                </button>
            </div>
        </form>
    );
}

export default Login;
