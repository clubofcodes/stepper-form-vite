import { Button, Stack, Text } from "@mantine/core";
import ContextSelectInput from "../components/inputs/ContextSelectInput";
import {
  PLAN_CATEGORY_OPTIONS_LIST,
  PLAN_PRICING_OBJ,
  PLAN_TYPE_OPTIONS_LIST,
} from "../helper/constants";
import ContextDatePickerInput from "../components/inputs/ContextDatePickerInput";
import ContextRadioInput from "../components/inputs/ContextRadioInput";
import ContextTextInput from "../components/inputs/ContextTextInput";
import { useFormContext } from "react-hook-form";
import {
  GET_ACTIVE_STEP,
  GET_STEPPER_FORMS_DATA,
  SET_FORM_DATA,
} from "../redux/features/stepperFormsSlice";
import { useDispatch, useSelector } from "react-redux";

const PlanSelectionForm = () => {
  const dispatch = useDispatch();
  const activeStep = useSelector(GET_ACTIVE_STEP);
  const stepperFormsData = useSelector(GET_STEPPER_FORMS_DATA);
  const { watch } = useFormContext();

  // Watch values for live price calculation
  const selectedPlanType = watch("planType");
  const selectedplanCategory = watch("planCategory");
  const numberOfUsers = watch("noOfUsers");

  const evaluatePlanPrice = () => {
    const basePrice = PLAN_PRICING_OBJ[selectedPlanType][selectedplanCategory];
    const finalPrice = basePrice * (Number(numberOfUsers) || 1);
    dispatch(
      SET_FORM_DATA({
        activeStep: activeStep,
        data: { totalPrice: finalPrice },
      })
    );
  };

  return (
    <Stack gap="sm">
      <ContextDatePickerInput name="startPlanDate" label="Start Plan Date" />
      <ContextRadioInput
        name="planType"
        label="Select a Plan Type"
        options={PLAN_TYPE_OPTIONS_LIST}
      />
      <ContextSelectInput
        name="planCategory"
        label="Select a Plan Category"
        options={PLAN_CATEGORY_OPTIONS_LIST}
      />
      <ContextTextInput name="noOfUsers" label="Enter a number of users" />
      <Text c={"blue"} fw={"bolder"} fz={"md"}>
        Order Summary: {stepperFormsData?.[activeStep]?.totalPrice}
      </Text>
      <Button
        variant="outline"
        onClick={evaluatePlanPrice}
        color="green"
        disabled={!(selectedPlanType && selectedplanCategory && numberOfUsers)}
      >
        Calculate
      </Button>
    </Stack>
  );
};

export default PlanSelectionForm;
