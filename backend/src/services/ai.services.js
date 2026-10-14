const { GoogleGenAI } = require("@google/genai");
const { z } = require("zod");
const fs = require("node:fs/promises");

const { jobDescription, resume, selfDescription } = require("./temp.js");
const chalk = require("chalk");

const interviewReportJSONSchema = {
  type: "object",
  properties: {
    matchScore: {
      type: "string",
      description:
        "A score between 0 to 100 indicating how well the candidate's profile matches the job describe, based on factors such as skills, experience, and qualifications",
    },
    technicalQuestions: {
      type: "array",
      items: {
        type: "object",
        properties: {
          question: {
            type: "string",
            description: "The technical question can be asked in the interview",
          },
          intention: {
            type: "string",
            description:
              "The intention of interview behind asking the question",
          },
          answer: {
            type: "string",
            description:
              "How to answer the question, what points to cover, what approach to take etc",
          },
        },
        required: ["question", "intention", "answer"],
      },
      description:
        "A list of technical questions that can be asked in the interview along with their intention and answer",
    },
    behavioralQuestions: {
      type: "array",
      items: {
        type: "object",
        properties: {
          question: {
            type: "string",
            description:
              "The behavioral question can be asked in the interview",
          },
          intention: {
            type: "string",
            description:
              "The intention of interview behind asking the question",
          },
          answer: {
            type: "string",
            description:
              "How to answer the question, what points to cover, what approach to take etc",
          },
        },
        required: ["question", "intention", "answer"],
      },
      description:
        "A list of behavioral questions that can be asked in the interview along with their intention and answer",
    },
    skillGaps: {
      type: "array",
      items: {
        type: "object",
        properties: {
          skill: {
            type: "string",
            description:
              "A specific skill or knowledge area that the candidate is lacking or needs to improve",
          },
          severity: {
            type: "string",
            enum: ["low", "medium", "high"],
            description:
              "The severity of the skill gap, indicating how critical it is for the role",
          },
        },
        required: ["skill", "severity"],
      },
      description:
        "A list of skill gaps identified in the candidate's profile, each with a severity level indicating how critical it is for the role",
    },
    preparationPlan: {
      type: "array",
      items: {
        type: "object",
        properties: {
          day: {
            type: "number",
            description:
              "'The day number in the preparation plan, indicating the sequence of preparation activities",
          },
          focus: {
            type: "string",
            description:
              "The main focus or theme for that day's preparation, such as a specific skill, topic, or type of interview question",
          },
          task: {
            type: "string",
            description:
              "A list of specific tasks or activities to complete on that day, such as practicing coding problems, reviewing technical concepts, or preparing answers for behavioral questions",
          },
        },
        required: ["day", "focus", "task"],
      },
      description:
        "A structured preparation plan for the candidate, outlining daily focus areas and tasks to improve their readiness for the interview",
    },
  },
  required: [
    "matchScore",
    "technicalQuestions",
    "behavioralQuestions",
    "skillGaps",
    "preparationPlan",
  ],
};

const interviewReportSchema = z.fromJSONSchema(interviewReportJSONSchema);

const client = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

async function generateInterviewReport({
  resume,
  jobDescription,
  selfDescription,
}) {
  const prompt = `
You are an expert technical interviewer and career advisor.

Analyze the candidate's resume, self-description, and the job description provided below.

Generate an interview preparation report based specifically on the candidate's actual profile and the requirements of the target role.

CANDIDATE RESUME:
${resume}

CANDIDATE SELF-DESCRIPTION:
${selfDescription}

JOB DESCRIPTION:
${jobDescription}

ANALYSIS GUIDELINES:

1. MATCH SCORE

Calculate the candidate's overall fit for the role from 0 to 100.

Consider:
- Required qualifications
- Preferred qualifications
- Technical skills
- Relevant work experience
- Projects
- Education
- Domain knowledge
- Demonstrated practical experience

Do not score based only on keyword overlap. Distinguish between skills listed on the resume and skills supported by actual projects or work experience.

2. TECHNICAL QUESTIONS

Generate 4 to 6 realistic technical interview questions.

Prioritize:
- Technologies required by the job
- Technologies appearing in both the resume and job description
- Candidate projects
- Candidate work experience
- Technical claims that an interviewer may want to verify
- Important areas where the candidate has limited evidence

Questions should resemble questions an actual interviewer would ask.

3. BEHAVIORAL QUESTIONS

Generate 4 to 6 realistic behavioral interview questions relevant to the candidate and role.

Cover appropriate competencies such as:
- Problem solving
- Teamwork
- Leadership
- Communication
- Adaptability
- Learning ability
- Ownership
- Handling failure
- Conflict resolution

Use the candidate's actual background when suggesting examples.

Do not invent experiences that are not supported by the candidate information.

4. SKILL GAPS

Identify meaningful gaps between the candidate's demonstrated abilities and the job requirements.

Do not mark every missing keyword as a gap.

Prioritize skills that are important to successfully performing the role.

5. PREPARATION PLAN

Create a preparation plan covering at least 5 days.

Prioritize the candidate's most important skill gaps and the most important requirements of the role.

Include a mixture of:
- Technical revision
- Coding practice
- Project revision
- Resume-based interview preparation
- Behavioral preparation
- Job-specific preparation
- Mock interview practice

Make the plan progressive and actionable.

GENERAL RULES:

- Use only information supported by the candidate data.
- Do not invent projects, work experience, certifications, or skills.
- If information is ambiguous, make a conservative inference.
- Prioritize the specific job description over generic interview advice.
- Keep all generated content concise and actionable.
- Avoid unnecessary repetition.
`;

  //   console.log(chalk.bgYellowBright("Calling API...."));
  try {
    const interaction = await client.interactions.create({
      model: "gemini-3.5-flash-lite",
      input: prompt,
      response_format: {
        type: "text",
        mime_type: "application/json",
        schema: interviewReportJSONSchema,
      },
    });

    const report = interviewReportSchema.parse(
      JSON.parse(interaction.output_text),
    );

    return report;
  } catch (err) {
    console.log(err);
    return res.status(500).json({
        message: "Model not working"
    })
  }
}

module.exports = generateInterviewReport;
