import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./app.routes";
import { AuthContextProvider } from "./features/auth/contexts";

const App = () => {
  return (
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  );
};

export default App;
