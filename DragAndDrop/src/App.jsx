import { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import './index.css';


// const initialTodos = JSON.parse(localStorage.getItem('todos')) || [
//   { id: 1, text: "Aprender React js" },
//   { id: 2, text: "Aprender js" },
//   { id: 3, text: "Aprender Vue js" },
// ];
const initialTodos = [
  { id: 1, text: "Aprender React js" },
  { id: 2, text: "Aprender js" },
  { id: 3, text: "Aprender Vue js" },
];
export default function App() {
  const [todos, setTodos] = useState(initialTodos)
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
    console.log("save")
  }, [todos])
  const handleDragEnd = result=>{
    if (!result.destination)return;
    console.log("result", result);
    const startIndex = result.source.index;
    const endIndex = result.destination.index;
    const copyArray = [...todos]
    const [reorderItem] = copyArray.splice(startIndex, 1)
    copyArray.splice(endIndex, 0,reorderItem)
    setTodos(copyArray)
  }
  return (
    <>
    <div className="container">
      <DragDropContext onDragEnd={handleDragEnd}>
        <h1>Todo App</h1>
        <Droppable droppableId="todos">
          {(droppableProvider)=>(
              <ul 
                ref={droppableProvider.innerRef} 
                {...droppableProvider.droppableProps}>
                {todos.map((todo, index) => (
                    <Draggable key={todo.id} draggableId={`${todo.id}`} index={index}>
                      {
                        (draggableProvicder)=>(
                          <li 
                            ref={draggableProvicder.innerRef}
                            {...draggableProvicder.draggableProps}
                            {...draggableProvicder.dragHandleProps}
                            >
                            {todo.text}
                          </li>    
                        )
                      }
                    </Draggable>  
                ))}
                {droppableProvider.placeholder}
              </ul>  
            )
          }
        </Droppable>
        
      </DragDropContext>
    </div>
    
    </>
  )
}


