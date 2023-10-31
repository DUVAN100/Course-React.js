import { useState, useEffect } from "react"
import { Employees } from "./employees"
import '../App.css'

export const Manager = () => {
    const [nameManager, setNameManager] = useState('Duvan Vivas');
    const [page, setPage] = useState(1)
    const assingManager = e =>{
      setNameManager(e.target.value);
    }
    const updatepage = (nuevaPagina) => {
      setPage(nuevaPagina);
    };
    useEffect(() => {
      console.log("loading view manager")
    }, [nameManager, page])
    
    
  return (
    <>
        <h1>Name of Manager: {nameManager}</h1>
        <input type="text"  onChange={assingManager} placeholder="Introoduce your name"/>
        <h2>List of employes</h2>
        <p>Users updates for {nameManager}</p>
        <p>Users come from jsonPlaceholder </p>
        <div>
          <button onClick={() => updatepage(1)}>Ir a la Página 1</button>
          <button onClick={() => updatepage(2)}>Ir a la Página 2</button>
        </div>
        <Employees page={page}/>

    </>
  )
}
