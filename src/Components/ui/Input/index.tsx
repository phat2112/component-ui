import { ChangeEvent, FocusEvent, forwardRef } from "react";
import { FieldError, RefCallBack } from "react-hook-form";

export interface Props {
  name: string;
  label: string;
  value: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (event: FocusEvent<HTMLInputElement>) => void;
  error?: FieldError;
}

const Input = forwardRef<RefCallBack, Props>(
  ({ name, label, value, handleChange, handleBlur, error }, ref) => {
    return (
      <div className="text-input">
        <div className="text-input__wrapper">
          <input
            ref={(node) => {
              if (typeof ref === "function") {
                ref(node as any);
              }
            }}
            type="text"
            name={name}
            value={value}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <label htmlFor={name}>{label}</label>
        </div>
        {error && <p className="text-input__error">{error.message}</p>}
      </div>
    );
  }
);

export default Input;
