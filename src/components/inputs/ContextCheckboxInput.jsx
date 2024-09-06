import React from "react";
import { COMPANY_WORKING_FIELDS_OPTIONS_LIST } from "../../helper/constants";
import { Checkbox, Group } from "@mantine/core";
import { Controller, useFormContext } from "react-hook-form";

const ContextCheckboxInput = ({ name, label, props }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext(); // retrieve all hook methods

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={[]}
      render={({ field }) => (
        <>
          <Checkbox.Group
            defaultValue={[]}
            label={label}
            withAsterisk
            error={errors?.[name] ? errors?.[name].message : null}
            {...field}
            {...props}
          >
            <Group mt="xs">
              {COMPANY_WORKING_FIELDS_OPTIONS_LIST.map(
                (checkBoxItem, index) => (
                  <Checkbox
                    key={`${checkBoxItem.value}_${index}`}
                    label={checkBoxItem.label}
                    value={checkBoxItem.value}
                    checked={field?.value?.includes(checkBoxItem.value)}
                    onChange={(e) => {
                      const val = e.currentTarget.checked
                        ? [...field.value, e.currentTarget.value]
                        : field.value.filter(
                            (item) => item !== e.currentTarget.value
                          );
                      field.onChange(val);
                    }}
                  />
                )
              )}
            </Group>
          </Checkbox.Group>
        </>
      )}
    />
  );
};

export default ContextCheckboxInput;
