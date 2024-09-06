import * as yup from "yup";

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
    state: yup.string().required("*You must select at least one state"),
    zipCode: yup.string().required("*Zip code is required"),
  }),
  yup.object().shape({
    companyWorkingFields: yup
      .array()
      .min(1, "*You must select at least one field"),
    companyEmployeesRange: yup
      .string()
      .required("*You must select at least one range"),
    companyWFHPolicy: yup.string().required("*Select one of the option."),
  }),
  yup.object().shape({
    startPlanDate: yup
      .date()
      .required("*Start Plan Date is required")
      .nullable(),
    planType: yup.string().required("*Please select a plan type"),
    planCategory: yup.string().required("*Please select a plan category"),
    noOfUsers: yup
      .number()
      .typeError("Must be a number")
      .required("*Number of users is required")
      .min(1, "Must have at least 1 user")
      .integer("Must be a whole number")
      .positive(),
  }),
];
