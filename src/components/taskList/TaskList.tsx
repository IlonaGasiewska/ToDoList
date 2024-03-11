import './TaskList.sass';
import { Task } from '../../types/types';
 
type TaskListProps = {
  tasks: Task[],
  deleteTask: (taskId: number) =>void
}
 
const TaskList = ({deleteTask, tasks}:TaskListProps) => {
  return (
    <div className="TaskList">
      {tasks.length === 0 && <p>Nothing to do</p>}
      <ul className="TaskList">
        {tasks.map((task: Task )=> (
          <li onClick={()=>{deleteTask(task.id)}} key={task.id}>{task.name}</li>
        ))}
      </ul>
    </div>
  );
}
 
export default TaskList;