import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import StepperFormPage from "./pages/StepperFormPage";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StepperFormPage />
  </StrictMode>
);
