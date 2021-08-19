import React, { useState } from 'react';

import { AiOutlinePlusSquare } from 'react-icons/ai';
import { IconContext } from "react-icons";

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
        <IconContext.Provider value={{ color: "blue", size: "2em" }}>
            <form id="addTask">
                <label>Task</label>
                    <input type="text" name="task" 
                    value={task} onChange={updateTaskValue}/>
                
                <label >Description</label>
                    <input type="text" name="description" 
                        value={description} onChange={updateDescriptionValue}/>

                <div onClick={props.add}><AiOutlinePlusSquare /></div>
            </form>
        </IconContext.Provider>
    );
}

export default Add;