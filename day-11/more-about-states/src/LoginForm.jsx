// controlled components (control by react's state)

// inputs <---> react's state

import { useState } from "react";
function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    function handleSubmit(e) {
        e.preventDefault();
        alert(`hello ${username}`);
    }
    return (
        <form onSubmit={handleSubmit}>
            <h1>Login Form</h1>
            <div className="formGroup">
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => {
                        setUsername(e.target.value);
                    }}
                />
            </div>

            <div className="formGroup">
                <label htmlFor="password">password</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default LoginForm;
