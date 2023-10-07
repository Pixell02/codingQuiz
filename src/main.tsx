import React from "react";
import ReactDOM from "react-dom/client";
import { SelectedValueProvider } from "../context/SelectedValueContext.tsx";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SelectedValueProvider>
      <App />
    </SelectedValueProvider>
  </React.StrictMode>
);
