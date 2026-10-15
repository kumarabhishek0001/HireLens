import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"
import App from "./App"
import Landing from "./features/landing/pages/Landing"
import Login from "./features/authentication/pages/Login"
import Signup from "./features/authentication/pages/SignUp"
import Health from "./health"
import Protected from "./features/authentication/components/Protected"




const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App/>}>
            <Route path="" element={<Landing/>}/>
            <Route path="health" element={<Health/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="signup" element={<Signup/>}/>
            <Route path="home" element={<Protected><h1>Home</h1></Protected>}/>
        </Route>
    )
)

export default router