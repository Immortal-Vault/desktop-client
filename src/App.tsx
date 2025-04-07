import React from "react";
import ReactDOM from "react-dom/client";
import './locale/i18n';
import { HeroUIProvider } from "@heroui/react";
import { AppRouter } from "./AppRouter";
import {ErrorBoundary} from "./components";

import './App.css';

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
      <div className="bg-gray-800">
          <HeroUIProvider>
              <ErrorBoundary>
                  <AppRouter />
              </ErrorBoundary>
          </HeroUIProvider>
      </div>
  </React.StrictMode>,
);
