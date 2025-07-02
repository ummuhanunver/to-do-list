import React, {useState} from 'react'


function App(){


  const[tasks, setTasks]= useState([]);
  const [newTask, setNewTasks] = useState(" ");

  function handleInputChange(event){
    setNewTasks(event.target.value);

  }

  function addTask(){
    if(newTask.trim() !== ""){    
      setTasks(t => [...t, newTask]);
      setNewTasks("")
    }

  }

  function deleteTask(index){
    const updateTasks = tasks.filter((_, i) => i !== index);
    setTasks(updateTasks);

  }

  function moveTaskup(index){
    if(index>0){
      const updateTasks = [...tasks];
      [updateTasks[index], updateTasks[index-1]] = [updateTasks[index-1], updateTasks[index]];
      setTasks(updateTasks);
    }

  }

  function moveTaskDown(index){
      if(index< tasks.length - 1){
      const updateTasks = [...tasks];
      [updateTasks[index], updateTasks[index+1]] = [updateTasks[index+1], updateTasks[index]];
      setTasks(updateTasks);
    }


  }

  return (<div className="to-do-list">

    <h1>To-Do-List</h1>

    <div>
      <input
        type="text"
        placeholder="Enter a task"
        value={newTask}
        onChange={handleInputChange}/>

        <button
        className="add-button"
        onClick={addTask}>
          Add Task
        </button>
    </div>
    <ol>
      {tasks.map((tasks, index) =>
        <li key={index}>
          <span className="text">{task}</span>
          <button 
            className="delete-button"
            onClick={() => deleteTask(index)}>
            Delete
          </button>
          <button 
            className="move-button"
            onClick={() => moveTaskUp(index)}>
            UP
          </button>
          <button 
            className="move-button"
            onClick={() => moveTaskDown(index)}>
            Down
          </button>


        </li>
      )} 
    </ol>

  </div>)

}

export default ToDoList