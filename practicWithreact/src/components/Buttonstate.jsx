import React from 'react'
import { useState } from 'react'

const Buttonstate = () => {
    const [count, setCount] = useState(0)
    const addOneValue = () =>{
        setCount(count + 1)
    }
    const subtractOneVValue = () =>{
        setCount(count - 1)
    }
    
  return (
    <>
        <button onClick={addOneValue} >Add one value:{count}</button>
        <button onClick={subtractOneVValue} >Add one value:{count}</button>
    </>
    
  )
}
export default Buttonstate;