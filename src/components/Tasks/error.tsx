type Props = {
  error?: string;
};

const TaskError = ({ error = "" }: Props) => {
  return <p>Error: {error}</p>;
};

export default TaskError;
