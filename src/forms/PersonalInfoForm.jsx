import React from "react";
import { Grid, Stack } from "@mantine/core";
import ContextTextInput from "../components/inputs/ContextTextInput";
import ContextSelectInput from "../components/inputs/ContextSelectInput";

const PersonalInfoForm = () => {
  return (
    <Stack gap="sm">
      <ContextTextInput name="firstName" label="First Name" />
      <ContextTextInput name="email" label="Email" />
      <ContextTextInput name="companySite" label="Company Site" />
      <ContextTextInput name="lastName" label="Last Name" />
      <ContextTextInput name="companyName" label="Company Name" />
      <ContextSelectInput name="state" label="Select State" />
      <ContextTextInput name="zipCode" label="Zip Code" />
    </Stack>
  );
};

export default PersonalInfoForm;
