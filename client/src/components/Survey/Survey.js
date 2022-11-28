import { useState } from 'react';
import "./Survey.css"


function Survey({questionArray}){


    //state for what question is currently on the page
    const [currentQuestion, setCurrentQuestion] = useState(0)




    return(
        <div className ="question-section">
            <div className="question-count">
                <span>Question {currentQuestion +1}</span>/{questionArray.length}
            </div>
            <div className ="question-text">
                {questionArray[currentQuestion]}
            </div>
        </div>
    )
}

export default Survey
