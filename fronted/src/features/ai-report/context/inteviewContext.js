import { createContext, useContext } from "react";

const InterviewContext = createContext()

function useInterviewContext(){
    return useContext(InterviewContext)
}

export {InterviewContext, useInterviewContext}