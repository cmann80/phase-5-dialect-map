import { useState } from 'react';
import "./Survey.css"
import { useNavigate } from 'react-router-dom';


function Survey({questionArray, user}){

    const navigate = useNavigate();

    //state for what question is currently on the page
    const [currentQuestion, setCurrentQuestion] = useState(0)


    //state of all survey responses
    const [responses, setResponses] = useState(["", "", "", "", "", "", "", "", "", "",])

    const [selectedOption, setSelectedOption] = useState("")



    function incrementQuestion(){
        if (currentQuestion < questionArray.length -1){
            setCurrentQuestion(currentQuestion +1)
            const updatedResponses = [...responses]
            updatedResponses[currentQuestion] = selectedOption
            setResponses(updatedResponses)
            console.log(selectedOption)
            console.log(`user responded to question ${currentQuestion}  with ${responses[currentQuestion]}`)
            console.log(responses)
        }
    }

    function decrementQuestion(){
        if (currentQuestion > 0){
            setCurrentQuestion(currentQuestion -1)
        }
    }

    function handleSelect(e){

        setSelectedOption(e.target.value)

            fetch(`/responses/${user.response.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    [`r${currentQuestion+1}`]: e.target.value
                    
                }),
            }).then((r) => {
                if (r.ok) {
                    r.json().then(() => {
                    })
                } 
            });
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
                    <fieldset>
                        <input 
                            type = "radio" 
                            name = "choice" 
                            value ="yes"
                        onChange = {handleSelect}
                        />
                        <label htmlFor="yes">yes</label>
                        <input 
                            type = "radio" 
                            name ="choice" 
                            value ="no"
                            onChange = {handleSelect}
                            />
                        <label htmlFor="no">no</label>
                    </fieldset>
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
