import { useAuthContext } from "../contexts/AuthContext"
import { loginAPI, registerAPI, logoutAPI, getUserInfoAPI } from "../services/auth.api"

const useAuth = () => {
    const {user, loading, setUser, setLoading} = useAuthContext()

    const handleRegister = async({email, password, username}) => {
        setLoading(true)
        try {
            const data = await registerAPI({email,password, username})
            setUser(data.user)
        } catch (error) {
            console.log("error at handleRegister hook", error)
        }finally{
            setLoading(false)
        }
    }

    const handleLogin = async({email, password}) => {
        setLoading(true)
        try {
            const data = await loginAPI({email, password})
            setUser(data.user)
        } catch (error) {
            console.log("Error at handleLogin", error)
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
        }catch(error){
            console.log("error at handleLogout", error)
        }
        finally{
            setLoading(false)
        }
    }

    return {handleRegister, handleLogout, handleLogin, user, loading}
    
}

export default useAuth