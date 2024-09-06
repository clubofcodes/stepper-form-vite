import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeStep: 0, // Track the current step
  stepperFormsData: {}, // To store step-wise data dynamically
};

export const stepperFormsSlice = createSlice({
  name: "stepperForms",
  initialState,
  reducers: {
    SET_ACTIVE_STEP: (state, action) => {
      state.activeStep = action.payload; // updates current/active step
    },
    SET_NEXT_STEP: (state) => {
      state.activeStep += 1; // next step
    },
    SET_PREV_STEP: (state) => {
      state.activeStep -= 1; // prev step
    },
    SET_FORM_DATA: (state, action) => {
      const { activeStep, data } = action.payload;
      state.stepperFormsData[activeStep] = {
        ...state.stepperFormsData[activeStep],
        ...data,
      };
    },
    SUBMISSION_FORM_DATA: (state) => {
      console.log("Final Submitted Data:", state.stepperFormsData);
    },
  },
});

export const {
  SET_ACTIVE_STEP,
  SET_NEXT_STEP,
  SET_PREV_STEP,
  SET_FORM_DATA,
  SUBMISSION_FORM_DATA,
} = stepperFormsSlice.actions;

export const GET_ACTIVE_STEP = (state) => state.stepperForms.activeStep;
export const GET_STEPPER_FORMS_DATA = (state) =>
  state.stepperForms.stepperFormsData;
