import React from 'react';

import { AiOutlineMinusSquare } from 'react-icons/ai';
import { IconContext } from "react-icons";

function Delete(props) {
  
  return (
    <IconContext.Provider value={{ color: "blue", size: "2em" }}>
      <div onClick={props.delete}><AiOutlineMinusSquare /></div>
    </IconContext.Provider>
  );
}

export default Delete;