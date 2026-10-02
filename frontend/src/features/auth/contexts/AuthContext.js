import {createContext, useContext, useState } from "react"

const AuthContext = createContext()


const useAuthContext = function(){
    return useContext(AuthContext)
}

export {useAuthContext, AuthContext}