import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import router from "./app.routes.jsx";

import { AuthContextProvider } from "./features/authentication/context/auth.contextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <RouterProvider router={router} />
  </AuthContextProvider>,
);
