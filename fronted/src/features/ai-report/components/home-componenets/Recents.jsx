import { ArrowRightIcon, MoveRightIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

const interviewReports = [
  {
    _id: "6ad1ef46838164bf131aeebd",
    title: "Frontend Engineer",
    company: "Xylixn",
    matchScore: 82,
    skillGaps: [
      {
        skill: "Terraform / Infrastructure as Code",
        severity: "medium",
        _id: "6ad1ef46838164bf131aeebe",
      },
      {
        skill: "Monitoring Tools (Prometheus and Grafana)",
        severity: "medium",
        _id: "6ad1ef46838164bf131aeebf",
      },
      {
        skill: "Message Brokers (Kafka or RabbitMQ)",
        severity: "low",
        _id: "6ad1ef46838164bf131aeec0",
      },
    ],
    user: "6ad090eb5d12b41c936feb4a",
    createdAt: "2026-10-16T09:32:54.761Z",
    updatedAt: "2026-10-16T09:32:54.761Z",
  },
  {
    _id: "6ad1eee9838164bf131aeeb3",
    title: "Machine Learning Platform Engineer",
    company: "Canva",
    matchScore: 82,
    skillGaps: [
      {
        skill: "Terraform / Infrastructure as Code",
        severity: "medium",
        _id: "6ad1eee9838164bf131aeeb4",
      },
      {
        skill: "Kafka or RabbitMQ message brokers",
        severity: "medium",
        _id: "6ad1eee9838164bf131aeeb5",
      },
      {
        skill: "PyTorch or TensorFlow model training specifics",
        severity: "low",
        _id: "6ad1eee9838164bf131aeeb6",
      },
      {
        skill: "Prometheus and Grafana monitoring tools",
        severity: "medium",
        _id: "6ad1eee9838164bf131aeeb7",
      },
    ],
    user: "6ad090eb5d12b41c936feb4a",
    createdAt: "2026-10-16T09:31:21.145Z",
    updatedAt: "2026-10-16T09:31:21.145Z",
  },
  {
    _id: "6ad1edaa838164bf131aeeaa",
    title: "Machine Learning Platform Engineer",
    company: "Figma",
    matchScore: 82,
    skillGaps: [
      {
        skill: "Terraform",
        severity: "medium",
        _id: "6ad1edaa838164bf131aeeab",
      },
      {
        skill: "Kafka / RabbitMQ",
        severity: "medium",
        _id: "6ad1edaa838164bf131aeeac",
      },
      {
        skill: "Prometheus and Grafana",
        severity: "low",
        _id: "6ad1edaa838164bf131aeead",
      },
    ],
    user: "6ad090eb5d12b41c936feb4a",
    createdAt: "2026-10-16T09:26:02.139Z",
    updatedAt: "2026-10-16T09:26:02.139Z",
  },
];

const Recents = () => {

    const handleClick = (report) => {
        console.log(report._id)
        console.log(report.title)
    }

  const navigate = useNavigate();

  const getTimeAgo = (createdAt) => {
    const now = Date.now();
    const created = new Date(createdAt).getTime();

    const diffInSeconds = Math.floor((now - created) / 1000);

    if (diffInSeconds < 60) {
      return `${diffInSeconds} ${diffInSeconds === 1 ? "second" : "seconds"} ago`;
    }

    const diffInMinutes = Math.floor(diffInSeconds / 60);

    if (diffInMinutes < 60) {
      return `${diffInMinutes} ${diffInMinutes === 1 ? "minute" : "minutes"} ago`;
    }

    const diffInHours = Math.floor(diffInMinutes / 60);

    if (diffInHours < 24) {
      return `${diffInHours} ${diffInHours === 1 ? "hour" : "hours"} ago`;
    }

    const diffInDays = Math.floor(diffInHours / 24);

    return `${diffInDays} ${diffInDays === 1 ? "day" : "days"} ago`;
  };

  return (
    <div className="mt-10">
      <div className="flex justify-between items-center mb-3">
        <p className="font-bold">Recent Targets</p>
        <button
          onClick={() => {
            navigate("/home/recents");
          }}
          className="cursor-pointer text-tertiary text-xs flex items-center"
        >
          View All Archive <ArrowRightIcon size={12} />
        </button>
      </div>

      <div className="bg-white border border-border rounded-lg shadow-sm px-6 py-2">
        {interviewReports.map((report, index) => (
          <div
            key={report._id}
            className={`flex justify-between items-center py-4 ${
              index !== interviewReports.length - 1
                ? "border-b border-border"
                : ""
            }`}
          >
            <div className="flex items-center gap-5 min-w-0">
              <div className="flex items-center justify-center shrink-0 text-primary bg-[#f1f5f9] w-12 h-12 border border-border rounded-md text-md">
                {report.title[0]}
              </div>

              <div className="min-w-0">
                <h2 className="font-bold text-md leading-6">{report.title}</h2>
                <p className="text-sm text-tertiary mt-1">{report.company}</p>
              </div>
            </div>

            <div className="flex items-center gap-6 shrink-0 ml-4">
              <div className="text-center w-42">
                <p className="text-xs leading-6 text-primary font-semibold bg-[#eff6ff] border border-[#dbeafe] rounded-2xl">
                  {report.matchScore}% Match
                </p>

                <p className="text-xs text-neutral-400 mt-1 whitespace-nowrap">
                  Analyzed {getTimeAgo(report.createdAt)}
                </p>
              </div>

              <button
               onClick={() => handleClick(report)}
               className="cursor-pointer">
                <MoveRightIcon size={18} className="text-[#6a7282] shrink-0" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recents;
