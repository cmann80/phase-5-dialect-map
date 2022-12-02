import './App.css';
import Signup from './components/Signup/Signup';
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import Survey from "./components/Survey/Survey";
import { Route, Routes, BrowserRouter, useNavigate} from 'react-router-dom';
import { useEffect, useState } from "react";
import React from 'react';



function App() {

  const [user, setUser] = useState(null)
  const [survey, setSurvey] = useState({})
  const [errors, setErrors] = useState(false)
  console.log(user)

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
            <Route path= "/" element={<Home/>}/>
            <Route path="/signup" element={<Signup errors={errors} setErrors={setErrors} user={user} setUser={setUser}/>}/>
            <Route path="/login" element={<Login errors={errors} setErrors={setErrors} setUser={setUser}/>}/>
            <Route path="/survey" element={<Survey errors={errors} setErrors={setErrors} user={user} setUser={setUser} questionArray={questionArray}/>}/>
            <Route path="/profile" element={<Profile errors={errors} setErrors={setErrors} user={user} setUser={setUser}/>}/>
          </Routes>
        </BrowserRouter>
        <h1>App</h1>
    </div>
  );
}

export default App;
