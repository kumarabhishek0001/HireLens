import { useEffect } from "react"
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

    async function reHydarateUser(){
        try{
        const data = await getUserInfoAPI()
        console.log(data)
        setUser(data.user)
        }catch(error){
            console.log("error at rehyderateUser", error)
        }
        finally{
            setLoading(false)
        }
    }

    useEffect(() => {
        reHydarateUser()
    },[])

    return {handleRegister, handleLogout, handleLogin, user, loading}
    
}

export default useAuth