import React from 'react';
import Todos from './Todos';
import Add from './Add';

import './Style/Card.css'

function Card() {

  return (
    <div className="card">
      <ul>
          <Todos/>
      </ul>
      <Add /> 
    </div>
  );
}

export default Card;