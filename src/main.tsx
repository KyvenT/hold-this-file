import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Router } from "./router/router.tsx";
import { ThemeContextProvider } from "./contexts/ThemeContextProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeContextProvider>
      <Router />
    </ThemeContextProvider>
  </StrictMode>,
);
