import React from "react";
import ReactDOM from "react-dom/client";
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import LoginPage from "./pages/LoginPage";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
      <MantineProvider defaultColorScheme="auto">
          <LoginPage />
      </MantineProvider>
  </React.StrictMode>,
);
