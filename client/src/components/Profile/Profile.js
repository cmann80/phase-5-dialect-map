import {useEffect, useState} from 'react';
import {useParams, Link} from 'react-router-dom'
import SurveyContainer from "../SurveyContainer/SurveyContainer"
import "./Profile.css"

function Profile ({user}){


    const [loading, setLoading] = useState(true)
    const [errors, setErrors] = useState(false)
    

    const params = useParams()



    // fetches user information, or error
    useEffect(() => {
        fetch(`/users/${user.id}`)
        .then(res => {
            if(res.ok){
                res.json().then(user => {
                    console.log(user)
                })
            } 
            else{
                res.json().then(data => setErrors(data.error))
            }
        })
    }, [])

    if(errors) return <h1>{errors}</h1>

    return(

        <div className="profile-container">
            <h1>Profile</h1>
            <h2>Username</h2>
            <p>{user.username}</p>
            <Link to="/survey">Survey</Link>
        </div>
    )

}

export default Profile