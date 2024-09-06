import React from "react";
import { COMPANY_WFH_POLICY_RADIO_OPTION_LIST } from "../../helper/constants";
import { Radio, Group } from "@mantine/core";
import { Controller, useFormContext } from "react-hook-form";

const ContextRadioInput = ({ name, label, options, props }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext(); // retrieve all hook methods

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={""}
      render={({ field }) => (
        <>
          <Radio.Group
            defaultValue={""}
            label={label}
            withAsterisk
            error={errors?.[name] ? errors?.[name].message : null}
            onChange={field.onChange}
            {...field}
            {...props}
          >
            <Group mt="xs">
              {options.map((RadioItem, index) => (
                <Radio
                  key={`${RadioItem.value}_${index}`}
                  label={RadioItem.label}
                  value={RadioItem.value}
                />
              ))}
            </Group>
          </Radio.Group>
        </>
      )}
    />
  );
};

export default ContextRadioInput;
