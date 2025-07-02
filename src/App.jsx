import { useState } from 'react';
import ToDoList from './ToDoList';

function App(){


  const[tasks, setTasks]= useState([]);
  const [newTask, setNewTasks] = useState(" ");

  function handleInputChange(event){
    setNewTasks(event.target.value);

  }

  function addTask(){

  }

  function deleteTask(index){

  }

  function moveTaskup(index){

  }

  function moveTaskup(index){

  }

  return (<div className="to-do-list">

    <h1>To-Do-List</h1>

    <div>
      <input
        type="text"
        placeholder="Enter a task"
        value={newTask}
        onChange={handleInputChange}/>
    </div>

  </div>)

}

export default ToDoList