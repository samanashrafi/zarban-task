import { useEffect, useState } from "react";

const useFilter = ({
  tasks,
  filterName = "all",
  sortingName = "none",
  setData,
}) => {
  const [filter, setFilter] = useState(filterName);
  const [sorting, setSorting] = useState(sortingName);
  const [search, setSearch] = useState("");

  const onChangeFilter = (e) => setFilter(e.target.value);

  const onChangeSearch = (e) => setSearch(e.target.value);

  const onChangeSorting = (e) => setSorting(e.target.value);

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

    setData(filtered);
  }, [filter, search, tasks, sorting]);

  return {
    filter,
    search,
    sorting,
    onChangeFilter,
    onChangeSearch,
    onChangeSorting,
  };
};

export default useFilter;
