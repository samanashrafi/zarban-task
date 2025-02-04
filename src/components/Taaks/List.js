import React from "react";

const TaskList = ({ data = [] }) => {
  return (
    <ul className="task-wrapper">
      {data?.map((task) => (
        <li key={task.id}>
          {task.title} - {task.completed ? "✅ Completed" : "❌ Pending"}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
