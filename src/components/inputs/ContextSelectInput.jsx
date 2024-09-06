import React from "react";
import { Select } from "@mantine/core";
import { Controller, useFormContext } from "react-hook-form";

const ContextSelectInput = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext(); // retrieve all hook methods

  return (
    <Controller
      name="state"
      control={control}
      defaultValue=""
      render={({ field }) => (
        <Select
          label="State"
          placeholder="Pick a state"
          data={[
            "Gujarat",
            "New York",
            "Bihar",
            "California",
            "Rajasthan",
            "Assam",
          ]}
          {...field}
          error={errors.state ? errors.state.message : null}
        />
      )}
    />
  );
};

export default ContextSelectInput;
