import { useEffect, useState } from "react";

const UseTasks = () => {
  const [state, setState] = useState({
    error: null,
    loading: true,
    tasks: [],
  });

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch tasks");
        }
        return response.json();
      })
      .then((data) => {
        setState((newState) => ({
          ...newState,
          loading: false,
          tasks: data,
        }));
      })
      .catch((error) => {
        setState((newState) => ({
          ...newState,
          error: error.message,
          loading: false,
        }));
      });
  }, []);

  return state;
};

export default UseTasks;
