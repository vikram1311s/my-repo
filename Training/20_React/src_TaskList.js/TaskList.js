import { useState } from 'react';

function TaskList() {
  const [taskInput, setTaskInput] = useState(''); // State variable to store the input value for a new task
  const [error, setError] = useState('');
  const [tasks, setTasks] = useState([{ // State variable to store the list of tasks
    name: 'Go to Tour',
    id: 1
  }, {
    name: 'Office work',
    id: 2
  }]);

  const addTask = () => {
    debugger; // Debugger statement for debugging purposes

    // Check if the task name already exists in the tasks list
    let isNameAlreadyThere = tasks.find(t => t.name === taskInput);
    if (isNameAlreadyThere) {      
      return; // If the task name already exists, do not add it again
    }

    // If the task input is not empty, create a new task object
    if (taskInput !== '') {
      const task = {
        name: taskInput,
        id: tasks.length + 1
      };

      let tempTasks = tasks;
      tempTasks = [...tempTasks, task]; // Add the new task to the temporary tasks array

      setTasks(tempTasks); // Update the tasks state with the updated tasks array

      setTaskInput(''); // Clear the taskInput field by setting it to an empty string
    }
  }

  const deleteTask = (task) => {
    // Check if the task name already exists in the tasks list
    let filterTasks = tasks.filter(t => t.id != task.id);
    setTasks(filterTasks);
  }

  const handleInputChange = (e) => {
    setTaskInput(e.target.value);
    const tempValue = e.target.value;
    let isNameAlreadyThere = tasks.find(t => t.name === tempValue);
    if (isNameAlreadyThere) {
      setError(true)      
    }else {
       setError(false)
    }

  }

  return (
    <div>
      <input type="text" value={taskInput} onChange={(e) =>  handleInputChange(e) } /> {/* Input field for entering task */}
      <button onClick={() => addTask()}>add</button> {/* Button to add a new task */}
      {error && <div style={{color: 'red'}}> task is already exists </div>}
      <ul>
        {/* Render the list of tasks */}
        {
          tasks.map((t) => {
            return <li key={t.id}>{t.name} <button onClick={()=> deleteTask(t)}>X</button></li>;
          })
        }
      </ul>
    </div>
  );
}

export default TaskList;
