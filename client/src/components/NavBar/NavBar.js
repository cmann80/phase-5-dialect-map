import { DivOverlay } from 'leaflet';
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';


function NavBar ({ user, setUser }) {

    function handleLogout() {
        fetch("/logout", {
        method: "DELETE",
        }).then((r) => {
            if (r.ok) {
                setUser(null)
            }
        });
    }

const loginSwitch = () => {
    if(user){
        return (<div className="user-options">
            <p>Welcome, {user.username}!</p>
            <Link to="profile">Profile</Link>
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
        </div>)
        }
    else
        {return(
        <div className="user-options">
            <Link to="signup">Signup</Link>
            <Link to="login">Login</Link>
        </div>
        )
    }

}
    return (
        <div className='nav'>
            <h1>Dialect Map</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li>{loginSwitch()}</li>
            </ul>
        </div>
    )
}

export default NavBar