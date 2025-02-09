import { TaskListProps } from "../../interfaces/tasks.interface";

const TaskList = ({ tasks = [] }: TaskListProps) => {
  return (
    <ul className="task-wrapper">
      {tasks?.map((task) => (
        <li key={task.id}>
          <div className="title"> {task.title}</div>
          <div className={`status ${task.completed ? "completed" : "pending"}`}>
            {task.completed ? "Completed" : "Pending"}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
