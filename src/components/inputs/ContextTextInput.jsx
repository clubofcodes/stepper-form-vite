import { TextInput } from "@mantine/core";

import { Controller, useFormContext } from "react-hook-form";

const ContextTextInput = ({ name, label = "", props }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext(); // retrieve all hook methods

  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field }) => (
        <TextInput
          label={label}
          placeholder={`Enter your ${label}`}
          {...field}
          error={errors?.[name] ? errors?.[name].message : null}
          withAsterisk
          {...props}
        />
      )}
    />
  );
};

export default ContextTextInput;
