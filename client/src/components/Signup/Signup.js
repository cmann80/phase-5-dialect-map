import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';


function Signup({setUser, user}){
    
    // user states
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    
    // error state
    const [errors, setErrors] = useState([]);

    const [nowLocation, setNowLocation] = useState("")
    const [bornLocation, setBornLocation] = useState("")
    const [parentsLocation, setParentsLocation] = useState("")


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
                password_confirmation: passwordConfirmation,

            }),
        }).then((res) => {
            if (res.ok) {
                res.json().then((userData) => {
                    setUser(userData)
                })
                } else {
                res.json().then((err) => setErrors(err.errors))
                }
            }).then(() => {



 
    

    // post fetch for place for now location and user_location

        fetch("/places", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify({ 
                location: nowLocation

            }),
                }).then((res) => {
                    if (res.ok) {
                        res.json().then((data) => {
                            fetch("/user_locations", {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                },
                                body:JSON.stringify({ 
                                user_id: user.id,
                                place_id: data.id,
                                location_type: "now"
                                })
                            })
                        })
                    } else {
                res.json().then((err) => setErrors(err.errors))
                }
            })
        
        


        // post fetch for place for born location and user_location

        fetch("/places", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify({ 
                location: bornLocation

            }),
                }).then((res) => {
                    if (res.ok) {
                        res.json().then((data) => {
                            fetch("/user_locations", {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                },
                                body:JSON.stringify({ 
                                user_id: user.id,
                                place_id: data.id,
                                location_type: "born"
                                })
                            })
                        })
                    } else {
                res.json().then((err) => setErrors(err.errors))
                }
            })
        
        

    // post fetch for place for parents location and user_location

        fetch("/places", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify({ 
                location: bornLocation

            }),
                }).then((res) => {
                    if (res.ok) {
                        res.json().then((data) => {
                            fetch("/user_locations", {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                },
                                body:JSON.stringify({ 
                                user_id: user.id,
                                place_id: data.id,
                                location_type: "parents"
                                })
                            })
                        })
                    } else {
                res.json().then((err) => setErrors(err.errors))
                }
            })
        })

        
        }





    return(
        <div className="login-container">
            <h2>Signup</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                /><br/>


                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                /><br/>

                <label htmlFor="password_confirmation">Confirm Password:</label>
                <input
                    type="password"
                    id="password_confirmation"
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                /><br/>

                <label>Where do you live now?</label>
                <input 
                    type= "text" 
                    name="locationNow"
                    value={nowLocation}
                    onChange={(e) => setNowLocation(e.target.value)}
                /><br/>

                <label>Where  did you grow up?</label>
                <input 
                    type= "text" 
                    name="locationGrewUp"
                    value={bornLocation}
                    onChange={(e) => setBornLocation(e.target.value)}
                /><br/>

                <label>Where are your parents from?</label>
                <input
                    type= "text" 
                    name="locationParents"
                    value={parentsLocation}
                    onChange={(e) => setParentsLocation(e.target.value)}
                /><br/>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Signup