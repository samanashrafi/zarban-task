import { ChangeEvent } from "react";

type Props = {
  classNameWrapper?: string;
  type?: string;
  placeholder?: string;
  value?: any;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({
  classNameWrapper = "input-wrapper",
  type = "text",
  placeholder,
  value,
  onChange,
  ...props
}: Props) => {
  return (
    <div className={classNameWrapper}>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...props}
      />
    </div>
  );
};

export default Input;
