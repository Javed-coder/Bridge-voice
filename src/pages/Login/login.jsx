import React, { useState } from "react";
import "./login.css"; // Assuming you have a CSS file for styling
const Login = () => {
    const [form, setForm] = useState({ username: "", password: "" });
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Dummy validation
        if (!form.username || !form.password) {
            setError("Please enter both username and password.");
            return;
        }
        setError("");
        // Handle login logic here
        alert(`Logged in as ${form.username}`);
    };

    return (
        <div className="login-container">
            <h2 className="login-title">Login</h2>
            <form onSubmit={handleSubmit} className="login-form">
                <div className="login-input">
                    Username:
                    <label>
                        <input
                            type="text"
                            name="username"
                            value={form.username}
                            onChange={handleChange}
                            autoComplete="username"
                        />
                    </label>
                </div>
                <div className="login-input">
                    <label>
                        Password:  
                        <input
                            type="password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            autoComplete="current-password"
                        />
                    </label>
                </div>
                {error && <div>{error}</div>}
                <button className="login-label" type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;