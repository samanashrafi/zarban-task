import React from "react";

const Input = ({
  classNameWrapper = "input-",
  type = "text",
  placeholder,
  value,
  onChange,
  ...props
}) => {
  return (
    <div className={classNameWrapper}>
      <input
        type={type}
        placeholder={placeholder}
        value={search}
        onChange={onChange}
        {...props}
      />
    </div>
  );
};

export default Input;
