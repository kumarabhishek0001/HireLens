
const features = [
  {
    icon: "⌕",
    title: "Precision Match Scoring",
    description:
      "Real-time alignment diagnostics comparing your resume against exact JD requirements and hiring rubrics to eliminate guesswork.",
    footer: "Deterministic Analysis ↗",
  },
  {
    icon: "◌",
    title: "Skill Gap & Trade-off Analysis",
    description:
      "Understand missing keywords, seniority expectations, and compensatory strengths before walking into round one.",
    footer: "Blind-spot Identification ◎",
  },
  {
    icon: "▤",
    title: "Curated Behavioral & Tech Questions",
    description:
      "Personalized question generator based on your actual experience gaps, complete with structured answering playbooks.",
    footer: "STAR Playbooks Built-in ↓",
  },
  {
    icon: "▥",
    title: "Adaptive 7-Day Study Roadmap",
    description:
      "Structured daily milestones so you never feel overwhelmed preparing for comprehensive onsite loops or technical panels.",
    footer: "Paced Milestones ☑",
  },
];

const FeaturesSection = () => {
  return (
    <section className="bg-[#f7f8fa] px-5 py-16 font-sans text-[#17191f] sm:px-8 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-9 text-center">
          <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-[10px] font-medium text-blue-700">
            Core Intelligence Engine
          </span>

          <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            Engineered for Complete Interview Readiness
          </h2>

          <p className="mx-auto mt-2 max-w-xl text-xs leading-5 text-[#626875]">
            Transform generic resume submissions into an airtight, defensible
            interview performance backed by concrete technical validation.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="flex min-h-51.25 flex-col rounded-md border border-gray-100 bg-white p-5 transition-shadow hover:shadow-md"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-blue-50 text-lg text-blue-600">
                {feature.icon}
              </div>

              <h3 className="mt-3 text-sm font-semibold leading-5">
                {feature.title}
              </h3>

              <p className="mt-2 text-[11px] leading-[1.65] text-[#555d6b]">
                {feature.description}
              </p>

              <p className="mt-auto pt-5 text-[10px] font-medium text-blue-600">
                {feature.footer}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
