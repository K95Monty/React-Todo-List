import React from 'react';
import Todo from './Todo';
import Add from './Add';

import './Style/Todos.css';


function Todos(props) {

    const todosList = [
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
        {
            id: "3",
            title: 'study',
            description:'bones in the human body',
        },
        {
            id: "4",
            title: 'garden',
            description:'water the plants',
        },
    ];
    
    const addTodoHandler = () => { //we need a formula to check if the values are empty
        console.log("added new todo")
        // const number = todos.length + 1;
        // const addTask = {
        //     id: number,
        //     title: Add.updateTaskValue,
        //     description: Add.updateDescriptionValue,
        // };
        // todos.push(addTask) 
        // setTodoTask(addTask);
        // console.log(todos);
    }

    const deleteTodoHandler = (id) => {
        
        // here we are filtering - the idea is remove an item from the todo array on a button click
    const removeItem = todosList.filter((todo) => {
        // return the rest of the todos that don't match the item we are deleting
        return todo.id !== id;
      });
      // removeItem returns a new array - so now we are setting the todos to the new array
    //   setTodos(removeItem);
        
    }

    return (
        <div>
            <ul className="todos">
                {todosList.map(todo => (
                    <Todo 
                        title={todo.title}
                        description={todo.description}
                        key={todo.index}
                        id={todo.id}
                        delete={deleteTodoHandler}
                    /> 
                ))}
            </ul>
            <Add add={addTodoHandler}/> 
        </div>
    );
}

export default Todos;