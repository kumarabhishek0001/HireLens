import { SlidersVerticalIcon, MoveRightIcon } from "lucide-react";

const guidedSteps = [
    {
      id: 1,
      heading: "Role JD",
      description: "Target position specification",
    },
    {
      id: 2,
      heading: "Profile",
      description: "Experience & competency fit",
    },
    {
      id: 3,
      heading: "Output",
      description: "AI match score & question prep",
    },
  ];

const GuidedScan = () => {
  return (
    <div>
      <h2 className="px-1 mt-7 text-lg font-bold">Analyze New Opportunity</h2>
      <p className="px-1 text-tertiary text-sm">
        Ingest job requirements or compare resume drafts with algorithmic
        precision.
      </p>

      <div className="bg-white p-4 mt-3 rounded-md border border-border shadow-sm">
        <div className="flex items-center gap-3">
          <div className="bg-primary p-2 rounded">
            <SlidersVerticalIcon color="#ffffff" />
          </div>
          <div>
            <h2 className="text-lg font-bold">Guided 3-Step Scan</h2>
            <p className="text-sm text-tertiary">
              Calibrate specific job criteria, evaluate self-reported nuances,
              and stress-test your master resume against algorithmic hiring
              bars.
            </p>
          </div>
        </div>

        {/* step */}
        <div className="mt-6 flex justify-between gap-3  border-border">
          {guidedSteps.map((steps) => (
            <div className="flex-1 p-2 bg-[#f9fbfd] border rounded-md border-border flex gap-2">
              <div className="translate-y-0.5 bg-[#dbeafe] rounded-2xl flex justify-center items-center w-fit h-fit px-4 py-2">
                <p className="text-primary">{steps.id}</p>
              </div>

              <div>
                <h2 className="font-bold">{steps.heading}</h2>
                <p className="text-tertiary text-xs">{steps.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* call-for-action */}
        <div className="mt-5 pt-5 border-t border-border flex items-center justify-between">
          <div>
            <p className="text-tertiary text-sm">
              Ready to calibrate your master profile against your next targeted
              job opening?
            </p>
          </div>

          <div>
            <button className="flex gap-3 bg-primary text-white px-5 py-3 rounded-md">
              Start 3-Step Analysis <MoveRightIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuidedScan;
