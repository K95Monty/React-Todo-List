import React, { useState } from 'react';
import Todo from './Todo';
import Add from './Add';
import Delete from './Delete';

function Todos(props) {

    const [todoTask, setTodoTask] = useState({});

    const todos = [
        {
            id: "1",
            title: 'coffee',
            description:'meet at Costa',
        },
        {
            id: "2",
            title: 'workout',
            description:'gym',
        },
      ];

    const addTodo = () => { //we need a formula to check if the values are empty
        const number = todos.length + 1;
        const addTask = {
            id: number,
            title: Add.updateTaskValue,
            description: Add.updateDescriptionValue,
        };
        todos.push(addTask) 
        setTodoTask(addTask);
        console.log(todos);
    }

    const deleteTodo = () => {
        
        const number = 1//find id number of todo to be deleted
        todos.splice(number, 1);    //find the position and remove at that position in the object
        console.log("remove todo");
        console.log(number); //todos number    
        //this works HURRAY!!!! now we need to change the state once deleted and make sure the correct task is deleted/removed from the object:)
    }

    return (
        <div className="todos">
            {todos.map(todo => (
                <Todo 
                    title={todo.title}
                    description={todo.description}
                    key={todo.index}
                    id={todo.id}
                    delete={deleteTodo}
                    /> 
                ))
            }
            
            <Add add={addTodo}/> 
        </div>
    );
}

export default Todos;