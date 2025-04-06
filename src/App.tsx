import React from "react";
import ReactDOM from "react-dom/client";
import LoginPage from "./pages/LoginPage";
import './i18n/i18n';
import { HeroUIProvider } from "@heroui/react";

import './App.css';

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
      <div className="bg-gray-800">
          <HeroUIProvider>
              <LoginPage />
          </HeroUIProvider>
      </div>
  </React.StrictMode>,
);
