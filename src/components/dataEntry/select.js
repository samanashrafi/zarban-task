import React from "react";

const Select = ({ classNameWrapper, options = [], value, onChange }) => {
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
