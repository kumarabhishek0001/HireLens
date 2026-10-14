
const testimonials = [
  {
    quote:
      "hireLens flagged two major cloud architecture gaps I didn't realize were in the JD. Researched the exact suggested questions and received an offer last week.",
    initials: "SL",
    name: "Sarah L.",
    role: "Senior Frontend Engineer",
    outcome: "Now at Stripe",
  },
  {
    quote:
      "The 88% match breakdown gave me the exact vocabulary to highlight my transferable skills during my behavioral interview. Truly changed how I frame past impact.",
    initials: "MK",
    name: "Marcus K.",
    role: "Staff Product Designer",
    outcome: "Offer accepted",
  },
  {
    quote:
      "Non-technical, completely clear, and gave me an instant daily study plan without any fluff. By far the highest ROI tool in my job search.",
    initials: "PD",
    name: "Priya D.",
    role: "Engineering Manager",
    outcome: "Multiple Offers",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="border-x-4 border-indigo-500 bg-[#f7f8fa] px-5 py-14 font-sans text-[#17191f] sm:px-8 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8 text-center">
          <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-[10px] font-medium text-blue-700">
            Candidate Testimonials
          </span>

          <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            What Candidates Are Saying
          </h2>

          <p className="mx-auto mt-2 max-w-lg text-xs leading-5 text-[#626875]">
            Validated outcomes from engineers, managers, and designers who
            navigated high-stakes onsite loops.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="flex flex-col overflow-hidden rounded-md border border-gray-100 bg-white"
            >
              <div className="flex-1 p-4">
                <div
                  aria-label="5 out of 5 stars"
                  className="mb-2 text-sm tracking-[2px] text-amber-500"
                >
                  ★★★★★
                </div>

                <p className="text-[11px] leading-[1.7] text-[#303642]">
                  "{testimonial.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3 bg-[#f0f2f4] px-4 py-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-blue-50 text-xs font-semibold text-blue-600">
                  {testimonial.initials}
                </div>

                <div className="min-w-0">
                  <p className="text-[11px] font-semibold">
                    {testimonial.name}
                  </p>

                  <p className="text-[9px] leading-4 text-gray-600">
                    {testimonial.role}{" "}
                    <span className="text-blue-600">
                      ({testimonial.outcome})
                    </span>
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
