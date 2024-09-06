import React from "react";
import { Card, Stepper } from "@mantine/core";
import PersonalInfoForm from "../../forms/PersonalInfoForm";
import {
  GET_ACTIVE_STEP,
  SET_ACTIVE_STEP,
} from "../../redux/features/stepperFormsSlice";
import { useSelector, useDispatch } from "react-redux";
import stepperClasses from "./stepperComponent.module.css";
import CompanyInfoForm from "../../forms/CompanyInfoForm";

const StepperComponent = () => {
  const dispatch = useDispatch();

  const activeStep = useSelector(GET_ACTIVE_STEP);

  const formsSteps = [
    {
      formTitle: "Personal Information",
      formContent: <PersonalInfoForm />,
    },
    {
      formTitle: "Company Information",
      formContent: <CompanyInfoForm />,
    },
    {
      formTitle: "Plan Selection",
      formContent: "Plan Select",
    },
  ];

  return (
    <Stepper
      active={activeStep}
      onStepClick={(val) => dispatch(SET_ACTIVE_STEP(val))}
      allowNextStepsSelect={false}
      styles={{
        steps: {
          padding: 16,
          boxShadow: "6px 6px 2px lightblue",
          border: "1px solid #8450fc",
          borderRadius: "8px",
          backdropFilter: "blur(12px)",
        },
        stepDescription: {
          color: "blue",
        },
      }}
    >
      {formsSteps.map((stepObj, index) => (
        <Stepper.Step
          key={`${stepObj}+${index}`}
          label={`Step ${index + 1}`}
          description={stepObj.formTitle}
        >
          <Card withBorder shadow="md" radius={"md"} padding={"lg"}>
            {stepObj.formContent}
          </Card>
        </Stepper.Step>
      ))}
    </Stepper>
  );
};

export default StepperComponent;
