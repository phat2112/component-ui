import React, { ChangeEvent, FocusEvent, useState } from "react";
import {
  useController,
  useFormContext,
  RegisterOptions,
} from "react-hook-form";

import Input from ".";

interface FormProps {
  name: string;
  label: string;
  rules: RegisterOptions;
}

const FormInput: React.FC<FormProps> = ({ name, label, rules }) => {
  const [inputValue, setInputValue] = useState<string | undefined>();
  const { control } = useFormContext<any>();
  const {
    field: { ref, value, onChange },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules: rules,
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  console.log("error", error);

  return (
    <Input
      label={label}
      name={name}
      value={inputValue ?? value}
      handleChange={handleChange}
      handleBlur={handleBlur}
      ref={ref}
      error={error}
    />
  );
};

export default FormInput;
