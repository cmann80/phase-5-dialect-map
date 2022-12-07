import { useNavigate } from 'react-router-dom';
import React, { useState } from "react";
import "./Login.css"

function Login ({ setUser }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);

    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
        }).then((res) => {
            if (res.ok) {
                res.json().then((userData) => {
                    setUser(userData)
                    navigate("/")
                })
                } else {
                res.json().then((err) => setErrors(err.errors))
                }
            });
        }

    const errorMessage = errors.map((err) => {
        return (<li key={err}>{err}</li>)
    })

    return (
        <div className="login">
            <h2>Log In</h2>
            <form onSubmit={handleSubmit}>
                <label className="label" htmlFor="username">Username</label>
                <br/>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <br/>
                <label className="label" htmlFor="password">Password</label>
                <br/>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br/>
                <button type="submit">Login</button>
            </form>

            <ul>{errorMessage}</ul>
        </div>
    )
}

export default Login