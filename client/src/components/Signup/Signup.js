import React, { useState } from "react";

function Signup(setUser){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [displayName, setDisplayName] = useState("");
    const [errors, setErrors] = useState([]);

    return(
        <h1>signup</h1>
    )
}

export default Signup