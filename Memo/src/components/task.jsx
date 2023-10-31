import { toast } from 'react-toastify';
import { useMemo, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import '../App.css';

export const Task = () => {
  const [task, setTask] = useState([]);
  const [taskDescription, setTaskDescription] = useState('');
  const [count, setCount] = useState(1325);

  const saveTask = (e) => {
    e.preventDefault();
    const newTaskDescription = e.target.description.value;
    if (newTaskDescription) {
      setTask((tasks) => [...tasks, newTaskDescription]);
      setTaskDescription('');
    } else {
      console.log("The set is empty");
      toast.error("El conjunto está vacío", { autoClose: 30000 });
      console.log("Llegó al bloque else");
    }
  };

  const deleteTask = (id, nameTask) => {
    const newTasks = task.filter((_, index) => index !== id || task[index] !== nameTask);
    setTask(newTasks);
  };

  const sumToCount = () => {
    setCount(count + 1);
  };

  const countPast = (accumulator) => {
    for (let index = 0; index <= accumulator; index++) {
      console.log("Executing accumulator of counts from past...");
    }
    return `Manual Count of tasks: ${accumulator}`;
  };

  const memoCounts = useMemo(() => countPast(count), [count]);

  return (
    <div>
      <h3>My Tasks</h3>
      <Form onSubmit={saveTask}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="custom-padding">Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Describe your homework"
            name="description"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
          />
        </Form.Group>
        <Button variant="success" type="submit">
          Save
        </Button>
      </Form>
      <h3>{memoCounts}</h3>
      <Button onClick={sumToCount}>sum</Button>
      <h1>List of tasks</h1>
      <div className="listEmployees">
        <ul>
          {task.length >= 1 &&
            task.map((nameTask, index) => (
              <li className="taks-list" key={index}>
                {nameTask}
                &nbsp;
                <button onClick={() => deleteTask(index, nameTask)}>x</button>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};
