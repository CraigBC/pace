import { FC } from "react";
import { Alert } from "@/components/Alert";
import StringInput, {
  StringInputType,
} from "@/components/forms/primitives/StringInput";

export interface TextFieldProps {
  label: string;
  type: StringInputType;
  name: string;
  id: string;
  placeholder?: string;
  helpText?: string;
  error?: string;
}

export const TextField: FC<TextFieldProps> = ({
  label,
  type,
  name,
  id,
  placeholder,
  helpText,
  error,
}) => {
  const isError = !!error;
  return (
    <>
      {isError && (
        <div className="mb-4">
          <Alert alertText={error} />
        </div>
      )}
      <div>
        <label htmlFor={id}>{label}</label>
        <div
          className={`mt-2 ${isError ? "relative rounded-md shadow-sm" : ""}`}
        >
          <StringInput
            type={type}
            name={name}
            id={id}
            className={`block w-full rounded-md border-0 py-1.5 ${
              isError
                ? "pr-10 text-red-900 ring-2 ring-inset ring-red-300 placeholder:text-red-600 focus:ring-2 focus:ring-inset focus:ring-red-500"
                : "text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-primary-600"
            } sm:text-sm sm:leading-6`}
            placeholder={placeholder}
            aria-describedby={
              error ? `${id}-error` : helpText ? `${id}-description` : undefined
            }
            aria-invalid={isError}
          />
        </div>
        {helpText && !isError && (
          <p className="mt-2 text-sm text-neutral-500" id={`${id}-description`}>
            {helpText}
          </p>
        )}
      </div>
    </>
  );
};
