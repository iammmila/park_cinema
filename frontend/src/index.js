import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import ContextProvider from "./context/ContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContextProvider>
    <App />
  </ContextProvider>
);
