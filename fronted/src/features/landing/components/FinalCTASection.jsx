
import { useNavigate } from "react-router-dom";

const FinalCTASection = () => {
  const navigate = useNavigate();

  return (
    <section className="border-x-4 border-indigo-500 bg-white px-5 py-10 font-sans sm:px-8 sm:py-12">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-xl bg-[#111216] px-6 py-12 text-center text-white shadow-[0_16px_35px_-15px_rgba(0,0,0,0.3)] sm:px-12 sm:py-14">
        {/* Blue gradient on the right */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 w-3/5 bg-[radial-gradient(ellipse_at_right,_rgba(37,99,235,0.32),_transparent_70%)]"
        />

        <div className="relative z-10 mx-auto max-w-2xl">
          <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-[10px] font-medium text-gray-200">
            Ready to test your readiness?
          </span>

          <h2 className="mx-auto mt-4 max-w-xl text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
            Drop in your target job description. Get your score in 45 seconds.
          </h2>

          <p className="mx-auto mt-3 max-w-lg text-xs leading-5 text-gray-300">
            No endless setup. Paste your resume, select your target role, and
            enter your next interview with complete command of the rubric.
          </p>

          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button
              onClick={() => navigate("/analyze")}
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-primary px-5 py-3 text-xs font-semibold text-white shadow-[0_0_14px_rgba(37,99,235,0.35)] transition-colors hover:bg-primary-hover"
            >
              Analyze Now
              <span aria-hidden="true">→</span>
            </button>

            <button
              onClick={() => navigate("/methodology")}
              className="inline-flex items-center justify-center rounded-sm bg-[#292b32] px-5 py-3 text-xs font-medium text-white transition-colors hover:bg-[#383b44]"
            >
              Explore Methodology
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
