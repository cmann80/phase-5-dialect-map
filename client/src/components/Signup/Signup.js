import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';


function Signup({setUser, user}){
    
    // user states
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    
    // error state
    const [errors, setErrors] = useState([]);

    const [locations, setLocations]=useState({
        places: [
            {
                location: "",
                location_type: "now",

            },
            {
                location: "",
                location_type: "born",

            },
            {
                location: "",
                location_type: "parents",

            }
        ]
    })

console.log(locations)

    const navigate = useNavigate();


    //function for posting the locations 
    function placePostFetch(){
        
        fetch("/places", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify({ ...locations })
        })
    }


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
                }).then(placePostFetch)
                } else {
                res.json().then((err) => setErrors(err.errors))
                }
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
                    value={locations.places[0].location}
                    onChange={(e) => setLocations(currLocations => ({places:[{...currLocations.places[0], location: e.target.value},{...currLocations.places[1]},{...currLocations.places[2]}]}))}
                /><br/>

                <label>Where  did you grow up?</label>
                <input 
                    type= "text" 
                    name="locationGrewUp"
                    value={locations.places[1].location}
                    onChange={(e) => setLocations(currLocations => ({places:[{...currLocations.places[0]},{...currLocations.places[1], location: e.target.value},{...currLocations.places[2]}]}))}
                /><br/>
                <label>Where are your parents from?</label>
                <input
                    type= "text" 
                    name="locationParents"
                    value={locations.places[2].location}
                    onChange={(e) => setLocations(currLocations => ({places:[{...currLocations.places[0]},{...currLocations.places[1]},{...currLocations.places[2], location: e.target.value}]}))}
                /><br/> 

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Signup