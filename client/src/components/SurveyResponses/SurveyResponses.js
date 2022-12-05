import { Link } from 'react-router-dom';
import {useEffect, useState} from "react"

function SurveyResponses({userLocations, survey, errors, setErrors}){

const [responses, setResponses] = useState([])
console.log(responses)

useEffect(() => {
    fetch(`/responses`)
    .then(res => {
        if(res.ok){
            res.json().then(responseData => {
                console.log(responseData)
            setResponses(responseData)
            })
        } 
        else{
            res.json().then(data => setErrors(data.error))
        }
    })
}, [])



    return (

<div>
    <h2>Survey Responses</h2>
    <br/>
    <span>{survey.q1}</span><br/>
    <span>{survey.q2}</span><br/>
    <span>{survey.q3}</span><br/>
    <span>{survey.q4}</span><br/>
    <span>{survey.q5}</span><br/>
    <span>{survey.q6}</span><br/>
    <span>{survey.q7}</span><br/>
    <span>{survey.q8}</span><br/>
    <span>{survey.q9}</span><br/>
    <span>{survey.q10}</span><br/>
    <Link to="/">back to home</Link>
</div>
    )
}

export default SurveyResponses