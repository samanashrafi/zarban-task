import { ChangeEvent } from "react";

interface IFSelectOptions {
  key: any;
  title: any;
}

type Props = {
  classNameWrapper?: string;
  options: IFSelectOptions[];
  value?: any;
  onChange?: (e: ChangeEvent<HTMLInputElement> | any) => void;
};

const Select = ({
  classNameWrapper = "input-wrapper",
  options = [],
  value,
  onChange,
}: Props) => {
  return (
    <div className={classNameWrapper}>
      <select value={value} onChange={onChange}>
        {options?.map((item) => (
          <option value={item?.key || item}>{item?.title || item}</option>
        ))}
      </select>
    </div>
  );
};

export default Select;
