import React, { useState } from 'react';

import './Style/Todos.css';

function Todo(props) {

     const [clicked, setClicked] = useState(false);

    const showDescription = () => { //show the recipe div
        setClicked(true)
    }

    const hideDescription = () => { //hide the recipe div
        setClicked(false)
    } 

    return (
        <li key={props.id} className="todo"> {/*for some reason not picking up the key prop :(*/}
                        <div className="todo-body">
                            <div className="todo-heading">
                                <span className="todo-index">{props.id}</span>
                                <h3 className="todo-title">{ props.title }</h3>
                            </div>
                            <div className="todo-card">
                                <button onClick={ hideDescription } className={ clicked? 'active-clicked todo-btn' : 'clicked todo-btn'} >Show Task</button>
                                <button onClick={ showDescription } className={ clicked? 'clicked todo-btn' : 'active-clicked todo-btn'} >Hide Task</button>
                                <div className={clicked? 'clicked todo-content' : 'active-clicked todo-content'}>
                                    <p className="todo-des">{props.description}</p>
                                </div>
                            </div>
                            <div className="todo-center">
                                <button onClick={props.delete} className="delete-btn">X</button>
                            </div>
                        </div>
                    </li>
        
    )
}

export default Todo;