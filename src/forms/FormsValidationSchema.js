import * as yup from "yup";
import {
  COMPANY_WFH_POLICY_RADIO_OPTION_LIST,
  EMPLOYEES_RANGE_OPTIONS_LIST,
  STATE_OPTIONS_LIST,
} from "../helper/constants";

export const FormsValidationSchema = [
  yup.object().shape({
    firstName: yup
      .string()
      .required("*First name is required")
      .matches(/^[A-Za-z ]+$/i, "Only Alphabets allowed"),
    lastName: yup
      .string()
      .required("*Last name is required")
      .matches(/^[A-Za-z ]+$/i, "Only Alphabets allowed"),
    email: yup
      .string()
      .required("*Email is required")
      .matches(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*(\.\w{2,64})+$/,
        "Invalid email address"
      ),
    companyName: yup.string().required("*Company name is required"),
    companySite: yup.string().required("*Company website is required").url(),
    state: yup
      .string()
      .required("*You must select at least one state")
      .oneOf(STATE_OPTIONS_LIST, "Invalid state selected"),
    zipCode: yup.string().required("*Zip code is required"),
  }),
  yup.object().shape({
    companyWorkingFields: yup
      .array()
      .min(1, "*You must select at least one field"),
    companyEmployeesRange: yup
      .string()
      .required("*You must select at least one range")
      .oneOf(EMPLOYEES_RANGE_OPTIONS_LIST, "Invalid state selected"),
    companyWFHPolicy: yup.string().required("*Select one of the option."),
    // .oneOf(COMPANY_WFH_POLICY_RADIO_OPTION_LIST, "Please select yes or no"),
  }),
];
