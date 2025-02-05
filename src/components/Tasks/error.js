import React from "react";

const TaskError = ({ error = "" }) => {
  return <p>Error: {error}</p>;
};

export default TaskError;
