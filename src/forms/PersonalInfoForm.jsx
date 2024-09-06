import React from "react";
import { Grid, Stack } from "@mantine/core";
import ContextTextInput from "../components/inputs/ContextTextInput";
import ContextSelectInput from "../components/inputs/ContextSelectInput";
import { STATE_OPTIONS_LIST } from "../helper/constants";

const PersonalInfoForm = () => {
  return (
    <Stack gap="sm">
      <ContextTextInput name="firstName" label="First Name" />
      <ContextTextInput name="lastName" label="Last Name" />
      <ContextTextInput name="email" label="Email" />
      <ContextTextInput name="companyName" label="Company Name" />
      <ContextTextInput name="companySite" label="Company Site" />
      <ContextSelectInput
        name="state"
        label="State"
        options={STATE_OPTIONS_LIST}
      />
      <ContextTextInput name="zipCode" label="Zip Code" />
    </Stack>
  );
};

export default PersonalInfoForm;
