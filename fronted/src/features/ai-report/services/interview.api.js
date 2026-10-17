import axios  from 'axios';


const api = axios.create({
    baseURL: "http://localhost:5000/api/interview",
    withCredentials: true
})


export const generateInterviewReport = async({selfDescription, jobDescription, title, company, resumeFile}) => {
    
    const formData = new FormData();

    formData.append("jobDescription", jobDescription)
    formData.append("selfDescription", selfDescription)
    formData.append("title", title)
    formData.append("company", company)
    formData.append("resume", resumeFile)


    const response = await api.post("/", formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    })

    console.log("API Response:", response.data)

    return response.data

}


export const getInterviewReportById = async(interviewReportId) => {
    const response = await api.get(`/report/${interviewReportId}`)
    return response.data
}

export const getAllInterviewReport = async() => {
    const response = await api.get("/report/get-all-reports")
    return response.data
}