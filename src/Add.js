import React, { useState } from 'react';
// import Todos from './Todos';

function Add(props) {
    
    const [task, setTask] = useState('');
    const [description, setDescription] = useState('');

const getTask = task;
const getDescription = description;
    
const updateTaskValue = (e) => {
    setTask(e.target.value);
  }

  const updateDescriptionValue = (e) => {
    setDescription(e.target.value);
  }

    return (
        <form id="addTask">
            <label >Task</label>
                <input type="text" name="task" 
                value={task} onChange={updateTaskValue}/>
            
            <label >Description</label>
                <input type="text" name="description" 
                    value={description} onChange={updateDescriptionValue}/>

            <button onClick={props.add}>Add Task</button>
        </form>
    );
}

export default Add;