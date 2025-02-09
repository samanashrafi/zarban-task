import { useState } from "react";

// custom hooks
import useFilter from "./hooks/useFilter";
import useTasks from "./hooks/useTasks";

// Containers
import FilterCtr from "./containers/filter.ctr";
import TaskCtr from "./containers/task.ctr";

// Components
import TaskError from "./components/Tasks/error";
import TaskLoading from "./components/Tasks/loading";

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
    <div className="task-layout">
      <h1>Task List</h1>
      <div className="task-grid">
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
    </div>
  );
};

export default App;
