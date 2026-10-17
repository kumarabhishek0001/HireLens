import { useInterviewHook } from "../hooks/useInterviewHook";
import { useParams } from "react-router-dom";

import { useState, useEffect } from "react";
import {
  Target,
  Layers3,
  MessageSquare,
  Map,
  ArrowRight,
  ChevronDown,
  CheckCircle2,
  Clock3,
  Sparkles,
  ShieldAlert,
  FileText,
} from "lucide-react";

// const report123 = {
//   title: "Frontend Engineer",
//   company: "Xylixn",
//   matchScore: 82,
//   createdAt: "2026-10-16T09:32:54.761Z",

//   skillGaps: [
//     {
//       skill: "Terraform / Infrastructure as Code",
//       severity: "medium",
//       _id: "6ad1ef46838164bf131aeebe",
//     },
//     {
//       skill: "Monitoring Tools (Prometheus and Grafana)",
//       severity: "medium",
//       _id: "6ad1ef46838164bf131aeebf",
//     },
//     {
//       skill: "Message Brokers (Kafka or RabbitMQ)",
//       severity: "low",
//       _id: "6ad1ef46838164bf131aeec0",
//     },
//   ],

//   technicalQuestions: [
//     {
//       question:
//         "Can you walk through how you would design a high-throughput model serving API using FastAPI, and how you handle concurrent requests without blocking the event loop?",
//       intention:
//         "To evaluate the candidate's practical backend design skills using FastAPI and their understanding of asynchronous request handling for machine learning inference.",
//       answer:
//         "Discuss FastAPI's async capabilities, leveraging Pydantic for request validation, offloading heavy CPU or GPU-bound inference tasks to thread pools or separate worker processes (using tools like Celery or background tasks), and managing concurrency gracefully.",
//     },
//     {
//       question:
//         "How do you manage containerized model deployments using Docker and Kubernetes, specifically addressing resource allocation like GPU memory limits?",
//       intention:
//         "To test hands-on experience with Docker and Kubernetes infrastructure, focusing on ML-specific operational challenges such as GPU resource requests and limits.",
//       answer:
//         "Explain containerizing Python/PyTorch applications with multi-stage Docker builds, writing Kubernetes deployment manifests, and configuring resource requests/limits for NVIDIA GPUs using the NVIDIA device plugin.",
//     },
//     {
//       question:
//         "What strategies do you use for caching inference results or intermediate data processing steps using Redis in a backend pipeline?",
//       intention:
//         "To verify knowledge of caching patterns and latency reduction techniques for distributed backend systems.",
//       answer:
//         "Mention using Redis for storing frequent inference query responses, implementing TTLs for cache expiration, serialization methods, and handling cache stampedes or failures gracefully.",
//     },
//     {
//       question:
//         "How do you handle schema migrations and query performance tuning in PostgreSQL for large-scale relational datasets?",
//       intention:
//         "To assess database management skills required for robust data pipelines and backend storage.",
//       answer:
//         "Talk about indexing strategies, query execution plan analysis (EXPLAIN ANALYZE), handling zero-downtime schema migrations, and connection pooling.",
//     },
//   ],

//   behavioralQuestions: [
//     {
//       question:
//         "Tell me about a time you had to diagnose and resolve a performance bottleneck in a distributed or asynchronous processing system.",
//       intention:
//         "To evaluate problem-solving capabilities, technical debugging skills, and experience with distributed processing.",
//       answer:
//         "Use the STAR method. Describe the system architecture, pinpoint the bottleneck (e.g. event loop blocking or slow database queries), the profiling steps taken, and the measurable improvement in latency or throughput.",
//     },
//     {
//       question:
//         "Describe a scenario where you collaborated closely with a data scientist or non-engineering stakeholder to operationalize a machine learning model.",
//       intention:
//         "To assess cross-functional communication, teamwork, and the ability to bridge the gap between machine learning research and production software engineering.",
//       answer:
//         "Highlight how you gathered requirements, translated exploratory model notebooks into clean, maintainable backend code, and agreed upon API contracts and latency SLAs.",
//     },
//     {
//       question:
//         "Can you share an experience where a production deployment failed unexpectedly, and how you managed the incident and subsequent mitigation?",
//       intention:
//         "To evaluate ownership, accountability, handling of high-pressure situations, and adaptability.",
//       answer:
//         "Explain how the issue was detected, the immediate rollback or hotfix procedure executed, root cause analysis conducted, and safeguards implemented to prevent recurrence.",
//     },
//     {
//       question:
//         "How do you prioritize your tasks when balancing feature development, technical debt reduction, and production monitoring issues?",
//       intention:
//         "To gauge organizational skills, time management, and engineering judgment.",
//       answer:
//         "Discuss frameworks for impact vs. effort evaluation, communicating trade-offs to product teams, and maintaining system reliability while delivering new platform capabilities.",
//     },
//   ],

//   preparationPlan: [
//     {
//       day: 1,
//       focus: "Core Backend & Frameworks (FastAPI / Django)",
//       task: [
//         "Review asynchronous programming in Python, FastAPI dependency injection, routing, middleware, and request validation patterns.",
//       ],
//     },
//     {
//       day: 2,
//       focus: "Infrastructure, Docker & Kubernetes",
//       task: [
//         "Brush up on containerization best practices, Kubernetes cluster architecture, deployments, services, and managing GPU resource allocations.",
//       ],
//     },
//     {
//       day: 3,
//       focus: "Data Pipelines & Storage (PostgreSQL & Redis)",
//       task: [
//         "Practice SQL query optimization, indexing strategies, database schema design, and Redis caching/pub-sub patterns for backend systems.",
//       ],
//     },
//     {
//       day: 4,
//       focus: "ML Platform Concepts & Architecture",
//       task: [
//         "Review MLOps best practices, model serving patterns, handling heavy workloads, and designing scalable APIs for ML inference.",
//       ],
//     },
//     {
//       day: 5,
//       focus: "Behavioral Preparation & Mock Interview",
//       task: [
//         "Prepare STAR-format stories based on your past engineering projects, focusing on cross-functional collaboration, debugging, and production incidents.",
//       ],
//     },
//   ],
// };

const tabs = [
  { id: "overview", label: "Overview & Skill Gaps", icon: Target },
  { id: "technical", label: "Technical Questions", icon: Layers3 },
  { id: "behavioral", label: "Behavioral", icon: MessageSquare },
  { id: "roadmap", label: "Roadmap", icon: Map },
];

const severityClasses = {
  high: "bg-red-50 text-red-700 border-red-200",
  medium: "bg-amber-50 text-amber-700 border-amber-200",
  low: "bg-blue-50 text-blue-700 border-blue-200",
};

const Card = ({ children, className = "" }) => (
  <section
    className={`rounded-xl border border-[#e6eaf0] bg-white p-5 shadow-sm sm:p-6 ${className}`}
  >
    {children}
  </section>
);

const SectionHeading = ({ icon: Icon, title, subtitle }) => (
  <div className="mb-5 flex items-start gap-3">
    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
      <Icon size={19} />
    </div>
    <div>
      <h2 className="text-base font-semibold text-[#202124] sm:text-lg">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-1 text-xs leading-5 text-neutral-500">{subtitle}</p>
      )}
    </div>
  </div>
);

const ReportPage = () => {
  const { report, loading, handleGetReportById } = useInterviewHook();

  const { reportId } = useParams();

  useEffect(() => {
    console.log(reportId);
    handleGetReportById(reportId);
  }, [reportId]);

  const [activeTab, setActiveTab] = useState("overview");
  const [expanded, setExpanded] = useState({});
  const [completedDays, setCompletedDays] = useState([]);

  const toggleExpanded = (key) => {
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleDay = (day) => {
    setCompletedDays((prev) =>
      prev.includes(day)
        ? prev.filter((value) => value !== day)
        : [...prev, day],
    );
  };

  const getTimeAgo = (date) => {
    const seconds = Math.floor((Date.now() - new Date(date).getTime()) / 1000);

    if (Number.isNaN(seconds) || seconds < 0) return "Recently";

    if (seconds < 60) return `${seconds} seconds ago`;

    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes} minutes ago`;

    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours} hours ago`;

    return `${Math.floor(hours / 24)} days ago`;
  };

  const formatDate = (date) =>
    new Date(date).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

  const renderQuestions = (questions, type) => (
    <div className="space-y-3">
      {questions.map((item, index) => {
        const key = `${type}-${index}`;
        const isOpen = !!expanded[key];

        return (
          <article
            key={key}
            className="overflow-hidden rounded-xl border border-[#e6eaf0] bg-white"
          >
            <button
              type="button"
              onClick={() => toggleExpanded(key)}
              aria-expanded={isOpen}
              className="flex w-full items-start justify-between gap-4 p-4 text-left sm:p-5"
            >
              <div className="flex min-w-0 gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-xs font-semibold text-blue-700">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-blue-600">
                    {type === "technical" ? "Technical" : "Behavioral"} question
                  </p>
                  <h3 className="text-sm font-semibold leading-6 text-neutral-800">
                    {item.question}
                  </h3>
                </div>
              </div>

              <ChevronDown
                size={18}
                className={`mt-1 shrink-0 text-neutral-400 transition ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isOpen && (
              <div className="space-y-4 border-t border-[#edf0f5] bg-[#f8faff] p-4 sm:p-5">
                <div className="rounded-lg border border-blue-100 bg-white p-4">
                  <p className="mb-2 text-xs font-semibold text-blue-700">
                    What this question evaluates
                  </p>
                  <p className="text-sm leading-6 text-neutral-600">
                    {item.intention}
                  </p>
                </div>

                <div>
                  <p className="mb-2 text-xs font-semibold text-neutral-800">
                    Suggested answer approach
                  </p>
                  <p className="text-sm leading-7 text-neutral-600">
                    {item.answer}
                  </p>
                </div>
              </div>
            )}
          </article>
        );
      })}
    </div>
  );

  if (loading || !report) {
    return <div>Loading report...</div>;
  }

  return (
    <div className="min-h-full bg-[#f7f8fa] px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-350">
        {/* Header */}
        <header className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
          <div>
            <p className="mb-2 flex items-center gap-2 text-xs font-semibold text-blue-600">
              <Sparkles size={15} />
              HIRELENS / REPORT
            </p>

            <h1 className="text-2xl font-semibold tracking-tight text-[#202124] sm:text-3xl">
              {report.title}
            </h1>

            <p className="mt-2 text-sm text-neutral-500">
              {report.company} <span className="mx-1">·</span> Analyzed{" "}
              {getTimeAgo(report.createdAt)}
            </p>
          </div>

          <div className="flex items-center gap-2 self-start rounded-lg border border-[#e5e7eb] bg-white px-3 py-2 text-xs text-neutral-500">
            <Clock3 size={15} className="text-blue-600" />
            {formatDate(report.createdAt)}
          </div>
        </header>

        {/* Internal report navigation */}
        <nav className="mb-6 overflow-x-auto rounded-xl border border-[#e6eaf0] bg-white p-1.5 shadow-sm">
          <div className="flex min-w-max gap-1">
            {tabs.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                type="button"
                onClick={() => setActiveTab(id)}
                className={`flex items-center gap-2 rounded-lg px-3 py-3 text-xs font-medium transition sm:px-4 sm:text-sm ${
                  activeTab === id
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-neutral-600 hover:bg-blue-50 hover:text-blue-700"
                }`}
              >
                <Icon size={16} />
                {label}
              </button>
            ))}
          </div>
        </nav>

        {/* Overview + skill gaps */}
        {activeTab === "overview" && (
          <div className="space-y-5">
            <Card>
              <SectionHeading
                icon={Target}
                title="Candidate Match & Compatibility"
                subtitle="Your overall match score for the target opportunity."
              />

              <div className="grid gap-7 md:grid-cols-[auto_1fr] md:items-center">
                <div className="flex items-center gap-5">
                  <div
                    className="flex h-32 w-32 shrink-0 items-center justify-center rounded-full"
                    style={{
                      background: `conic-gradient(#2563eb ${report.matchScore}%, #e8edf5 0)`,
                    }}
                  >
                    <div className="flex h-27 w-27 flex-col items-center justify-center rounded-full bg-white">
                      <span className="text-4xl font-bold text-blue-600">
                        {report.matchScore}%
                      </span>
                      <span className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-neutral-500">
                        Match score
                      </span>
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-neutral-500">
                      Role alignment
                    </p>
                    <h3 className="mt-2 text-xl font-semibold text-neutral-900">
                      {report.matchScore >= 80
                        ? "Strong Match"
                        : report.matchScore >= 60
                          ? "Moderate Match"
                          : "Development Needed"}
                    </h3>
                    <p className="mt-2 max-w-52.5 text-xs leading-5 text-neutral-500">
                      Overall match score returned by the report analysis.
                    </p>
                  </div>
                </div>

                <div className="rounded-xl bg-[#f8faff] p-5">
                  <h3 className="mb-4 text-sm font-semibold">Report summary</h3>

                  {[
                    ["Target role", report.title],
                    ["Company", report.company],
                    ["Technical questions", report.technicalQuestions.length],
                    ["Behavioral questions", report.behavioralQuestions.length],
                    ["Preparation days", report.preparationPlan.length],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="flex items-center justify-between gap-4 border-b border-[#e8edf5] py-3 last:border-0 last:pb-0"
                    >
                      <span className="text-xs text-neutral-500">{label}</span>
                      <span className="text-right text-sm font-semibold text-neutral-800">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-7">
                <div className="mb-2 flex justify-between text-xs">
                  <span className="font-medium text-neutral-600">
                    Overall match
                  </span>
                  <span className="font-semibold text-blue-700">
                    {report.matchScore}%
                  </span>
                </div>
                <div className="h-2.5 overflow-hidden rounded-full bg-[#e8edf5]">
                  <div
                    className="h-full rounded-full bg-blue-600 transition-all"
                    style={{ width: `${report.matchScore}%` }}
                  />
                </div>
              </div>
            </Card>

            <Card>
              <div className="mb-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
                <div>
                  <h2 className="text-lg font-semibold text-neutral-900">
                    Skill Gap Analysis
                  </h2>
                  <p className="mt-1 text-sm text-neutral-500">
                    Skills identified for further preparation.
                  </p>
                </div>

                <span className="flex items-center gap-2 self-start rounded-lg bg-blue-50 px-3 py-2 text-xs font-medium text-blue-700">
                  <ShieldAlert size={15} />
                  {report.skillGaps.length} gaps identified
                </span>
              </div>

              <div className="space-y-3">
                {report.skillGaps.map((gap) => (
                  <div
                    key={gap._id}
                    className="flex flex-col justify-between gap-3 rounded-lg border border-[#edf0f5] p-4 sm:flex-row sm:items-center"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                        <Layers3 size={17} />
                      </div>
                      <h3 className="text-sm font-medium text-neutral-800">
                        {gap.skill}
                      </h3>
                    </div>

                    <span
                      className={`self-start rounded-full border px-3 py-1 text-[10px] font-semibold uppercase sm:self-center ${
                        severityClasses[gap.severity] ||
                        "border-neutral-200 bg-neutral-50 text-neutral-600"
                      }`}
                    >
                      {gap.severity} severity
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex items-start gap-2 rounded-lg bg-[#f8faff] p-3 text-xs leading-5 text-neutral-500">
                <FileText size={15} className="mt-0.5 shrink-0 text-blue-600" />
                Skill names and severity levels are taken directly from the
                sample report. Individual skill-match percentages are not
                included in the response.
              </div>
            </Card>

            <button
              type="button"
              onClick={() => setActiveTab("technical")}
              className="flex w-full items-center justify-between rounded-xl bg-blue-600 p-5 text-left text-white transition hover:bg-blue-700"
            >
              <div>
                <p className="text-sm font-semibold">
                  Continue to Technical Interview Prep
                </p>
                <p className="mt-1 text-xs text-blue-100">
                  Review {report.technicalQuestions.length} questions and
                  suggested answers.
                </p>
              </div>
              <ArrowRight size={20} />
            </button>
          </div>
        )}

        {/* Technical questions */}
        {activeTab === "technical" && (
          <div>
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-neutral-900">
                Technical Interview Prep
              </h2>
              <p className="mt-2 text-sm text-neutral-500">
                Questions, evaluation objectives, and suggested answer
                approaches.
              </p>
            </div>
            {renderQuestions(report.technicalQuestions, "technical")}
          </div>
        )}

        {/* Behavioral questions */}
        {activeTab === "behavioral" && (
          <div>
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-neutral-900">
                Behavioral Interview Prep
              </h2>
              <p className="mt-2 text-sm text-neutral-500">
                Prepare examples around debugging, collaboration, ownership, and
                prioritization.
              </p>
            </div>
            {renderQuestions(report.behavioralQuestions, "behavioral")}
          </div>
        )}

        {/* Preparation roadmap */}
        {activeTab === "roadmap" && (
          <div>
            <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <h2 className="text-xl font-semibold text-neutral-900">
                  Preparation Roadmap
                </h2>
                <p className="mt-2 text-sm text-neutral-500">
                  Your personalized day-by-day preparation plan.
                </p>
              </div>

              <div className="rounded-xl border border-blue-100 bg-white p-4">
                <p className="text-xs text-neutral-500">Completed milestones</p>
                <p className="mt-1 text-xl font-semibold text-blue-600">
                  {completedDays.length} / {report.preparationPlan.length}
                </p>
              </div>
            </div>

            <div className="mb-6 h-2 overflow-hidden rounded-full bg-[#e5eaf3]">
              <div
                className="h-full rounded-full bg-blue-600 transition-all"
                style={{
                  width: `${
                    (completedDays.length / report.preparationPlan.length) * 100
                  }%`,
                }}
              />
            </div>

            <div className="relative space-y-5">
              <div className="absolute bottom-8 left-5 top-8 w-px bg-blue-100" />

              {report.preparationPlan.map((item) => {
                const isCompleted = completedDays.includes(item.day);

                return (
                  <article
                    key={item.day}
                    className="relative flex gap-4 sm:gap-5"
                  >
                    <button
                      type="button"
                      onClick={() => toggleDay(item.day)}
                      aria-pressed={isCompleted}
                      aria-label={`Mark day ${item.day} ${
                        isCompleted ? "incomplete" : "complete"
                      }`}
                      className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border text-xs font-semibold transition ${
                        isCompleted
                          ? "border-blue-600 bg-blue-600 text-white"
                          : "border-[#dce4f0] bg-white text-blue-700 hover:border-blue-400"
                      }`}
                    >
                      {isCompleted ? (
                        <CheckCircle2 size={19} />
                      ) : (
                        String(item.day).padStart(2, "0")
                      )}
                    </button>

                    <div
                      className={`min-w-0 flex-1 rounded-xl border p-5 shadow-sm sm:p-6 ${
                        isCompleted
                          ? "border-blue-200 bg-blue-50/40"
                          : "border-[#e6eaf0] bg-white"
                      }`}
                    >
                      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                        <div>
                          <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-blue-600">
                            Day {item.day}
                          </p>
                          <h3 className="text-base font-semibold leading-6 text-neutral-900">
                            {item.focus}
                          </h3>
                        </div>

                        {isCompleted && (
                          <span className="self-start rounded-full bg-blue-100 px-3 py-1 text-[10px] font-semibold text-blue-700">
                            Completed
                          </span>
                        )}
                      </div>

                      <div className="mt-4 space-y-3">
                        {item.task.map((task, index) => (
                          <div
                            key={`${item.day}-${index}`}
                            className="flex items-start gap-3 rounded-lg bg-[#f8faff] p-3"
                          >
                            <CheckCircle2
                              size={16}
                              className="mt-0.5 shrink-0 text-blue-500"
                            />
                            <p className="text-sm leading-6 text-neutral-600">
                              {task}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        )}

        <footer className="mt-8 flex flex-col justify-between gap-2 border-t border-[#e6eaf0] pt-5 text-xs text-neutral-400 sm:flex-row">
          <p>HireLens · Interview preparation report</p>
          <p>Report generated {formatDate(report.createdAt)}</p>
        </footer>
      </div>
    </div>
  );
};

export default ReportPage;
