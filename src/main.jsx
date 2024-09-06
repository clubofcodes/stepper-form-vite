import "./index.css";
import '@mantine/core/styles.css';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import StepperFormPage from "./pages/StepperFormPage";
import { Container, MantineProvider } from "@mantine/core";
import { Provider } from "react-redux";
import { store } from "./redux/store";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <MantineProvider>
        <StepperFormPage />
      </MantineProvider>
    </Provider>
  </StrictMode>
);
