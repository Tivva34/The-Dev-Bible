import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { I18nProvider } from "./i18n/index.js";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <I18nProvider initialLanguage="en">
      <App />
    </I18nProvider>
  </StrictMode>
);