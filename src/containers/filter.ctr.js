import React from "react";

import Input from "../components/dataEntry/input";
import Select from "../components/dataEntry/select";
import { FILTER_OPTIONS, SORTING_OPTIONS } from "../helpers/enum";

const FilterCTR = ({
  filter,
  search,
  sorting,
  onChangeFilter,
  onChangeSearch,
  onChangeSorting,
}) => {
  return (
    <div>
      <Input
        type="text"
        placeholder="Search tasks..."
        value={search}
        onChange={onChangeSearch}
      />
      <Select
        value={filter}
        onChange={onChangeFilter}
        options={FILTER_OPTIONS}
      />

      <Select
        value={sorting}
        onChange={onChangeSorting}
        options={SORTING_OPTIONS}
      />
    </div>
  );
};

export default FilterCTR;
