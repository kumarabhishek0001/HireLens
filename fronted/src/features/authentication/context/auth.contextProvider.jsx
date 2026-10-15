import { useState } from "react"
import {AuthContext} from "./auth.context.js"

const AuthContextProvider = ({children}) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)

    return (
        <AuthContext.Provider value={{user,setUser,loading,setLoading}}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthContextProvider}