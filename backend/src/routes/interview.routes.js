const express = require("express")

const authMiddleware = require("../middleware/authentication.middleware")
const upload = require("../middleware/files.middleware")
const { generateInterviewReportController } = require("../controllers/interview.controller")

const interviewRouter = express.Router()


interviewRouter.post("/", authMiddleware, upload.single("resume"), generateInterviewReportController)


module.exports = interviewRouter