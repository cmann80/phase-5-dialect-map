import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './Signup.css';


function Signup({setUser}){
    
    // user states
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [errors, setErrors] = useState([])

    


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

    // console.log(locations)

    const navigate = useNavigate();


    //function for posting the locations 
    function placePostFetch(){
        
        fetch("/places", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify({ ...locations })
        }).then(navigate("/"))
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

    const errorMessage = errors.map((err) => {
        // console.log(err)
        return (<li key={err}>{err}</li>)
    })



    return(
        <div className="login-container">
            <h2>Sign Up</h2>
            <h3>Choose a username that is not personally identifiable, such as your name or email address.</h3> 
            <p>For your locations, you can enter cities, states, regions, countries, almost anything.</p>
            <form onSubmit={handleSubmit}>
                <div className="container>">
                    <label htmlFor="username">Username</label>
                    <br/>
                    <input
                        type="text"
                        id="username"
                        placeholder="Enter Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    /><br/>


                    <label htmlFor="password">Password</label>
                    <br/>
                    <input
                        type="password"
                        id="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    /><br/>

                    <label htmlFor="password_confirmation">Confirm Password</label>
                    <br/>
                    <input
                        type="password"
                        id="password_confirmation"
                        placeholder="Enter Password Again"
                        value={passwordConfirmation}
                        onChange={(e) => setPasswordConfirmation(e.target.value)}
                    /><br/>

                    <label>Where do you live now?</label>
                    <br/>
                    <input 
                        type= "text" 
                        name="locationNow"
                        placeholder="Ex. Denver"
                        value={locations.places[0].location}
                        onChange={(e) => setLocations(currLocations => ({places:[{...currLocations.places[0], location: e.target.value},{...currLocations.places[1]},{...currLocations.places[2]}]}))}
                    /><br/>

                    <label>Where  did you grow up?</label>
                    <br/>
                    <input 
                        type= "text" 
                        name="locationGrewUp"
                        placeholder="Ex. Chennai, Tamil Nadu"
                        value={locations.places[1].location}
                        onChange={(e) => setLocations(currLocations => ({places:[{...currLocations.places[0]},{...currLocations.places[1], location: e.target.value},{...currLocations.places[2]}]}))}
                    /><br/>
                    <label>Where are your parents from?</label>
                    <br/>
                    <input
                        type= "text" 
                        name="locationParents"
                        placeholder="Ex. Taiwan"
                        value={locations.places[2].location}
                        onChange={(e) => setLocations(currLocations => ({places:[{...currLocations.places[0]},{...currLocations.places[1]},{...currLocations.places[2], location: e.target.value}]}))}
                    /><br/> 

                    <button type="submit">Submit</button>
                </div>
            </form>
            <ul>{errorMessage}</ul>
        </div>
    )
}

export default Signup