
const companies = [
  {
    name: "Stripe",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
        <rect x="3" y="7" width="15" height="11" rx="1" />
        <path d="M7 5h14v11M7 11h7m-7 3h5" />
      </svg>
    ),
  },
  {
    name: "Figma",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
        <path d="M14 3H9a4 4 0 0 0 0 8h5V3Z" />
        <path d="M14 11H9a4 4 0 0 0 0 8h1" />
        <circle cx="14" cy="15" r="4" />
        <path d="M14 3h1a4 4 0 0 1 0 8h-1" />
        <path d="m4 20 16-16" />
      </svg>
    ),
  },
  {
    name: "Vercel",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M12 3 23 21H1L12 3Z" />
      </svg>
    ),
  },
  {
    name: "Google",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
        <circle cx="10.5" cy="10.5" r="5.5" />
        <path d="m15 15 5 5" />
      </svg>
    ),
  },
  {
    name: "Acme Systems",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
        <path d="m12 3 8 5-8 5-8-5 8-5Z" />
        <path d="m4 12 8 5 8-5M4 16l8 5 8-5" />
      </svg>
    ),
  },
];

const TrustedCompanies = () => {
  return (
    <section className="w-full bg-[#f1f2f4] px-4 py-7 font-sans sm:py-8">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-5">
        <p className="text-center text-[15px] font-semibold uppercase tracking-wide text-[#454954]">
          Trusted by top candidates landing offers at
        </p>

        <div className="flex w-full flex-wrap items-center justify-center gap-x-8 gap-y-4 sm:gap-x-10">
          {companies.map((company) => (
            <div
              key={company.name}
              className="flex items-center gap-4 text-2xl font-semibold tracking-tight text-[#55565a]"
            >
              {company.icon}
              <span>{company.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedCompanies;
