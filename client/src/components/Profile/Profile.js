import {useEffect, useState} from 'react';
import {useParams, Link} from 'react-router-dom'
import "./Profile.css"

function Profile ({user, setUser, errors, setErrors}){


    
    const [responseData, setResponseData] = useState([])

    const params = useParams()



    // on clicking the take survey button, creates a new survey entry in the survey table if one doesn't exist and takes the user to the survey page
    function surveyLink(){
    
        if (user?.id && !user?.response){
            fetch("/responses", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body:JSON.stringify({ 
                user_id: user?.id,
                r1: null,
                r2: null,
                r3: null,
                r4: null,
                r5: null,
                r6: null,
                r7: null,
                r8: null,
                r9: null,
                r10: null
                }),
            }).then((res) => {
                if (res.ok) {
                    res.json().then((data) => {
                    setUser(currUser => ({...currUser, response: data}))
                    })
                    } else {
                    res.json().then((err) => setErrors(err.errors))
                    }
                });


        }
        else{}
    }


    if(errors) return <h1>{errors}</h1>

    return(

        <div className="profile-container">
            <h1>Profile</h1>
            <h2>Username</h2>
            <p>{user?.username}</p>
            <h2>Location currently living in</h2>
            <p>{user?.user_locations[0].place.location}</p>
            <h2>Location born in</h2>
            <p>{user?.user_locations[1].place.location}</p>
            <h2>Location parents are from</h2>
            <p>{user?.user_locations[2].place.location}</p>
            <Link to="/survey">
                <button className="survey-button" onClick={surveyLink}>Take or update dialect survey</button>
            </Link>
        </div>
    )

}

export default Profile