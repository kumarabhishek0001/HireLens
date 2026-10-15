import {useAuthContext} from "../context/auth.context.js"
import {registerAPI, loginAPI, logoutAPI, getUserDetailsAPI} from "../services/auth.api.js"

const useAuth = () => {
    const {user,setUser,loading, setLoading} = useAuthContext()

    const handleRegister = async({username, email, password}) => {
        setLoading(true)
        try{
            const resp = await registerAPI({username, email, password})
            setUser(resp.user)
        }catch(err){
            console.log("Error at handleRegister hook", err.response?.data?.message);
            throw err
        }
        finally{
            setLoading(false)
        }
    }

    const handleLogin = async({email,password}) => {
        setLoading(true)
        try{
            const resp = await loginAPI({email, password})
            setUser(resp.user)
        }
        catch(err){
            console.log("handle login error", err.response?.data?.message)
            throw err
        }
        finally{
            setLoading(false)
        }
    }

    const handleLogout = async() => {
        setLoading(true)
        try{
            await logoutAPI()
            setUser(null)
        }
        catch(err){
            console.log("Error at handleLogout", err)
        }
    }

    return {user, loading, handleRegister, handleLogin, handleLogout, getUserDetailsAPI}
}

export default useAuth