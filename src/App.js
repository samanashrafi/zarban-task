import { useState, useEffect } from "react";
import useTasks from "./hooks/useTasks";

import FilterCtr from "./containers/filter.ctr";
import TaskCtr from "./containers/task.ctr";

import TaskError from "./components/Tasks/error";
import TaskLoading from "./components/Tasks/loading";
import useFilter from "./hooks/useFilter";

const App = () => {
  const [data, setData] = useState([]);

  const { error, loading, tasks } = useTasks();
  const {
    filter,
    search,
    sorting,
    onChangeFilter,
    onChangeSearch,
    onChangeSorting,
  } = useFilter({ tasks, setData });
  

  if (loading) return <TaskLoading />;
  if (error) return <TaskError error={error} />;

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h1>Task List</h1>
      <FilterCtr
        filter={filter}
        search={search}
        sorting={sorting}
        onChangeFilter={onChangeFilter}
        onChangeSearch={onChangeSearch}
        onChangeSorting={onChangeSorting}
      />
      <TaskCtr data={data} />
    </div>
  );
};

export default App;
