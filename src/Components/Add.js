import React, { useState } from 'react';
import './Style/Add.css';

function Add(props) {
    
    const [task, setTask] = useState('');
    const [description, setDescription] = useState('');
    
const updateTaskValue = (e) => {
    setTask(e.target.value);
  }

  const updateDescriptionValue = (e) => {
    setDescription(e.target.value);
  }  

    return (
        <div className="form-container">
            <form id="addTask" onSubmit={props.add}>
                <label>Task</label>
                    <input type="text" name="task" 
                    value={task} onChange={updateTaskValue}
                    className='new-line'/>
                
                <label>Description</label>
                    <input type="text" name="description" 
                        value={description} onChange={updateDescriptionValue}
                        className='new-line' />

                <input type="submit" value="Add Task"/>
            </form>
        </div>
    );
}

export default Add;