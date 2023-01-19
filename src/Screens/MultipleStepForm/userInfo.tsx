import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import FormInput from "Components/ui/Input/FormInput";

type FormProps = {
  username: string;
  birthday: string;
  phone: string;
  email: string;
};

const initValues: FormProps = {
  username: "",
  birthday: "",
  phone: "",
  email: "",
};

const UserInfo = () => {
  const methods = useForm<FormProps>({
    defaultValues: initValues,
    mode: "all",
  });

  const onNextStep = (values: FormProps) => {
    console.log("values", values);
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onNextStep)}>
        <FormInput
          name="username"
          label="Username"
          rules={{ required: "Username is required" }}
        />

        <FormInput
          name="phone"
          label="Phone"
          rules={{ required: "Phone is required" }}
        />

        <FormInput
          name="email"
          label="Email"
          rules={{
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          }}
        />

        <button type="submit">Submit</button>
      </form>
    </FormProvider>
  );
};

export default UserInfo;
