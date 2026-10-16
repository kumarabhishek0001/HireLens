

const Heading = ({user}) => {
  return (
    <div>
      <h1 className="text-5xl font-semibold mb-1">
        Welcome back, {user.username}
      </h1>
      <p className="px-1 text-tertiary">
        {" "}
        Monitor your targeted interview tracks, review customized competency
        analyses, and systematically <br /> calibrate your readiness against
        role requirements across top-tier engineering organizations.{" "}
      </p>
    </div>
  );
};

export default Heading;
