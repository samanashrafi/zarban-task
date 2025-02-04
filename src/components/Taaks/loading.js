import React from "react";

const TaskLoading = ({ loading = false }) => {
  return loading && <p>Loading tasks...</p>;
};

export default TaskLoading;
