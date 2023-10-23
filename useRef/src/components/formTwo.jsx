import {useState, useEffect, useRef } from 'react';
import './form.css';

export const FormTwo = () => {
    const [numberGreeting, setNumberGreeting] = useState(0)
    const [countCurrent, setCountCurrent] = useState(0)
    const greetingRabbit = useRef(numberGreeting)
    const sendGreeting = () =>{
        console.log("saludo enviado")
        setNumberGreeting(numberGreeting + 1)
    }
    useEffect(() => {
      setTimeout(()=>{
        greetingRabbit.current = numberGreeting;
        setCountCurrent(greetingRabbit.current)
      },2000)
    }, [numberGreeting])
    
  return (
    <div className='container-block-two'>
        <h1>Example Two with useRef</h1>
        <h2>Greetings sent:{numberGreeting}</h2>
        <button  className='button' onClick={sendGreeting}>Send greeting</button>
        <h1>This values it is current: {countCurrent}</h1>
        <h1>----------------------------------------------</h1>
        
    </div>
  )
}
