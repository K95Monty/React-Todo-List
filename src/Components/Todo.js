import React, { useState } from 'react';
import './Style/Todo.css';
import Delete from './Delete';

import { BsBoxArrowInUp, BsBoxArrowInDown } from 'react-icons/bs';
import { IconContext } from "react-icons";

function Todo(props) {

    const [clicked, setClicked] = useState(false);

    const showDescription = () => { //show the recipe div
        setClicked(true)
    }

    const hideDescription = () => { //hide the recipe div
        setClicked(false)
    } 

return (
    <IconContext.Provider value={{ color: "blue", size: "2em" }}>
        <li key={props.key} className="todo"> {/*for some reason not picking up the key prop :(*/}
            <div className="todo-body">
                <span className="todo-index">{props.id}</span>
                <h3 className="todo-title">{ props.title }</h3>

                <div onClick={ hideDescription } className={ clicked? 'active-clicked todo-icon' : 'clicked'} ><BsBoxArrowInDown /></div>
                <div onClick={ showDescription } className={ clicked? 'clicked' : 'active-clicked'} ><BsBoxArrowInUp /></div>

                <div className={clicked? 'clicked todo-content' : 'active-clicked todo-content'}>
                    <p className="todo-des">{ props.description }</p>
                </div>
            </div>
            <Delete delete={props.delete}/> 
        </li>
    </IconContext.Provider>
    );
}

export default Todo;