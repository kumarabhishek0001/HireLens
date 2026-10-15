import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "./../hooks/useAuth";

const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const benefits = [
    {
      icon: "↗",
      title: "Personalized resume analysis",
      description:
        "Understand how your experience aligns with your target job description.",
    },
    {
      icon: "◎",
      title: "Interview questions tailored to you",
      description:
        "Practice behavioral and technical questions based on your experience.",
    },
    {
      icon: "▦",
      title: "A structured preparation roadmap",
      description:
        "Focus on your knowledge gaps with a practical, step-by-step study plan.",
    },
  ];

  const { loading, handleRegister } = useAuth();
  const [error, setError] = useState("");

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();

    try {
      await handleRegister({ username, email, password });
      navigate("/home");
    } catch (err) {
      setError(err.response?.data?.message || "regsiter failed");
    }
  };

  if (loading) {
    return <div>loading....</div>;
  }

  return (
    <main className="grid min-h-screen bg-[#f7f8fa] font-sans text-[#17191f] lg:grid-cols-2">
      {/* Left panel */}
      <section className="relative flex flex-col justify-center overflow-hidden px-6 py-12 sm:px-10 lg:px-12 xl:px-16">
        <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-blue-100/70 blur-3xl" />

        <div className="relative mx-auto w-full max-w-xl">
          <Link to="/" className="inline-flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-lg font-bold text-white">
              h
            </span>
            <span className="text-xl font-semibold tracking-tight">
              hireLens
            </span>
          </Link>

          <h1 className="mt-9 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            Start seeing your resume through the hiring team's eyes.
          </h1>

          <p className="mt-4 max-w-lg text-sm leading-7 text-[#626875]">
            Create your free account to uncover blind spots, improve your
            interview preparation, and approach your next opportunity with
            confidence.
          </p>

          <div className="mt-8 space-y-3">
            {benefits.map((benefit) => (
              <article
                key={benefit.title}
                className="flex gap-4 rounded-lg border border-gray-100 bg-white p-4 sm:p-5"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-lg text-primary">
                  {benefit.icon}
                </div>

                <div>
                  <h3 className="text-sm font-semibold">{benefit.title}</h3>

                  <p className="mt-1 text-xs leading-5 text-gray-500">
                    {benefit.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-4">
            <div className="flex -space-x-3">
              {["SL", "MK", "PD"].map((initials, index) => (
                <div
                  key={initials}
                  className={`flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#f7f8fa] text-xs font-semibold text-white ${
                    index === 0
                      ? "bg-blue-600"
                      : index === 1
                        ? "bg-slate-600"
                        : "bg-indigo-500"
                  }`}
                >
                  {initials}
                </div>
              ))}

              <div className="flex h-10 items-center justify-center rounded-full border-2 border-[#f7f8fa] bg-[#17191f] px-2 text-[10px] font-semibold text-white">
                +14k
              </div>
            </div>

            <div>
              <div className="text-sm tracking-[2px] text-amber-500">★★★★★</div>
              <p className="mt-1 text-xs text-gray-500">
                Helping candidates prepare with confidence
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Right panel */}
      <section className="flex items-center justify-center px-5 py-10 sm:px-10 lg:px-12">
        <div className="w-full max-w-md rounded-xl border border-gray-100 bg-white p-6 shadow-[0_8px_30px_-15px_rgba(15,23,42,0.2)] sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight">
            Create your account
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Get started with your free hireLens account.
          </p>

          <form
            className="mt-7 space-y-5"
            onSubmit={(event) => handleSignUpSubmit(event)}
          >
            <div>
              <label
                htmlFor="signup-name"
                className="mb-2 block text-sm font-medium"
              >
                Username
              </label>

              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                id="signup-name"
                type="text"
                name="name"
                placeholder="Alex Mercer"
                autoComplete="name"
                required
                className="w-full rounded-md border border-gray-200 bg-[#f3f4f6] px-4 py-3 text-sm outline-none transition focus:border-primary focus:bg-white focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div>
              <label
                htmlFor="signup-email"
                className="mb-2 block text-sm font-medium"
              >
                Email address
              </label>

              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="signup-email"
                type="email"
                name="email"
                placeholder="alex@example.com"
                autoComplete="email"
                required
                className="w-full rounded-md border border-gray-200 bg-[#f3f4f6] px-4 py-3 text-sm outline-none transition focus:border-primary focus:bg-white focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div>
              <label
                htmlFor="signup-password"
                className="mb-2 block text-sm font-medium"
              >
                Password
              </label>

              <div className="relative">
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="signup-password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="At least 8 characters"
                  autoComplete="new-password"
                  minLength={8}
                  required
                  className="w-full rounded-md border border-gray-200 bg-[#f3f4f6] px-4 py-3 pr-12 text-sm outline-none transition focus:border-primary focus:bg-white focus:ring-2 focus:ring-blue-100"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-500 hover:text-primary"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>

              <p className="mt-2 text-xs text-gray-500">
                Use at least 8 characters.
              </p>
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-hover"
            >
              Create your account
              <span aria-hidden="true">→</span>
            </button>
          </form>

          {error && (
            <p className="text-sm text-red-600" role="alert">
              {error}
            </p>
          )}

          <p className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold text-primary hover:underline"
            >
              Sign in
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
};

export default Signup;
