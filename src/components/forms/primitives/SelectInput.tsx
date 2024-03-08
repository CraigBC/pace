import React from "react";

export interface SelectInputProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  textPlaceholder: string;
  options: string[];
}

const SelectInput: React.FC<SelectInputProps> = ({
  id,
  name,
  defaultValue = "",
  textPlaceholder = "",
  options,
  ...rest
}) => {
  return (
    <>
      <select id={id} name={name} defaultValue={defaultValue} {...rest}>
        <option value={defaultValue}>{textPlaceholder}</option>
        {options.map((option, index) => (
          // Use option value combined with index as key for uniqueness in cases where options might be duplicated
          <option key={`${option}-${index}`}>{option}</option>
        ))}
      </select>
    </>
  );
};

export default SelectInput;
