import * as yup from "yup";

export const FormsValidationSchema = yup
  .object({
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
    state: yup.string().required("*Must select a state"),
    zipCode: yup.string().required("*First name is required"),
  })
  .required();
