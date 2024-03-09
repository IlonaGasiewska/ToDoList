import React from 'react';
import './TaskList.sass';
 
interface TaskListProps {
  tasks: string[];
}
 
const TaskList = (props:TaskListProps) => {
  return (
    <ul className="TaskList">
      {props.tasks.map((task: string) => (
        <li key={task}>{task}</li>
      ))}
    </ul>
  );
}
 
export default TaskList;