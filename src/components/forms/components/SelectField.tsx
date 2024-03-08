import { FC } from "react";
import { Alert } from "@/components/Alert";
import SelectInput, {
  SelectInputProps,
} from "@/components/forms/primitives/SelectInput";

export interface SelectFieldProps extends SelectInputProps {
  label: string;
  helpText?: string;
  error?: string;
  selectOptions: string[];
}

export const SelectField: FC<SelectFieldProps> = ({
  label,
  name,
  id,
  textPlaceholder,
  helpText,
  error,
  selectOptions,
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
          <SelectInput
            id={id}
            name={name}
            textPlaceholder={textPlaceholder}
            options={selectOptions}
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
