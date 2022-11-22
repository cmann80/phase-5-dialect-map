import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import './NavBar.css';
import Signup from '../Signup/Signup';
import Home from "../Home/Home"

function NavBar ({ user, setUser }) {

    return (
        <div className='nav'>
            <h1>NavBar</h1>
            <Link to="signup">Signup</Link>
            <Link to="/">Home</Link>
            <Routes>
                <Route path="signup" element={<Signup />}/>
                <Route path= "/" element={<Home/>}/>
            </Routes>
        </div>
    )
}

export default NavBar