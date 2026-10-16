import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "./App";
import Landing from "./features/landing/pages/Landing";
import Login from "./features/authentication/pages/Login";
import Signup from "./features/authentication/pages/SignUp";
import Health from "./health";
import Protected from "./features/authentication/components/Protected";
import Home from "./features/ai-report/pages/Home";
import Recents from "./features/ai-report/pages/RecentsPage";
import Layout from "./features/ai-report/pages/Layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Landing />} />
      <Route path="health" element={<Health />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="home" element={<Protected><Layout /></Protected>}>
        <Route index element={<h1><Home/></h1>} />
        <Route path="analyze" element={<h1>Analyze</h1>} />
        <Route path="recents" element={<Recents/>} />
      </Route>
    </Route>,
  ),
);

export default router;
