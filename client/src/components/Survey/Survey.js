import { useState } from 'react';
import "./Survey.css"
import { useNavigate } from 'react-router-dom';


function Survey({questionArray, user, setUser}){

    const navigate = useNavigate();
    const [errors, setErrors] = useState([]);

    //state for what question is currently on the page
    // const [currentQuestion, setCurrentQuestion] = useState(0)


    //state of all survey responses
    const [response1, setResponse1] = useState([""])
    const [response2, setResponse2] = useState([""])
    const [response3, setResponse3] = useState([""])
    const [response4, setResponse4] = useState([""])
    const [response5, setResponse5] = useState([""])
    const [response6, setResponse6] = useState([""])
    const [response7, setResponse7] = useState([""])
    const [response8, setResponse8] = useState([""])
    const [response9, setResponse9] = useState([""])
    const [response10, setResponse10] = useState([""])





//     function incrementQuestion(e){


//         console.log(e)
//             const updatedResponses = [...responses]
//             updatedResponses[currentQuestion] = selectedOption
//             setResponses(updatedResponses)
//             if (currentQuestion < questionArray.length -1){
            
//                 fetch(`/responses/${user.response.id}`, {
//                     method: "PATCH",
//                     headers: {
//                         "Content-Type": "application/json",
//                     },
//                     body: JSON.stringify({
//                         [`r${currentQuestion+1}`]: selectedOption
                        
//                     }),
//                     }).then((r) => {
//                         if (r.ok) {
//                             r.json().then(() => {
//                             })
//                         } 
//                     });
//             console.log(`user responded to question ${currentQuestion}  with ${responses[currentQuestion]}`)
//             setCurrentQuestion(currentQuestion +1)

//             }
    

//     }
    

//     function decrementQuestion(){
//         if (currentQuestion > 0){
//             setCurrentQuestion(currentQuestion -1)
//         }
//     }

// function handleSelect(e){
//     console.log(e.target.value)
//     setResponses(e.target.value)
// }

//     // function handleSubmit(e){
//     //     e.preventDefault()
//     //     console.log(currentQuestion) 
//     //     if (currentQuestion < questionArray.length -1){
    
//     //         fetch(`/responses/${user.response.id}`, {
//     //             method: "PATCH",
//     //             headers: {
//     //                 "Content-Type": "application/json",
//     //             },
//     //             body: JSON.stringify({
//     //                 [`r${currentQuestion+1}`]: selectedOption
                    
//     //             }),
//     //             }).then((r) => {
//     //                 if (r.ok) {
//     //                     r.json().then(() => {
//     //                     })
//     //                 } 
//     //             });
//     //     console.log(`user responded to question ${currentQuestion}  with ${selectedOption}`)
//     //     setCurrentQuestion(currentQuestion +1)

//     //     }
//     // }


function handleSubmitAll(e){

    e.preventDefault()

    fetch(`/responses/${user.response.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
            user_id: user.id,
            r1: response1,
            r2: response2,
            r3: response3,
            r4: response4,
            r5: response5,
            r6: response6,
            r7: response7,
            r8: response8,
            r9: response9,
            r10: response10
            }),
        }).then((res) => {
            if (res.ok) {
                res.json().then((data) => {
                    // console.log(data)
                    setUser(currUser => ({...currUser, response: data}))
                    navigate(`/profile`)
                })
            } else {
                res.json().then((err) => setErrors(err.errors))
            }
        })
    }  


    const errorMessage = errors.map((err) => {
        return (<li key={err}>{err}</li>)
    })

    return(
        <div className ="question-section">
            {/* <div className="question-count"> */}
                {/* <span>Question {currentQuestion +1}</span>/{questionArray.length}
            </div>
            <div className ="question-text">
                {questionArray[currentQuestion]}
            </div>
            <div className = "response-choices">
                <form onSubmit={(e) => handleSubmit(e)}>
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
                    <label htmlFor="no">no</label><br/>
                    <input type="submit" />
                </form>
            </div>
            <div className="direction-buttons">  */}
            {/* <button onClick={(e) => decrementQuestion(e)}>Previous</button>
            <button onClick={(e) => incrementQuestion(e)}>Next</button> */}
            {/* </div> */}
            <form onSubmit={(e) => handleSubmitAll(e)}>
                <p>{questionArray[0]}</p>
                <label>Yes</label>
                <input 
                type = "radio" 
                name = "choice1" 
                value ="yes"
                onChange = {(e) => setResponse1(e.target.value)}
                />
                <label>No</label>
                <input 
                type = "radio" 
                name = "choice1" 
                value ="no"
                onChange = {(e) => setResponse1(e.target.value)}
                />
                <p>{questionArray[1]}</p>
                <label>Yes</label>
                <input 
                type = "radio" 
                name = "choice2" 
                value ="yes"
                onChange = {(e) => setResponse2(e.target.value)}
                />
                <label>No</label>
                <input 
                type = "radio" 
                name = "choice2" 
                value ="no"
                onChange = {(e) => setResponse2(e.target.value)}
                />
                <p>{questionArray[2]}</p>
                <label>Yes</label>
                <input 
                type = "radio" 
                name = "choice3" 
                value ="yes"
                onChange = {(e) => setResponse3(e.target.value)}
                />
                <label>No</label>
                <input 
                type = "radio" 
                name = "choice3" 
                value ="no"
                onChange = {(e) => setResponse3(e.target.value)}
                />
                <p>{questionArray[3]}</p>
                <label>Yes</label>
                <input 
                type = "radio" 
                name = "choice4" 
                value ="yes"
                onChange = {(e) => setResponse4(e.target.value)}
                />
                <label>No</label>
                <input 
                type = "radio" 
                name = "choice4" 
                value ="no"
                onChange = {(e) => setResponse4(e.target.value)}
                />
                <p>{questionArray[4]}</p>
                <label>Yes</label>
                <input 
                type = "radio" 
                name = "choice5" 
                value ="yes"
                onChange = {(e) => setResponse5(e.target.value)}
                />
                <label>No</label>
                <input 
                type = "radio" 
                name = "choice5" 
                value ="no"
                onChange = {(e) => setResponse5(e.target.value)}
                />
                <p>{questionArray[5]}</p>
                <label>Yes</label>
                <input 
                type = "radio" 
                name = "choice6" 
                value ="yes"
                onChange = {(e) => setResponse6(e.target.value)}
                />
                <label>No</label>
                <input 
                type = "radio" 
                name = "choice6" 
                value ="no"
                onChange = {(e) => setResponse6(e.target.value)}
                />
                <p>{questionArray[6]}</p>
                <label>Yes</label>
                <input 
                type = "radio" 
                name = "choice7" 
                value ="yes"
                onChange = {(e) => setResponse7(e.target.value)}
                />
                <label>No</label>
                <input 
                type = "radio" 
                name = "choice7" 
                value ="no"
                onChange = {(e) => setResponse7(e.target.value)}
                />
                <p>{questionArray[7]}</p>
                <label>Yes</label>
                <input 
                type = "radio" 
                name = "choice8" 
                value ="yes"
                onChange = {(e) => setResponse8(e.target.value)}
                />
                <label>No</label>
                <input 
                type = "radio" 
                name = "choice8" 
                value ="no"
                onChange = {(e) => setResponse8(e.target.value)}
                />
                <p>{questionArray[8]}</p>
                <label>Yes</label>
                <input 
                type = "radio" 
                name = "choice9" 
                value ="yes"
                onChange = {(e) => setResponse9(e.target.value)}
                />
                <label>No</label>
                <input 
                type = "radio" 
                name = "choice9" 
                value ="no"
                onChange = {(e) => setResponse9(e.target.value)}
                />
                <p>{questionArray[9]}</p>
                <label>Yes</label>
                <input 
                type = "radio" 
                name = "choice10" 
                value ="yes"
                onChange = {(e) => setResponse10(e.target.value)}
                />
                <label>No</label>
                <input 
                type = "radio" 
                name = "choice10" 
                value ="no"
                onChange = {(e) => setResponse10(e.target.value)}
                /><br/>
                <input type= "submit"/>
            </form>
            <ul>{errorMessage}</ul>
        </div>
    )
}

export default Survey
