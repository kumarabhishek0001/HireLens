import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import router from "./app.routes.jsx";

import { AuthContextProvider } from "./features/authentication/context/auth.contextProvider.jsx";
import InterviewContextProvider from "./features/ai-report/context/InterviewContextProvider";

createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <InterviewContextProvider>
      <RouterProvider router={router} />
    </InterviewContextProvider>
  </AuthContextProvider>,
);
