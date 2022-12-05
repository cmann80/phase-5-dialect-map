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

    function renderResponses1(){
        return responses.map(response => {
            return (<p>{response.r1}</p>)

        })
    }
    function renderResponses2(){
        return responses.map(response => {
            return (<p>{response.r2}</p>)

        })
    }
    function renderResponses3(){
        return responses.map(response => {
            return (<p>{response.r3}</p>)

        })
    }
    function renderResponses4(){
        return responses.map(response => {
            return (<p>{response.r4}</p>)

        })
    }
    function renderResponses5(){
        return responses.map(response => {
            return (<p>{response.r5}</p>)

        })
    }
    function renderResponses6(){
        return responses.map(response => {
            return (<p>{response.r6}</p>)

        })
    }
    function renderResponses7(){
        return responses.map(response => {
            return (<p>{response.r7}</p>)

        })
    }
    function renderResponses8(){
        return responses.map(response => {
            return (<p>{response.r8}</p>)

        })
    }
    function renderResponses9(){
        return responses.map(response => {
            return (<p>{response.r9}</p>)

        })
    }
    function renderResponses10(){
        return responses.map(response => {
            return (<p>{response.r10}</p>)

        })
    }

    return (

<div>
    <h2>Survey Responses</h2>
    <br/>
    <span>{survey.q1}{renderResponses1()}</span><br/>
    <span>{survey.q2}{renderResponses2()}</span><br/>
    <span>{survey.q3}{renderResponses3()}</span><br/>
    <span>{survey.q4}{renderResponses4()}</span><br/>
    <span>{survey.q5}{renderResponses5()}</span><br/>
    <span>{survey.q6}{renderResponses6()}</span><br/>
    <span>{survey.q7}{renderResponses7()}</span><br/>
    <span>{survey.q8}{renderResponses8()}</span><br/>
    <span>{survey.q9}{renderResponses9()}</span><br/>
    <span>{survey.q10}{renderResponses10()}</span><br/>
    <Link to="/">back to home</Link>
</div>
    )
}

export default SurveyResponses