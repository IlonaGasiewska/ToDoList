import React from 'react';
import './TaskList.sass';

function TaskList(props : any) {

  return (
    <ul className="TaskList">
        {props.tasks.map((task:string) => {<li>task</li>})}
    </ul>
  );
}

export default TaskList;
