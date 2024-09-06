import React from "react";
import { Stepper } from "@mantine/core";
import PersonalInfoForm from "../../forms/PersonalInfoForm";
import {
  GET_ACTIVE_STEP,
  SET_ACTIVE_STEP,
} from "../../redux/features/stepperFormsSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

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
      formContent: "Company Info",
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
    >
      {formsSteps.map((stepObj, index) => (
        <Stepper.Step
          key={`${stepObj}+${index}`}
          label={`Step ${index + 1}`}
          description={stepObj.formTitle}
        >
          {stepObj.formContent}
        </Stepper.Step>
      ))}
    </Stepper>
  );
};

export default StepperComponent;
