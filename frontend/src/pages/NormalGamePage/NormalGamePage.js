import React, { useState } from 'react'
import DrawerNav from '../../components/DrawerNav/DrawerNav'
import '../NormalGamePage/NormalGamePage.css'

const NormalGamePage = () => {
    const questions = [
        {
            id: '1', title: 'How many eggs do you have in the fridge?', 
            ansA: 'Eleven', ansB: 'Two', ansC: 'Seventy Seven', ansD: 'Eight', 
            correct: 'Eleven'
        },
        {
            id: '2', title: 'How many eggs do you have in the fridge?', 
            ansA: 'Eleven', ansB: 'Two', ansC: 'Seventy Seven', ansD: 'Eight', 
            correct: 'Eleven'
        },
        {
            id: '3', title: 'How many eggs do you have in the fridge?', 
            ansA: 'Eleven', ansB: 'Two', ansC: 'Seventy Seven', ansD: 'Eight', 
            correct: 'Eleven'
        },
        {
            id: '4', title: 'How many eggs do you have in the fridge?', 
            ansA: 'Eleven', ansB: 'Two', ansC: 'Seventy Seven', ansD: 'Eight', 
            correct: 'Eleven'
        },
        {
            id: '5', title: 'How many eggs do you have in the fridge?', 
            ansA: 'Eleven', ansB: 'Two', ansC: 'Seventy Seven', ansD: 'Eight', 
            correct: 'Eleven'
        },
        {
            id: '6', title: 'How many eggs do you have in the fridge?', 
            ansA: 'Eleven', ansB: 'Two', ansC: 'Seventy Seven', ansD: 'Eight', 
            correct: 'Eleven'
        },
        {
            id: '7', title: 'How many eggs do you have in the fridge?', 
            ansA: 'Eleven', ansB: 'Two', ansC: 'Seventy Seven', ansD: 'Eight', 
            correct: 'Eleven'
        },
        {
            id: '8', title: 'How many eggs do you have in the fridge?', 
            ansA: 'Eleven', ansB: 'Two', ansC: 'Seventy Seven', ansD: 'Eight', 
            correct: 'Eleven'
        },
        {
            id: '9', title: 'How many eggs do you have in the fridge?', 
            ansA: 'Eleven', ansB: 'Two', ansC: 'Seventy Seven', ansD: 'Eight', 
            correct: 'Eleven'
        },
        {
            id: '10', title: 'How many eggs do you have in the fridge?', 
            ansA: 'Eleven', ansB: 'Two', ansC: 'Seventy Seven', ansD: 'Eight', 
            correct: 'Eleven'
        },
    ]

    const [correctAns, setcorrectAns] = useState("")

    const CheckAnswer = (value) => {
        for(let i = 0; i< questions.length; i++){
            if(value === questions[i].ansA){
                setcorrectAns("A")
            }
            else if(value === questions[i].ansB){
                setcorrectAns("B")
            }
            else if(value === questions[i].ansC){
                setcorrectAns("C")
            }
            else if(value === questions[i].ansD){
                setcorrectAns("D")
            }
            else{
                setcorrectAns("")
            }
        }
    }

    return (
        <div className='NormalGameContainer'>
            <DrawerNav/>
            <div className="NormalGameBodyContainer">
                {questions && questions.map((item) => (
                    <div key={item.id} className="NormalGameBodyContainer1">
                        <div className='NormalGameQuestionHeader'>
                            <h1>{item.title}</h1>
                        </div>
                        <div className='NormalGameQuestionImg'></div>
                        <div className='NormalGameQuestionsBtnsDiv'>
                            <div className='NormalGameQuestionBtn' onClick={() => CheckAnswer(item.ansA)}>
                                <p>A. {item.ansA}</p>
                            </div>
                            <div className='NormalGameQuestionBtn' onClick={() => CheckAnswer(item.ansB)}>
                                <p>B. {item.ansB}</p>
                            </div>
                            <div className='NormalGameQuestionBtn' onClick={() => CheckAnswer(item.ansC)}>
                                <p>C. {item.ansC}</p>
                            </div>
                            <div className='NormalGameQuestionBtn' onClick={() => CheckAnswer(item.ansD)}>
                                <p>D. {item.ansD}</p>
                            </div>
                        </div>
                    </div>
                ))}
                <div className='NormalGameBodyFinishDiv'>
                    <div className='NormalGameBodyFinishBtn'>
                        <p>Check Answers</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NormalGamePage