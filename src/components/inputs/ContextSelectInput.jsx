import React from "react";
import { Select } from "@mantine/core";
import { Controller, useFormContext } from "react-hook-form";
import { STATE_OPTIONS_LIST } from "../../helper/constants";

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
          label={label}
          placeholder={`Select a ${label}`}
          data={options}
          {...field}
          error={errors.state ? errors.state.message : null}
          withAsterisk
          {...props}
        />
      )}
    />
  );
};

export default ContextSelectInput;
