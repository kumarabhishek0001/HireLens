import {useInterviewHook} from "../hooks/useInterviewHook.js"
import { useNavigate } from "react-router-dom";


import { useRef, useState } from "react";
import {
  ArrowRight,
  UploadCloud,
  LockKeyhole,
  Sparkles,
  Timer,
  FileText,
  X,
} from "lucide-react";

const Analyze = () => {
  const navigate = useNavigate()
  

  const {loading, handleGenerateReport} = useInterviewHook()



  const fileInputRef = useRef(null);

  // state
  const [formData, setFormData] = useState({
    roleTitle: "",
    company: "",
    jobDescription: "",
    narrative: "",
  });

  const [resume, setResume] = useState(null);

  // function to handle change in forms
  const updateField = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // validate Resume
  const validateResume = (file) => {
    if (!file) return false;

    const allowedTypes = [
      "application/pdf",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!allowedTypes.includes(file.type)) {
      alert("Please upload a PDF or DOCX file.");
      return false;
    }

    if (file.size > 15 * 1024 * 1024) {
      alert("File size must be 15 MB or less.");
      return false;
    }

    return true;
  };


  const handleFileChange = (event) => {
    const file = event.target.files?.[0];

    if (validateResume(file)) {
      setResume(file);
    } 
    // Imagine a user selects an invalid file, such as photo.png. 
    // Clearing the input ensures the invalid selection isn't left in the file picker.
    else if (file) {
      event.target.value = "";
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();

    const file = event.dataTransfer.files?.[0];

    if (validateResume(file)) {
      setResume(file);

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const removeResume = () => {
    setResume(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = async(event) => {
    event.preventDefault();

    if (
      !formData.roleTitle.trim() ||
      !formData.company.trim() ||
      !formData.jobDescription.trim() ||
      !formData.narrative.trim() ||
      !resume
    ) {
      alert("Please complete all required fields and upload your resume.");
      return;
    }

    const data = await handleGenerateReport({selfDescription: formData.narrative, jobDescription:formData.jobDescription, title: formData.roleTitle, company: formData.company, resumeFile: resume})
    console.log("fetched data:",data)
    navigate(`/home/reports/${data._id}`);
  };


  if(loading){
    return (
      <main>
        <h1>Loading your interview plans....</h1>
      </main>
    )
  }

  

  const inputClass =
    "w-full rounded-md border border-border bg-[#f3f4f6] px-3 py-2.5 text-sm text-neutral-800 placeholder:text-neutral-500 outline-none transition focus:border-primary focus:ring-2 focus:ring-blue-100";

  const sectionClass =
    "rounded-xl border border-[#e9ecef] bg-white p-5 lg:p-7";

  const labelClass = "mb-2 block text-xs font-medium text-neutral-800";

  return (
    <div className="min-h-full bg-[#f7f8fa] px-5 py-6 md:px-7 lg:px-8">
      <div className="mx-auto w-full max-w-350">
        {/* Page heading */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold tracking-tight text-[#17191c] md:text-3xl">
            Calibrate Target Opportunity
          </h1>

          <p className="mt-2 max-w-3xl text-sm leading-6 text-[#596170]">
            Ingest role specifications, articulate your key achievements, and
            upload your resume to generate high-fidelity interview rubrics,
            technical questions, and gap analysis.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Section 1: Target Job Description */}
          <section className={sectionClass}>
            <div className="mb-7 flex items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-[#e9eaec] text-xs font-medium text-neutral-800">
                  1
                </div>

                <div>
                  <h2 className="text-base font-semibold text-[#202124] md:text-lg">
                    Target Job Description
                  </h2>

                  <p className="mt-0.5 text-xs text-[#596170]">
                    Specify the position benchmark and hiring criteria
                  </p>
                </div>
              </div>

              <span className="shrink-0 rounded-full bg-[#e9edff] px-3 py-1 text-[10px] font-semibold text-primary">
                Required
              </span>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div>
                <label htmlFor="roleTitle" className={labelClass}>
                  Target Role Title
                </label>

                <input
                  id="roleTitle"
                  type="text"
                  maxLength={150}
                  value={formData.roleTitle}
                  onChange={(e) =>
                    updateField("roleTitle", e.target.value)
                  }
                  placeholder="e.g. Staff UX Architect"
                  className={inputClass}
                  required
                />
              </div>

              <div>
                <label htmlFor="company" className={labelClass}>
                  Target Company
                </label>

                <input
                  id="company"
                  type="text"
                  maxLength={150}
                  value={formData.company}
                  onChange={(e) =>
                    updateField("company", e.target.value)
                  }
                  placeholder="e.g. Stripe, Figma, Apple"
                  className={inputClass}
                  required
                />
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="jobDescription" className={labelClass}>
                Job Description Specifications
              </label>

              <textarea
                id="jobDescription"
                rows={5}
                maxLength={5000}
                value={formData.jobDescription}
                onChange={(e) =>
                  updateField("jobDescription", e.target.value)
                }
                placeholder="Paste responsibilities, key qualifications, core technical requirements, leadership metrics, and tech stack qualifications..."
                className={`${inputClass} min-h-35 resize-y leading-6`}
                required
              />

              <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
                <p className="text-[11px] text-[#596170]">
                  Tip: Include full tech stack and compensation bands for
                  calibrated salary leverage analysis.
                </p>

                <p className="shrink-0 text-[11px] font-medium text-neutral-700">
                  {formData.jobDescription.length.toLocaleString()} / 5,000
                  chars
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: Candidate Profile */}
          <section className={sectionClass}>
            <div className="mb-7 flex items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-[#e9eaec] text-xs font-medium text-neutral-800">
                  2
                </div>

                <div>
                  <h2 className="text-base font-semibold text-[#202124] md:text-lg">
                    Candidate Profile &amp; Superpower
                  </h2>

                  <p className="mt-0.5 text-xs text-[#596170]">
                    Clarify what makes your leadership and individual craft
                    stand out
                  </p>
                </div>
              </div>

              <span className="shrink-0 rounded-full bg-[#e9edff] px-3 py-1 text-[10px] font-semibold text-primary">
                Required
              </span>
            </div>

            <label htmlFor="narrative" className={labelClass}>
              Your Narrative &amp; Core Strengths
            </label>

            <textarea
              id="narrative"
              rows={4}
              maxLength={2000}
              value={formData.narrative}
              onChange={(e) => updateField("narrative", e.target.value)}
              placeholder="Describe your strongest skills, notable achievements, leadership experience, measurable impact, and what differentiates your work..."
              className={`${inputClass} min-h-32.5 resize-y leading-6`}
              required
            />

            <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
              <p className="flex items-center gap-2 text-[11px] text-[#596170]">
                <LockKeyhole size={13} className="shrink-0 text-primary" />
                Encrypted &amp; exclusively utilized for your private interview
                simulation.
              </p>

              <p className="shrink-0 text-[11px] font-medium text-neutral-700">
                {formData.narrative.length.toLocaleString()} / 2,000 chars
              </p>
            </div>
          </section>

          {/* Section 3: Master Resume */}
          <section className={sectionClass}>
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-[#e9eaec] text-xs font-medium text-neutral-800">
                  3
                </div>

                <div>
                  <h2 className="text-base font-semibold text-[#202124] md:text-lg">
                    Master Resume
                  </h2>

                  <p className="mt-0.5 text-xs text-[#596170]">
                    Provide candidate source material for deep timeline
                    verification
                  </p>
                </div>
              </div>

              <span className="shrink-0 rounded-full bg-[#e9edff] px-3 py-1 text-[10px] font-semibold text-primary">
                Required
              </span>
            </div>

            <div className="my-6 border-t border-[#e5e7eb]" />

            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf,.docx,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
              onChange={handleFileChange}
              className="hidden"
            />

            <div
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleDrop}
              onClick={() => {
                if (!resume) fileInputRef.current?.click();
              }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (
                  !resume &&
                  (e.key === "Enter" || e.key === " ")
                ) {
                  e.preventDefault();
                  fileInputRef.current?.click();
                }
              }}
              className={`flex min-h-45 flex-col items-center justify-center rounded-lg border border-dashed px-4 py-7 text-center transition ${
                resume
                  ? "border-blue-300 bg-blue-50/50"
                  : "cursor-pointer border-[#e5e7eb] bg-[#f3f4f6] hover:border-blue-300 hover:bg-blue-50/30"
              }`}
            >
              {resume ? (
                <>
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-primary shadow-sm">
                    <FileText size={23} />
                  </div>

                  <p className="max-w-full break-all text-sm font-semibold text-neutral-800">
                    {resume.name}
                  </p>

                  <p className="mt-1 text-xs text-neutral-500">
                    {(resume.size / (1024 * 1024)).toFixed(2)} MB
                  </p>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeResume();
                    }}
                    className="mt-3 flex items-center gap-1 text-xs font-medium text-red-600 hover:text-red-700"
                  >
                    <X size={13} />
                    Remove resume
                  </button>
                </>
              ) : (
                <>
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-primary shadow-sm">
                    <UploadCloud size={25} />
                  </div>

                  <p className="text-sm font-semibold text-neutral-800">
                    Drop your resume here, or{" "}
                    <span className="text-primary">browse local files</span>
                  </p>

                  <p className="mt-2 text-xs text-[#596170]">
                    Strictly confidential. Parsed client-side and saved to
                    your protected enclave.
                  </p>

                  <div className="mt-4 flex flex-wrap justify-center gap-2">
                    <span className="rounded-full bg-[#e9eaec] px-3 py-1 text-[10px] text-neutral-700">
                      PDF, DOCX up to 15MB
                    </span>

                    <span className="rounded-full bg-[#e9eaec] px-3 py-1 text-[10px] text-neutral-700">
                      ATS Standard Parser v4
                    </span>
                  </div>
                </>
              )}
            </div>
          </section>

          {/* Calibration information */}
          <div className="flex flex-col justify-between gap-4 rounded-xl border border-[#edf0f3] bg-[#f0f1f3] p-4 sm:flex-row sm:items-center sm:px-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary text-white">
                <Sparkles size={20} />
              </div>

              <div>
                <p className="text-xs font-semibold text-neutral-800">
                  Ready to generate 3 customized artifacts
                </p>

                <p className="mt-1 text-[11px] leading-4 text-[#596170]">
                  Overview &amp; Match Scoring, Technical &amp; System Rubrics,
                  Behavioral STAR Matrix
                </p>
              </div>
            </div>

            <div className="flex shrink-0 items-center gap-2 sm:pl-3">
              <Timer size={18} className="text-primary" />

              <p className="text-xs font-medium text-neutral-800">
                Estimated wait: ~45 seconds
              </p>
            </div>
          </div>

          {/* Bottom action bar */}
          <div className="sticky bottom-0 z-10 flex flex-col gap-4 rounded-xl border border-[#edf0f3] bg-white p-4 shadow-lg sm:flex-row sm:items-center sm:justify-between md:px-5">
            <div className="flex items-center gap-3">
              <button
                type="button"
                
                className="rounded-md bg-[#f0f1f3] px-4 py-3 text-xs font-medium text-neutral-800 transition hover:bg-[#e5e7eb]"
              >
                Save Draft &amp; Exit
              </button>

              <button
                type="button"
                onClick={() => {
                  setFormData({
                    roleTitle: "",
                    company: "",
                    jobDescription: "",
                    narrative: "",
                  });
                  removeResume();
                }}
                className="px-2 py-3 text-xs text-[#596170] hover:text-neutral-900"
              >
                Cancel
              </button>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
              <div className="text-left sm:text-right">
                <p className="text-[11px] font-semibold text-neutral-800">
                  Calibration Mode: Advanced
                </p>

                <p className="mt-0.5 text-[11px] text-[#596170]">
                  3 rubrics configured
                </p>
              </div>

              <button
                type="submit"
                className="flex items-center justify-center gap-2 whitespace-nowrap rounded-md bg-primary px-5 py-3 text-xs font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2"
              >
                Run hireLens Calibration
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Analyze;
