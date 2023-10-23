const Mybutton = ({text}) =>{
    const handleClickButton = (title) =>{
      console.log('hadle click'+ title)
    }
    return (<button onClick={()=>handleClickButton(text)}>{text}</button>)
  }
  export default Mybutton;