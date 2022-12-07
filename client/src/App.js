import './App.css';
import Signup from './components/Signup/Signup';
import SurveyResponses from './components/SurveyResponses/SurveyResponses'
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import Survey from "./components/Survey/Survey";
import About from "./components/About/About"
import { Route, Routes, BrowserRouter} from 'react-router-dom';
import { useEffect, useState } from "react";
import React from 'react';



function App() {


    const[properties, setProperties] = useState([])
    const[userLocations, setUserLocations] = useState([])

    const[selectedPlace, setSelectedPlace] = useState('')

    const [user, setUser] = useState(null)
    const [survey, setSurvey] = useState({})
    const [errors, setErrors] = useState(false)
    // console.log(user)

    useEffect(() => {
        fetch(`/places`)
        .then(res => {
            if(res.ok){
                res.json().then(placeData => {
                    // console.log(placeData)
                updateMarkers(placeData)
                })
            } 
            else{
                res.json().then(data => setErrors(data.error))
            }
        })
    }, [])

    useEffect(() => {
        fetch(`/user_locations`)
        .then(res => {
            if(res.ok){
                res.json().then(userLocationData => {
                    setUserLocations(userLocations)
                })
            } 
            else{
                res.json().then(data => setErrors(data.error))
            }
        })
    }, [])


  // updates the marker locations as soon as page loads
    function updateMarkers(placeData){
        placeData.map(place => {
            geocoder(place.location)
        })
    }


  // // converts place names into map coordinates
    function geocoder(placeName){
        fetch(`https://api.geoapify.com/v1/geocode/search?text=${placeName}&apiKey=${process.env.REACT_APP_GEOCODE_API_KEY}`)
        .then(response => response.json())
        .then(result => {
        if (result.features.length > 0){
            setProperties((properties) => [...properties, {...result.features[0].properties, placeName}])
        }
        })
    }




    useEffect(() => {
    fetch("/auth")
    .then(res => {
        if(res.ok){
        res.json()
        .then(user => setUser(user))
        } 
    })
    }, [])


    useEffect(() => {
        fetch(`/surveys/1`)
        .then(res => {
            if(res.ok){
                res.json().then(survey => {
                setSurvey(survey)
                })
            } 
            else{
                res.json().then(data => setErrors(data.error))
            }
        })
    }, [])

if(errors) return <h1>{errors}</h1>

// creates an array from the survey object
    const questionArray = Object.values(survey)

  // removes the first, and last two elements of the array (really dumb)
    questionArray.shift()
    questionArray.pop()
    questionArray.pop()



    return (
    <div className="App">

        <BrowserRouter>
        <NavBar user={user} setUser={setUser} className="navbar"/>
            <Routes>
            <Route path= "/" element={<Home selectedPlace = {selectedPlace} setSelectedPlace={setSelectedPlace} properties={properties}/>}/>
            <Route path="/signup" element={<Signup user={user} setUser={setUser}/>}/>
            <Route path="/login" element={<Login setUser={setUser}/>}/>
            <Route path="/survey" element={<Survey user={user} setUser={setUser} questionArray={questionArray}/>}/>
            <Route path="/profile/" element={<Profile user={user} setUser={setUser}/>}/>
            <Route path="/survey_responses/:placeName" element={<SurveyResponses survey={survey} userLocations={userLocations}/>}/>
            <Route path="/about" element={<About/>}/>
        </Routes>
        </BrowserRouter>
    </div>
    );
}

export default App;
