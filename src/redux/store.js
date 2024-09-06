import { configureStore } from "@reduxjs/toolkit";
import { stepperFormsSlice } from "./features/stepperFormsSlice";

export const store = configureStore({
  reducer: {
    stepperForms: stepperFormsSlice.reducer,
  },
});
