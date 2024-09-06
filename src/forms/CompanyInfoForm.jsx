import React from "react";
import { Grid, Stack } from "@mantine/core";
import ContextTextInput from "../components/inputs/ContextTextInput";
import ContextSelectInput from "../components/inputs/ContextSelectInput";
import ContextCheckboxInput from "../components/inputs/ContextCheckboxInput";
import ContextRadioInput from "../components/inputs/ContextRadioInput";
import {
  COMPANY_WFH_POLICY_RADIO_OPTION_LIST,
  EMPLOYEES_RANGE_OPTIONS_LIST,
} from "../helper/constants";

const CompanyInfoForm = () => {
  return (
    <Stack gap="sm">
      <ContextCheckboxInput
        name="companyWorkingFields"
        label="Your company is working on which field"
      />
      <ContextSelectInput
        name="companyEmployeesRange"
        label="How many employees are in your company?"
        options={EMPLOYEES_RANGE_OPTIONS_LIST}
      />
      <ContextRadioInput
        name="companyWFHPolicy"
        label="Does the company have a WFH policy?"
        options={COMPANY_WFH_POLICY_RADIO_OPTION_LIST}
      />
    </Stack>
  );
};

export default CompanyInfoForm;
