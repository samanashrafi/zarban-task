export interface IFTask {
  id: number;
  title: string;
  completed: boolean;
}

export type TaskListProps = {
  tasks: IFTask[];
};
