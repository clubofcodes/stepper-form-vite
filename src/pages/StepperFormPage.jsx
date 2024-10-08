import { Button, Card, Container, Group, Paper } from "@mantine/core";
import StepperComponent from "../components/stepper/StepperComponent";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  GET_ACTIVE_STEP,
  GET_STEPPER_FORMS_DATA,
  SET_FORM_DATA,
  SET_NEXT_STEP,
  SET_PREV_STEP,
} from "../redux/features/stepperFormsSlice";
import { FormProvider, useForm } from "react-hook-form";
import { FormsValidationSchema } from "../forms/FormsValidationSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { TOTAL_NO_OF_STEPS } from "../helper/constants";

const StepperFormPage = () => {
  const dispatch = useDispatch();
  const activeStep = useSelector(GET_ACTIVE_STEP);
  const stepperFormsData = useSelector(GET_STEPPER_FORMS_DATA);

  const methods = useForm({
    mode: "onBlur",
    reValidateMode: "onBlur",
    defaultValues: {},
    resolver: yupResolver(FormsValidationSchema[activeStep]),
  });

  const nextStep = () => dispatch(SET_NEXT_STEP());
  const prevStep = () => dispatch(SET_PREV_STEP());

  const onSubmit = async (formData) => {
    dispatch(SET_FORM_DATA({ activeStep: activeStep, data: formData }));
    nextStep();
  };

  return (
    <Paper withBorder h={"100%"}>
      <Container p={"md"}>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <StepperComponent />

            {activeStep < TOTAL_NO_OF_STEPS ? (
              <Group justify="center" mt="xl">
                <Button
                  variant="default"
                  onClick={prevStep}
                  disabled={activeStep === 0}
                >
                  Back
                </Button>
                <Button type="submit">
                  {activeStep === 2 ? "Submit" : "Next"}
                </Button>
              </Group>
            ) : (
              <Card withBorder shadow="sm" radius={"md"} m={"md"}>
                <pre>
                  <code>
                    {JSON.stringify(
                      {
                        Message: "Your submission is recorded.",
                        ...stepperFormsData,
                      },
                      null,
                      2
                    )}
                  </code>
                </pre>
              </Card>
            )}
          </form>
        </FormProvider>
      </Container>
    </Paper>
  );
};

export default StepperFormPage;
