import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';


function NavBar ({ user, setUser }) {

    return (
        <div className='nav'>
            <h1>NavBar</h1>
            <Link to="signup">Signup</Link>
            <Link to="/">Home</Link>
        </div>
    )
}

export default NavBar