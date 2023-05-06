import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";

import "./index.css";
import App from "./App";
import media from "./media";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={{ ...media }}>
    <App />
  </ThemeProvider>
);
