import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";


import { Login, Register } from "./features/auth/pages";
import {Layout,History,Home} from "./features/app/pages";
import Protected from "./features/auth/components/Protected";




const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/" element={<Protected><Layout /></Protected>}>
        <Route index element={<Home />} />
        <Route path="history" element={<History />} />
      </Route>
    </>
  )
);

export default router;
