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
        return (<span>
            <h1>Welcome, {user.username}!</h1>
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
        </span>)
        }
    else
        {return(
        <span>
            <Link to="signup">Signup</Link>
            <Link to="login">Login</Link>
        </span>
        )
    }

}

    return (
        <div className='nav'>
            <h1>NavBar</h1>
            <Link to="/">Home</Link>
            {loginSwitch()}
        </div>
    )
}

export default NavBar