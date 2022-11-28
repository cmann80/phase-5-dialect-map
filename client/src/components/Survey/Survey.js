import { useState } from 'react';
import "./Survey.css"


function Survey({questionArray}){

console.log(questionArray)

    //state for what question is currently on the page
    const [currentQuestion, setCurrentQuestion] = useState(0)


    function incrementQuestion(){
        if (currentQuestion < questionArray.length -1){
            setCurrentQuestion(currentQuestion +1)
        }
    }

    function decrementQuestion(){
        if (currentQuestion > 0){
            setCurrentQuestion(currentQuestion -1)
        }
    }

    return(
        <div className ="question-section">
            <div className="question-count">
                <span>Question {currentQuestion +1}</span>/{questionArray.length}
            </div>
            <div className ="question-text">
                {questionArray[currentQuestion]}
            </div>
            <div className="direction-buttons"> 
            <button onClick={() => decrementQuestion()}>Previous</button>
            <button onClick={() => incrementQuestion()}>Next</button>
            </div>
        </div>
    )
}

export default Survey
