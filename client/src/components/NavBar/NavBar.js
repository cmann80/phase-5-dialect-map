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


    return (
        <div className='nav'>
            <h1>NavBar</h1>
            <Link to="signup">Signup</Link>
            <Link to="/">Home</Link>
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default NavBar