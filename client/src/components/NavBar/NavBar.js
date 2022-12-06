import { DivOverlay } from 'leaflet';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NavBar.css';



function NavBar ({ user, setUser }) {


    const navigate = useNavigate()

    function handleLogout() {
        fetch("/logout", {
        method: "DELETE",
        }).then((r) => {
            if (r.ok) {
                setUser(null)
                navigate("/")
            }
        });
    }

const loginSwitch = () => {
    if(user){
        return (
        <>
            <li>Welcome, {user.username}!</li>
            <li><Link to={`/profile`}>Profile</Link></li>
            <li><Link to={"/"} onClick={handleLogout}>Logout</Link></li>
        </>
            )
        }
    else
        {return(
        <>
            <li><Link to="signup">Signup</Link></li>
            <li><Link to="login">Login</Link></li>
        </>
        )
    }

}
    return (
        <div className='topnav'>
            <h1>Dialect Map</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                {loginSwitch()}
            </ul>
        </div>
    )
}

export default NavBar