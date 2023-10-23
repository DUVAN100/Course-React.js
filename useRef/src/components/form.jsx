import  { useRef } from 'react';
import './form.css'

export const Form = () => {
    const nameValue = useRef("");
    const lastNamesValue = useRef("");
    const emailValue = useRef("");
    const myBox = useRef("");
    const show = e =>{
        e.preventDefault();
        let { current: box } = myBox;
        console.log("nombre", box);
        box.classList.add("backGroundGreen")
        box.innerHTML  = "Form send"
    }
  return (
      <div className="container">
        <h1>Form practice useRef</h1>
        <div ref={myBox} className='myBox'>
            <h2>Pruebas con useRef</h2>
        </div>
        <form onSubmit={show}>
          <div className="input-data">
            <label htmlFor="">Name</label>
            <input type="text" ref={nameValue} required/>
          </div>
          <div className="input-data">
          <label htmlFor="">LastNames</label>
            <input type="text" ref={lastNamesValue}/>
          </div>
          <div className="input-data">
          <label htmlFor="">E-mail</label>
            <input type="text"ref={emailValue}/>    
          </div>
          <div className='container-button'>
            <input className='button' type="submit" value="send"/> 
            <button className='button' onClick={() => { nameValue.current.select() }}>Start to complete the form</button>
          </div>
        </form>
      </div>
  )
}
