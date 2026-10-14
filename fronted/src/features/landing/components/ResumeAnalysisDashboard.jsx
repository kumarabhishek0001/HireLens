
const ResumeAnalysisDashboard = () => {
  return (
    <section className="relative mx-auto w-full max-w-[1140px] rounded-xl bg-white p-5 font-sans text-[#17191f] shadow-[0_20px_60px_-25px_rgba(15,23,42,0.15)] sm:p-7">

      {/* Floating match badge */}
      <div className="absolute -top-9 left-5 z-10 flex items-center gap-3 rounded-lg bg-white px-4 py-2.5 shadow-md">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-blue-600">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
            <path d="M12 3l2.4 2 3.1-.2.8 3 2.4 2-1.3 2.8.5 3.1-2.8 1.4-1.5 2.7-3-1-3 1-1.5-2.7-2.8-1.4.5-3.1-1.3-2.8 2.4-2 .8-3 3.1.2L12 3Z" />
            <path d="m9 12 2 2 4-4" />
          </svg>
        </div>
        <div className="text-xs">
          <p className="text-sm font-bold">88% Match Verified</p>
          <p className="text-gray-500">Stripe · Senior Eng Track</p>
        </div>
      </div>

      {/* Dashboard header */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-gray-100 bg-[#f5f6f7] px-4 py-3 text-xs text-gray-600">
        <p>Resume Analysis / lead-systems-architect</p>
        <span className="rounded-sm bg-white px-2 py-1 text-blue-600">
          Live Scan Complete
        </span>
      </div>

      {/* Main dashboard grid */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">

        {/* Overall readiness */}
        <div className="flex flex-col rounded-md bg-[#f0f2f4] p-6 lg:row-span-2">
          <div className="flex items-center justify-between gap-2">
            <p className="text-xs font-semibold tracking-wide text-gray-600">
              OVERALL READINESS
            </p>
            <span className="whitespace-nowrap bg-blue-50 px-2 py-1 text-xs text-blue-700">
              Tier 1 Target
            </span>
          </div>

          {/* Match ring */}
          <div className="mt-8 flex justify-center">
            <div className="relative flex h-36 w-36 items-center justify-center">
              <svg viewBox="0 0 120 120" className="absolute inset-0 h-full w-full -rotate-90">
                <circle cx="60" cy="60" r="54" stroke="#dce3ed" strokeWidth="9" fill="none" />
                <circle
                  cx="60"
                  cy="60"
                  r="54"
                  stroke="#2864ed"
                  strokeWidth="9"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray="298.5 339.3"
                />
              </svg>
              <div className="text-center">
                <p className="text-4xl font-bold tracking-tight">88%</p>
                <p className="mt-1 text-xs text-gray-600">Match Index</p>
              </div>
            </div>
          </div>

          <div className="mt-5 text-center">
            <p className="text-sm font-medium">
              Strong High-Probability Candidate
            </p>
            <p className="text-xs text-gray-600">
              Top 6% percentile for Senior Fullstack Roles
            </p>
          </div>

          {/* Readiness metrics */}
          <div className="mt-auto space-y-5 pt-10">
            <div>
              <div className="mb-2 flex justify-between text-sm">
                <span className="text-gray-600">JD Congruence</span>
                <span className="font-semibold">92%</span>
              </div>
              <div className="h-1.5 rounded-full bg-gray-200">
                <div className="h-full w-[92%] rounded-full bg-blue-600" />
              </div>
            </div>

            <div>
              <div className="mb-2 flex justify-between text-sm">
                <span className="text-gray-600">Behavioral Rubric</span>
                <span className="font-semibold">84%</span>
              </div>
              <div className="h-1.5 rounded-full bg-gray-200">
                <div className="h-full w-[84%] rounded-full bg-blue-700" />
              </div>
            </div>
          </div>
        </div>

        {/* Identified strengths */}
        <div className="flex flex-col rounded-md bg-[#f0f2f4] p-6">
          <h2 className="flex items-center gap-3 text-xl font-semibold tracking-tight">
            <svg className="h-5 w-5 shrink-0 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 3 5 6v5c0 4.5 3 7.5 7 10 4-2.5 7-5.5 7-10V6l-7-3Z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
            Identified Strengths
          </h2>

          <ul className="mt-4 space-y-3 text-sm leading-5">
            <li className="flex gap-3">
              <span className="font-bold text-blue-600">✓</span>
              <span>Multi-tenant distributed state management across 4+ microservices</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-blue-600">✓</span>
              <span>Demonstrated mentoring of 5 intermediate engineers to promotion</span>
            </li>
          </ul>

          <div className="mt-auto flex flex-wrap justify-between gap-2 pt-7 text-xs">
            <span className="text-gray-600">Recruiter Highlight</span>
            <span className="text-blue-600">9.4/10 impact score</span>
          </div>
        </div>

        {/* Focus and trade-offs */}
        <div className="flex flex-col rounded-md bg-[#f0f2f4] p-6">
          <h2 className="flex items-center gap-3 text-xl font-semibold tracking-tight">
            <svg className="h-5 w-5 shrink-0 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 3 22 20H2L12 3Z" />
              <path d="M12 9v5m0 3h.01" />
            </svg>
            Focus &amp; Trade-offs
          </h2>

          <ul className="mt-4 space-y-3 text-sm leading-5">
            <li className="flex gap-3">
              <span className="font-bold text-amber-600">!</span>
              <span>JD requests Kubernetes deployment pipelines; resume emphasizes ECS</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-amber-600">!</span>
              <span>Zero explicit mention of SLO/SLA management metrics in lead role</span>
            </li>
          </ul>

          <div className="mt-auto grid grid-cols-2 gap-3 pt-7 text-xs">
            <span className="text-gray-600">Compensatory Strategy</span>
            <span className="font-medium">Bridge via past AWS projects</span>
          </div>
        </div>

        {/* Predicted interview question */}
        <div className="rounded-md bg-[#f0f2f4] p-6 md:col-span-2 lg:col-span-2">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="flex items-center gap-3 text-xl font-semibold tracking-tight">
              <svg className="h-5 w-5 shrink-0 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="9" />
                <path d="M9 9a3 3 0 0 1 6 0c0 2-3 2-3 5m0 3h.01" />
              </svg>
              Predicted Loop Question #1
            </h2>
            <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600">
              High Probability
            </span>
          </div>

          <p className="mt-4 text-sm font-medium leading-6">
            "Walk us through how you would architect our high-throughput payment webhook handler when shifting from ECS to a container-managed mesh?"
          </p>

          <div className="mt-4 rounded-md bg-white p-4 text-sm leading-5 text-gray-600">
            <p>
              <span className="font-semibold text-gray-900">
                Recommended Defense Angle:
              </span>{" "}
              Reference your 2023 infrastructure redesign where zero downtime
              was achieved through canary deployments. Pivot technical
              similarity directly to the target team’s stack.
            </p>
          </div>
        </div>
      </div>

      {/* Floating competency badge */}
      <div className="absolute -bottom-4 right-0 z-10 flex items-center gap-3 rounded-lg bg-white px-4 py-3 shadow-lg">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
            <circle cx="12" cy="12" r="9" />
            <path d="m8 12 3 3 5-6" />
          </svg>
        </div>
        <div className="text-xs">
          <p className="font-semibold">14/16 Key Competencies Met</p>
          <p className="text-gray-600">Rubric calibrated to Level L5</p>
        </div>
      </div>
    </section>
  );
};

export default ResumeAnalysisDashboard;
