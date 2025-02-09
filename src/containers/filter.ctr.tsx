import { ChangeEvent } from "react";
import Input from "../components/dataEntry/input";
import Select from "../components/dataEntry/select";
import { FILTER_OPTIONS, SORTING_OPTIONS } from "../helpers/enum";

type Props = {
  className?: string;
  filter?: string | undefined;
  search?: string | undefined;
  sorting?: string | undefined;
  onChangeFilter?: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeSearch?: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeSorting?: (e: ChangeEvent<HTMLInputElement>) => void;
};

const FilterCTR = ({
  className = "filter-side",
  filter,
  search,
  sorting,
  onChangeFilter,
  onChangeSearch,
  onChangeSorting,
}: Props) => {
  return (
    <div className={className}>
      <Input
        type="text"
        placeholder="Search tasks..."
        value={search}
        onChange={onChangeSearch}
      />
      <Select
        value={filter}
        options={FILTER_OPTIONS}
        onChange={onChangeFilter}
      />

      <Select
        value={sorting}
        options={SORTING_OPTIONS}
        onChange={onChangeSorting}
      />
    </div>
  );
};

export default FilterCTR;
