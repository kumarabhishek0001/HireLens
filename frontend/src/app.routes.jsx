import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";


import { Login, Register } from "./features/auth/pages";
import {Layout,History,Home} from "./features/app/pages";


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="history" element={<History />} />
      </Route>
    </>
  )
);

export default router;
