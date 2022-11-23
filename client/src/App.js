import './App.css';
import Signup from './components/Signup/Signup';
import NavBar from "./components/NavBar/NavBar"
import Home from "./components/Home/Home"
import { Route, Routes, BrowserRouter, Link} from 'react-router-dom'
import { useEffect, useState } from "react";
import React from 'react';

function App() {

  const [user, setUser] = useState(null)
  console.log(user)

  return (
    <div className="App">

      <BrowserRouter>
      <NavBar user={user} setUser={setUser} className="navbar"/>
          <Routes>
            <Route path= "/" element={<Home/>}/>
            <Route path="signup" element={<Signup setUser={setUser}/>}/>
          </Routes>
        </BrowserRouter>
        <h1>App</h1>
    </div>
  );
}

export default App;
