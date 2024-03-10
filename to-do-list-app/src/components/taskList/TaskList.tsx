import './TaskList.sass';
import { Task } from '../../types/types';
 
interface TaskListProps {
  tasks: Task[],
  deleteItem: any
}
 
const TaskList = (props:TaskListProps) => {
  return (
    <div className="TaskList">
      {props.tasks.length === 0 && <p>Nothing to do</p>}
      <ul className="TaskList">
        {props.tasks.map((task: Task )=> (
          <li onClick={()=>{props.deleteItem(task.id)}} key={task.id}>{task.name}</li>
        ))}
      </ul>
    </div>
  );
}
 
export default TaskList;