import React from "react";
import ReactDOM from "react-dom/client";
import App from "src/App";
import GlobalStyle from "src/styles/globalStyles";
import { theme } from "src/styles/theme";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
