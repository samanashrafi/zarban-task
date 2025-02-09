type Props = {
  loading?: boolean;
};

const TaskLoading = ({ loading = false }: Props) => {
  return loading && <p>Loading tasks...</p>;
};

export default TaskLoading;
