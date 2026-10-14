const express = require("express")

const authMiddleware = require("../middleware/authentication.middleware")
const upload = require("../middleware/files.middleware")
const { generateInterviewReportController,getAllInterviewReportsController,getInterviewReportByIdController } = require("../controllers/interview.controller")

const interviewRouter = express.Router()


interviewRouter.post("/", authMiddleware, upload.single("resume"), generateInterviewReportController)
interviewRouter.get("/report/get-all-reports", authMiddleware, getAllInterviewReportsController)
interviewRouter.post("/report/:interviewReportId", authMiddleware, getInterviewReportByIdController)


module.exports = interviewRouter