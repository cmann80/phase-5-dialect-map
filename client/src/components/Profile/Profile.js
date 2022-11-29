import {useEffect, useState} from 'react';
import {useParams, Link} from 'react-router-dom'
import "./Profile.css"

function Profile ({user, setUser}){


    const [errors, setErrors] = useState(false)
    
    const [responseData, setResponseData] = useState([])

    const params = useParams()

    // useEffect(() => {
    //     fetch("/auth")
    //     .then(res => {
    //         console.log(res)
    //     if(res.ok){
    //         res.json()
    //         .then(user => setUser(user))
    //     } 
    //     })
    // }, [])
    console.log(user)

    // // fetches user information, or error
    // useEffect(() => {
    //     fetch(`/users/${user.id}`)
    //     .then(res => {
    //         if(res.ok){
    //             res.json().then(user => {
    //                 console.log(user)
    //             })
    //         } 
    //         else{
    //             res.json().then(data => setErrors(data.error))
    //         }
    //     })
    // }, [])

    // on clicking the take survey button, creates a new survey entry in the survey table if one doesn't exist and takes the user to the survey page
    function surveyLink(){
    
        if (user?.responses){
            fetch("/responses", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body:JSON.stringify({ 
                user_id: user.id,
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
                    setResponseData(data)
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
            <h2>Locations</h2>
            <form className="locationForm">
                <label>Where do you live now?
                <input type= "text" name="locationNow"/>
                <input type = "submit" value="Submit"/>
                </label>
            </form>
            <form className="locationForm">
                <label>Where  did you grow up?
                <input type= "text" name="locationGrewUp"/>
                <input type = "submit" value="Submit"/>
                </label>
            </form>
            <form className="locationForm">
                <label>Where are your parents from?
                <input type= "text" name="locationParents"/>
                <input type = "submit" value="Submit"/>
                </label>
            </form>
            <Link to="/survey">
                <button className="survey-button" onClick={surveyLink()}>Take survey</button>
            </Link>
        </div>
    )

}

export default Profile