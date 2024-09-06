import React from "react";
import { Stack } from "@mantine/core";
import ContextTextInput from "../components/inputs/ContextTextInput";

const PersonalInfoForm = () => {
  return (
    <>
      <Stack gap="sm">
        <ContextTextInput name="firstName" label="First Name" />
        <ContextTextInput name="lastName" label="Last Name" />
        <ContextTextInput name="email" label="Email" />
        <ContextTextInput name="companyName" label="Company Name" />
        <ContextTextInput name="companySite" label="Company Site" />
        <ContextTextInput name="state" label="Select State" />
        <ContextTextInput name="zipCode" label="Zip Code" />
      </Stack>
    </>
  );
};

export default PersonalInfoForm;
