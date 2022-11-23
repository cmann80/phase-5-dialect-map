import { useState } from 'react';
import Survey from "../Survey/Survey"
import "./SurveyContainer.css"


function SurveyContainer({survey}){


// const renderSurvey = () =>{
//     survey.entries(question =>{
//         console.log(question)
//     })

//     }

// renderSurvey()

const [currentPage, setCurrentPage] = useState(1)

    return(
        <div>
            <h1>Survey Container</h1>
        </div>
    )
}

export default SurveyContainer
