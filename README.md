# HireLens

HireLens helps candidates prepare for interviews by comparing a resume and personal summary with a target job description. It generates a role-specific match score, skill gaps, interview questions, and a preparation plan.

## Live application

Add the deployed application URL here:

[**Launch HireLens →**](https://hirelens-fe.onrender.com/)

## Features

- Create an account, sign in, and view protected interview-preparation pages.
- Submit a job title, company, job description, self-description, and resume for analysis.
- Generate a match score, technical and behavioral interview questions, skill-gap ratings, and a preparation roadmap using Google Gemini.
- View saved reports and open an individual report.

## Technology

- Frontend: React, Vite, React Router, Tailwind CSS
- Backend: Node.js, Express, Mongoose, MongoDB
- Authentication: JWT in an HTTP-only cookie, with bcrypt password hashing
- AI analysis: Google Gemini via `@google/genai`
- Resume processing: PDF text extraction with `pdf-parse`

## Project structure

```text
backend/   Express API, authentication, MongoDB models, and AI report generation
fronted/   React and Vite application
```

The frontend directory is named `fronted` in this repository.

## Requirements

- Node.js and npm
- A MongoDB connection string
- A Google Gemini API key

## Local setup

### 1. Configure the backend

In `backend/`, create a `.env` file:

```env
PORT=3000
FRONTEND_URL=http://localhost:5173
MONGO_DB_URL=mongodb://127.0.0.1:27017/hirelens
JWT_KEY=replace_with_a_long_random_secret
GEMINI_API_KEY=your_gemini_api_key
```

Use your own MongoDB connection string and Gemini API key. Keep secrets in `.env`; do not commit them.

Install dependencies and start the API:

```bash
cd backend
npm install
npm run server
```

The API listens on port `3000` by default. Its health check is available at `http://localhost:3000/check-health`.

### 2. Configure the frontend

In `fronted/`, create a `.env` file:

```env
VITE_BACKEND_URL_AUTH=http://localhost:3000/api/auth
VITE_BACKEND_URL_INTERVIEW=http://localhost:3000/api/interview
```

Install dependencies and start the Vite development server:

```bash
cd fronted
npm install
npm run dev
```

Open the local URL printed by Vite, normally `http://localhost:5173`. The backend's `FRONTEND_URL` must match the frontend origin so credentialed API requests can pass CORS checks.

## API overview

All routes are served by the backend:

| Method | Path | Purpose |
| --- | --- | --- |
| `GET` | `/check-health` | Check whether the API is responding |
| `POST` | `/api/auth/register` | Register an account |
| `POST` | `/api/auth/login` | Sign in |
| `GET` | `/api/auth/logout` | Sign out |
| `GET` | `/api/auth/get-me` | Get the signed-in user |
| `POST` | `/api/interview` | Generate a report; requires authentication and a resume upload |
| `GET` | `/api/interview/report/get-all-reports` | List the signed-in user's reports |
| `GET` | `/api/interview/report/:interviewReportId` | Get one of the signed-in user's reports |

Authentication and report endpoints use the `token` cookie. The report-generation endpoint accepts multipart form data with `title`, `company`, `jobDescription`, `selfDescription`, and `resume` fields. The backend extracts resume text as PDF, so upload a PDF resume.

## Scripts

Run commands from the relevant directory:

| Directory | Command | Purpose |
| --- | --- | --- |
| `backend/` | `npm run server` | Start the API with Nodemon |
| `fronted/` | `npm run dev` | Start the Vite development server |
| `fronted/` | `npm run build` | Create a production frontend build |
| `fronted/` | `npm run preview` | Preview the production frontend build |
| `fronted/` | `npm run lint` | Run ESLint |

