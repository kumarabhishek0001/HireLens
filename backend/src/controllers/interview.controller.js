const pdfParse = require("pdf-parse");
const generateInterviewReport = require("../services/ai.services");
const interviewReportModel = require("../models/interview.models");


async function generateInterviewReportController(req, res) {
  const resumeContent = await (new pdfParse.PDFParse(Uint8Array.from(req.file.buffer))).getText;
  const { selfDescription, jobDescription } = req.body;

  try {
    const interviewReportByAI = await generateInterviewReport({
      resume: resumeContent.text,
      selfDescription,
      jobDescription,
    });

    const reponseReport = await interviewReportModel.create({
      user: req.user.id,
      resume: resumeContent.text,
      selfDescription,
      jobDescription,
      ...interviewReportByAI,
    });

    res.status(201).json({
      message: "Interview report generated successfully",
      reponseReport,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Internal Server error"
    })
  }
}

module.exports = { generateInterviewReportController };
