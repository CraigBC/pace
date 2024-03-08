import React from "react";

// Define a new type that restricts the allowed types for the input component
export type StringInputType = "text" | "email" | "search" | "password" | "url";

// Extend the native input props but override the type property
export interface StringInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  type: StringInputType;
}

const StringInput: React.FC<StringInputProps> = ({ type, ...rest }) => {
  return <input type={type} {...rest} />;
};

export default StringInput;
