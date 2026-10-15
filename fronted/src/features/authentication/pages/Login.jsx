import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="grid min-h-screen bg-[#f7f8fa] font-sans text-[#17191f] lg:grid-cols-2">
      {/* Left panel */}
      <section className="flex flex-col justify-center px-6 py-12 sm:px-10 lg:px-14 xl:px-20">
        <div className="mx-auto w-full max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1.5 text-[11px] font-medium text-blue-700">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            Welcome back to hireLens
          </span>

          <h1 className="mt-7 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            Welcome back to <span className="text-primary">hireLens</span>
          </h1>

          <p className="mt-4 max-w-lg text-sm leading-7 text-[#626875]">
            Log in to access your interview roadmap, resume analysis, and
            personalized interview preparation.
          </p>

          {/* Trusted companies */}
          <div className="mt-7 rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex shrink-0 -space-x-3">
                {[
                  { initials: "SL", color: "bg-blue-700" },
                  { initials: "MK", color: "bg-[#17191f]" },
                  { initials: "AK", color: "bg-[#596170]" },
                ].map((person) => (
                  <div
                    key={person.initials}
                    className={`flex h-9 w-9 items-center justify-center rounded-full border-2 border-white ${person.color} text-xs font-medium text-white`}
                  >
                    {person.initials}
                  </div>
                ))}
              </div>

              <p className="text-sm leading-5 text-[#343a46]">
                Trusted by senior engineers and leads at
              </p>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-3">
              {["Stripe", "Figma", "Google", "Datadog"].map(
                (company, index) => (
                  <div key={company} className="flex items-center gap-2">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#2864ed"
                      strokeWidth="2"
                      className="h-5 w-5 shrink-0"
                    >
                      <path d="m12 2 2.5 2 3.2-.2.8 3.1 2.5 2-1.3 3.1.5 3.2-3 1.4-1.5 2.8-3.2-1-3.2 1-1.5-2.8-3-1.4.5-3.2-1.3-3.1 2.5-2 .8-3.1 3.2.2L12 2Z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>

                    <span className="text-sm font-semibold text-[#343a46]">
                      {company}
                    </span>

                    {index < 3 && <span className="ml-1 text-gray-400">•</span>}
                  </div>
                ),
              )}
            </div>
          </div>

          {/* Testimonial */}
          <div className="relative mt-5 overflow-hidden rounded-xl border border-gray-100 bg-[#f0f2f4] p-5 sm:p-6">
            <div className="pointer-events-none absolute bottom-0 right-0 h-20 w-20 rounded-tl-full bg-blue-50" />

            <div className="relative flex gap-3">
              <span className="shrink-0 text-3xl font-bold leading-none text-primary">
                ”
              </span>

              <div className="min-w-0">
                <blockquote className="text-sm leading-6 text-[#343a46]">
                  "hireLens helped me pinpoint 3 critical distributed system
                  design gaps before my Staff interview loop. The precision
                  benchmarking made the offer possible."
                </blockquote>

                <div className="mt-4 flex flex-wrap items-baseline gap-x-3 gap-y-1 text-xs">
                  <span className="font-semibold text-[#17191f]">Sarah L.</span>

                  <span className="text-[#596170]">
                    Staff Infrastructure Engineer, Stripe
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Right panel */}
      <section className="flex items-center justify-center px-5 py-10 sm:px-10 lg:px-12">
        <div className="w-full max-w-md overflow-hidden rounded-xl border border-gray-100 bg-white shadow-[0_8px_30px_-15px_rgba(15,23,42,0.2)]">
          <div className="p-6 sm:p-8">
            <h2 className="text-2xl font-semibold tracking-tight">
              Sign in to your account
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Enter your credentials to continue.
            </p>

            <form
              className="mt-7 space-y-5"
              onSubmit={(event) => event.preventDefault()}
            >
              <div>
                <label
                  htmlFor="login-email"
                  className="mb-2 block text-sm font-medium"
                >
                  Email address
                </label>

                <input
                  id="login-email"
                  type="email"
                  name="email"
                  placeholder="name@company.com"
                  autoComplete="email"
                  required
                  className="w-full rounded-md border border-gray-200 bg-[#f3f4f6] px-4 py-3 text-sm outline-none transition focus:border-primary focus:bg-white focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between gap-3">
                  <label
                    htmlFor="login-password"
                    className="text-sm font-medium"
                  >
                    Password
                  </label>

                  <Link
                    to="/forgot-password"
                    className="text-xs font-medium text-primary hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>

                <div className="relative">
                  <input
                    id="login-password"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    required
                    className="w-full rounded-md border border-gray-200 bg-[#f3f4f6] px-4 py-3 pr-12 text-sm outline-none transition focus:border-primary focus:bg-white focus:ring-2 focus:ring-blue-100"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-primary"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-hover"
              >
                Sign in to hireLens
                <span aria-hidden="true">→</span>
              </button>
            </form>
          </div>

          <div className="border-t border-gray-100 bg-[#fafafa] px-6 py-5 text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="font-semibold text-primary hover:underline"
            >
              Sign up free
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Login;
