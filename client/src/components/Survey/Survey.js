import { useState } from 'react';
import "./Survey.css"


function Survey({questionArray}){



    //state for what question is currently on the page
    const [currentQuestion, setCurrentQuestion] = useState(0)

    console.log(currentQuestion)

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
            <div className = "response-choices">
                <form>
                    <input type = "radio" name = "choice" value ="yes"/>
                    <label for="yes">yes</label>
                    <input type = "radio" name ="choice" value ="no"/>
                    <label for="no">no</label>
                </form>
            </div>
            <div className="direction-buttons"> 
            <button onClick={() => decrementQuestion()}>Previous</button>
            <button onClick={() => incrementQuestion()}>Next</button>
            </div>
        </div>
    )
}

export default Survey
