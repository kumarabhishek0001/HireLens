const pdfParse = require("pdf-parse");
const generateInterviewReport = require("../services/ai.services");
const interviewReportModel = require("../models/interview.models");

async function generateInterviewReportController(req, res) {
  const resumeContent = await new pdfParse.PDFParse(
    Uint8Array.from(req.file.buffer),
  ).getText;
  const { selfDescription, jobDescription, title, company } = req.body;

  try {
    const interviewReportByAI = await generateInterviewReport({
      resume: resumeContent.text,
      selfDescription,
      jobDescription,
    });

    const reponseReport = await interviewReportModel.create({
      title,
      company,
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
      message: "Internal Server error",
    });
  }
}

async function getInterviewReportByIdController(req, res) {
  const { interviewReportId } = req.params;

  const interviewReport = await interviewReportModel.findOne({
    _id: interviewReportId,
    user: req.user.id,
  });

  if (!interviewReport) {
    return res.status(401).json({
      message: "Interview Report Not found",
    });
  }

  res.status(200).json({
    message: "Interview Report fetched successfully",
    interviewReport,
  });
}

async function getAllInterviewReportsController(req, res) {
  const interviewReports = await interviewReportModel
    .find({
      user: req.user.id,
    })
    .sort({ createdAt: -1 })
    .select(
      "-resume -selfDescription -jobDescription -__v -technicalQuestions -behavioralQuestions -skillGap -preparationPlan",
    );

  if (!interviewReports) {
    return res.status(404).json({
      message: "report not found",
    });
  }

  res.status(200).json({
    message: "reports fetched successfully",
    interviewReports,
  });
}

module.exports = {
  generateInterviewReportController,
  getInterviewReportByIdController,
  getAllInterviewReportsController,
};
