import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import ContextProvider from "./context/ContextProvider";

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/service-worker.js');
  });
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContextProvider>
    <App />
  </ContextProvider>
);
