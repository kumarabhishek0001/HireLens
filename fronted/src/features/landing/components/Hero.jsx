import { MoveRight } from "lucide-react";
import ResumeAnalysisDashboard from "./ResumeAnalysisDashboard";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#f7f8f9] min-h-screen mt-20 flex flex-col items-center">
      <h1 className="text-6xl text-center font-semibold">
        See Your Resume Through the <br />{" "}
        <span className="text-primary">Hiring Team's</span> Eyes
      </h1>

      <p className="text-sm text-center mt-5 text-[#66696e]">
        Stop guessing what recruiters see. Analyze your target role, instantly
        uncover competency <br /> gaps, and master customized technical and
        behavioral inquiries.
      </p>

      <button 
      onClick={() => {
            navigate("/login");
          }}
      className="w-fit mt-8 mb-18 bg-primary text-white text-lg px-7 py-2 rounded flex gap-2">
        <div>Analyze Now</div>
        <div className="translate-y-0.5">
          <MoveRight />
        </div>
      </button>

      <ResumeAnalysisDashboard/>

      <div className="mt-10"></div>
    </div>
  );
};

export default Hero;
