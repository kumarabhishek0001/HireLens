const HireLensIcon = ({ size = 34, className = "" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 54 54"
      fill="none"
      className={className}
      aria-label="HireLens"
      role="img"
    >
      <rect width="54" height="54" rx="12" fill="#204BE8" />

      <text
        x="27"
        y="38"
        textAnchor="middle"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="27"
        fontWeight="700"
        fill="#FFFFFF"
      >
        h
      </text>
    </svg>
  );
};

export default HireLensIcon;