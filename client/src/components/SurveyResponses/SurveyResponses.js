import { Link } from 'react-router-dom';
import {useEffect, useState} from "react"
import {useParams} from "react-router-dom"

function SurveyResponses({userLocations, survey, errors, setErrors}){

let {placeName} = useParams()

const [responses, setResponses] = useState([])


console.log(placeName)




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

// a function to create  a state object for all responses for this place
    function generateTable(){
        

    }   

    return (

<div>
    <h2>Survey Responses</h2>
    <br/>
    <table>
            <tr>
                <th>Questions</th>
                <th>Username, type, responses</th>
            </tr>
            <tr>
                <tr>{survey.q1}</tr>
                <tr>{survey.q2}</tr>
                <tr>{survey.q3}</tr>
                <tr>{survey.q4}</tr>
                <tr>{survey.q5}</tr>
                <tr>{survey.q6}</tr>
                <tr>{survey.q7}</tr>
                <tr>{survey.q8}</tr>
                <tr>{survey.q9}</tr>
                <tr>{survey.q10}</tr>
            </tr>
                {generateTable()}
        </table>

    <Link to="/">back to home</Link>
</div>)
    
}

export default SurveyResponses