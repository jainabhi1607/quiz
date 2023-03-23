import React, { useContext, useEffect, useRef, useState } from 'react'
import { data } from './data.js';
import './App.css'

function App() {
    //const {quizData} = useContext(data);
    const quizData = data._currentValue;
    const quizLength = quizData.lenght;
    const [totalCorrect , setTotalCorrect ] = useState(0)
    const [counter , setCounter ] = useState(0)
    const [timer , setTimer ] = useState(5)
    const [userAnswers , setUserAnswers ] = useState([])
    const [currentAnswer , setCurrentAnswer ] = useState('')

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer(timer => timer - 1);
        }, 1000);
        return () => clearInterval(interval);
      }, []);

    useEffect(() =>{
        if(timer === 0 ){
          setUserAnswers([...userAnswers , currentAnswer])
          setCurrentAnswer('')
            setCounter(counter => counter+1)
            setTimer(5)
        }
    },[timer,currentAnswer,userAnswers,counter])

    useEffect(() =>{
          if(counter === 5){
            let increament = 0;
            setCounter(6);
            userAnswers.forEach((value,index)=>{
              
              if(parseInt(value) === parseInt(quizData[index].answer)){
                setTotalCorrect(increament => increament + 1)
              }
            })
          }
  },[timer,userAnswers,counter,quizData])

    function saveUserAnswer(e){
        setCurrentAnswer(e.currentTarget.value)
    }

  return (
    <>
    <div className='mainClass'>
    <h1>Quiz</h1>
    { counter < 5 ? 
    <>
    <span className='timerBlock'>{timer}</span>
    <div className='clear paddB20'></div>
        {quizData[counter].question}
        {quizData[counter].options.map((options,index) => {
          return <div><input type="radio" name={'ref_' + counter} value ={options} onChange={saveUserAnswer}></input><span>{options}</span></div>
      })}</> : 
      <>
      <h3>Result {totalCorrect}</h3> 
      </>
  }
    </div>
    </>
  )
}

export default App