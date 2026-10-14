
const traditionalPoints = [
  "Submitting generic resumes hoping an automated ATS parser flags the right bullet.",
  "Memorizing hundreds of arbitrary LeetCode problems or broad behavioral templates.",
  "Entering interviews with persistent anxiety about unspoken architectural blind spots.",
  "Ghosted after round one with zero visibility into why the profile missed the rubric.",
];

const hireLensPoints = [
  "Exact rubric clarity: Understand how hiring managers weight every single bullet point.",
  "Targeted rehearsal: Practice the exact 6-8 system design and team trade-offs the interviewer is tracking.",
  "Proactive story defense: Bridge perceived skill gaps through proven compensatory narrative angles.",
  "A structured 7-day sprint that replaces burnout with surgical, calm readiness.",
];

const ComparisonCard = ({ title, badge, points, positive, result }) => {
  return (
    <article
      className={`relative flex h-full flex-col overflow-hidden rounded-xl border border-gray-100 bg-white p-5 shadow-sm ${
        positive ? "border-t-[3px] border-t-blue-600" : ""
      }`}
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-sm font-semibold">{title}</h3>

        <span
          className={`px-2 py-1 text-[9px] font-medium ${
            positive
              ? "bg-blue-50 text-blue-700"
              : "bg-red-50 text-red-600"
          }`}
        >
          {badge}
        </span>
      </div>

      <ul className="mt-4 space-y-3">
        {points.map((point) => (
          <li
            key={point}
            className="flex items-start gap-2 text-[11px] leading-[1.6] text-[#424956]"
          >
            <span
              className={`mt-0.5 shrink-0 text-xs font-bold ${
                positive ? "text-blue-600" : "text-red-500"
              }`}
            >
              {positive ? "✓" : "⊗"}
            </span>
            <span>{point}</span>
          </li>
        ))}
      </ul>

      <div
        className={`mt-auto flex items-center justify-between gap-3 mt-5 px-3 py-3 text-[10px] leading-4 ${
          positive
            ? "bg-blue-50 text-blue-700"
            : "bg-[#f0f2f4] text-[#596170]"
        }`}
      >
        <span>{result}</span>
        {positive && <span className="shrink-0">◎</span>}
      </div>
    </article>
  );
};

const ComparisonSection = () => {
  return (
    <section className="bg-[#f1f2f4] px-5 py-16 font-sans text-[#17191f] sm:px-8 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-9 text-center">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            The Contrast Is Decisive
          </h2>

          <p className="mt-2 text-xs leading-5 text-[#626875]">
            Compare the traditional blind-apply approach against calibrated
            intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <ComparisonCard
            title="Without hireLens"
            badge="Traditional Method"
            points={traditionalPoints}
            positive={false}
            result="Result: 8 to 14 weeks of speculative loops with low conversion."
          />

          <ComparisonCard
            title="With hireLens"
            badge="Precision Calibrated"
            points={hireLensPoints}
            positive={true}
            result="Result: 3.4× higher final-round pass rate."
          />
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
