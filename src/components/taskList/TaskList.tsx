import { TaskListTypes } from '../../types/types';
import { TaskTypes } from '../../types/types';
import './TaskList.scss';

const TaskList = ({ deleteTask, tasks }: TaskListTypes) => {
  return (
    <div className="TaskList">
      {tasks.length === 0 && <p>Nothing to do</p>}
      <ul className="TaskList">
        {tasks.map((task: TaskTypes) => (
          <li
            onClick={() => {
              deleteTask(task.id);
            }}
            key={task.id}
          >
            {task.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export { TaskList };
