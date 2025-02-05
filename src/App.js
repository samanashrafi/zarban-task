import { useState, useEffect } from "react";
import useTasks from "./hooks/useTasks";

import FilterCtr from "./containers/filter.ctr";
import TaskCtr from "./containers/task.ctr";

import TaskError from "./components/Tasks/error";
import TaskLoading from "./components/Tasks/loading";

const App = () => {
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [sorting, setSorting] = useState("none");
  const [search, setSearch] = useState("");

  const { error, loading, tasks } = useTasks();

  const handleChangeFilter = (e) => setFilter(e.target.value);

  const handleChangeSearch = (e) => setSearch(e.target.value);

  const handleChangeSorting = (e) => setSorting(e.target.value);

  useEffect(() => {
    let filtered = [...tasks];
    if (sorting !== "none") {
      filtered = tasks.sort((a, b) => {
        const nameA = `${a[sorting]}`.toUpperCase(); // ignore upper and lowercase
        const nameB = `${b[sorting]}`.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

        // names must be equal
        return 0;
      });
    } else {
      debugger;
      filtered = [...tasks];
    }

    if (filter === "completed") {
      filtered = tasks.filter((task) => task.completed);
    } else if (filter === "pending") {
      filtered = tasks.filter((task) => !task.completed);
    }

    if (search) {
      filtered = filtered.filter((task) =>
        task.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredTasks(filtered);
  }, [filter, search, tasks, sorting]);

  if (loading) return <TaskLoading />;
  if (error) return <TaskError error={error} />;

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h1>Task List</h1>
      <FilterCtr
        filter={filter}
        search={search}
        sorting={sorting}
        onChangeFilter={handleChangeFilter}
        onChangeSearch={handleChangeSearch}
        onChangeSorting={handleChangeSorting}
      />
      <TaskCtr data={filteredTasks} />
    </div>
  );
};

export default App;
