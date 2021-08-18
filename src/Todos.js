import React, { useState } from 'react';
import Add from './Add';
import Delete from './Delete';

function Todos(props) {

    const [todoTask, setTodoTask] = useState({});

    const todos = [
        {
            number: 1,
            title: 'coffee',
            description:'meet at Costa',
        },
        {
            number: 2,
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

    const deleteTodo = () => {
        const number = todos.number;  
        todos.splice(number, 1);    //find the position
        console.log("remove todo");
        console.log(this.number); //todos number
    }

    

    
  

    return (
        <>
            {Object.values(todos).map((todo, index) => (
                <li key={index}>
                    <div>
                        <span>{todo.number}</span>
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