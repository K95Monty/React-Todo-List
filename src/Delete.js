import React from 'react';
// import Todos from './Todos';

function Delete(props) {

  return (
    <>
        <button onClick={props.delete}>Remove Task</button>
    </>
  );
}

export default Delete;