import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTES } from "./routes/routes";
import { HelmetProvider } from "react-helmet-async";

const router = createBrowserRouter(ROUTES);

function App() {
  return (
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  );
}

export default App;
