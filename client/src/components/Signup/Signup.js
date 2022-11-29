import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';


function Signup({setUser}){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [errors, setErrors] = useState([]);

    const navigate = useNavigate();

    function handleSubmit(e) {
        // post request for User
        // else return error message
        e.preventDefault()
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify({ 
                username: username,
                password: password,
                password_confirmation: passwordConfirmation
            }),
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
        <li key={err}>{err}</li>
    })

    return(
        <div className="login-container">
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="password">Password:</label>
            <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="password_confirmation">Confirm Password:</label>
            <input
                type="password"
                id="password_confirmation"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
            <button type="submit">Submit</button>
        </form>

    </div>
    )
}

export default Signup