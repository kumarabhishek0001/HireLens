import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"
import App from "./App"
import Landing from "./features/landing/pages/Landing"
import Login from "./features/authentication/pages/Login"
import Signup from "./features/authentication/pages/SignUp"
import Health from "./health"


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App/>}>
            <Route path="" element={<Landing/>}/>
            <Route path="health" element={<Health/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="signup" element={<Signup/>}/>
        </Route>
    )
)

export default router