import React from "react";
import { Select } from "@mantine/core";
import { Controller, useFormContext } from "react-hook-form";

const ContextSelectInput = ({ name, label, options, props }) => {
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
        <Select
          tt={"capitalize"}
          styles={{
            input: { textTransform: "capitalize" },
            options: { textTransform: "capitalize" },
          }}
          label={label}
          placeholder={`Select a ${label}`}
          data={options}
          {...field}
          error={errors?.[name] ? errors?.[name].message : null}
          withAsterisk
          {...props}
        />
      )}
    />
  );
};

export default ContextSelectInput;
