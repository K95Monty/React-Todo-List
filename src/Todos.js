import React, { useState } from 'react';
import Add from './Add';
import Delete from './Delete';

function Todos(props) {

    const [todoTask, setTodoTask] = useState({});

    const todos = [
        {
            id: 1,
            title: 'coffee',
            description:'meet at Costa',
        },
        {
            id: 2,
            title: 'workout',
            description:'gym',
        },
      ];

    const addTodo = () => {
        const number = todos.length + 1;
        const addObject = {
            number: number,
            title: Add.getTask,
            description: Add.getDescription,
        };
        todos.push(addObject) 
        console.log(todos);
    }

    const deleteTodo = (e) => {
        const number = e.target.index;  //find number of todo to be deleted
        todos.splice(number, 1);    //find the position and remove at that position in the object
        console.log("remove todo");
        console.log(todos); //todos number    //this works HURRAY!!!! now we need to change the state once deleted and make sure the correct task is deleted/removed from the object:)
    }

    

    
  

    return (
        <>
            {Object.values(todos).map((todo, index) => (
                <li key={index}>
                    <div>
                        <span>{todo.id}</span>
                        <h3>{ todo.title } </h3>
                        <p>{ todo.description }</p>
                    </div>
                    <Delete delete={deleteTodo}/> 
                </li>
                ))
            }
            <Add add={addTodo}/> 
        </>
    );
}

export default Todos;