import React from "react";
import TaskList from "../components/Tasks/List";
import { IFTask } from "../interfaces/tasks.interface";

type Props = {
  data: IFTask[];
};
const TaskCtr = ({ data }: Props) => {
  return <TaskList tasks={data} />;
};

export default TaskCtr;
