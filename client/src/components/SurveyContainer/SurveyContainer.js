import { useState } from 'react';
import Survey from "../Survey/Survey"
import "./SurveyContainer.css"


function SurveyContainer({survey}){


const renderSurvey = () =>{
    
    for (const [key, value] of Object.entries(survey)) {
        console.log(`${key}: ${value}`)
    }

    }

renderSurvey()

const [currentPage, setCurrentPage] = useState(1)

    return(
        <div>
            <h1>Survey Container</h1>
        </div>
    )
}

export default SurveyContainer
