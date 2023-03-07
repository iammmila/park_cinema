import React from "react";
import ReactDOM from "react-dom/client";
import 'sweetalert2/dist/sweetalert2.min.css';
import "./index.scss";
import App from "./App";
import ContextProvider from "./context/ContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContextProvider>
    <App />
  </ContextProvider>
);
