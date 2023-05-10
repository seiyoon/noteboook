import "./App.css";
import { useState } from "react";
import Router from "./core/router";
import GlobalStyle from "./styles/global";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
};

export default App;
