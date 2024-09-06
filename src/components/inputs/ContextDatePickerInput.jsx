import { Controller, useFormContext } from "react-hook-form";
import { DateInput } from "@mantine/dates";

const ContextDatePickerInput = ({ name, label, props }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext(); // retrieve all hook methods

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <DateInput
          value={field.value}
          onChange={field.onChange}
          error={errors?.[name] ? errors?.[name].message : null}
          label={label}
          placeholder={`Select a ${label}`}
          withAsterisk
          {...field}
          {...props}
        />
      )}
    />
  );
};

export default ContextDatePickerInput;
