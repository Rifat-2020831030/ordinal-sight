export function CandidatePill({
  name,
  role,
  roleColor,
  offset = false,
  avatar,
}: {
  name: string;
  role: string;
  roleColor: string;
  offset?: boolean;
  avatar?: string;
}) {
  return (
    <div
      className="pill-card flex items-center gap-3"
      style={{
        padding: "10px 16px",
        borderRadius: "36.5px",
        marginLeft: offset ? "40px" : "0",
      }}
    >
      <div
        style={{
          width: "44px",
          height: "44px",
          borderRadius: "50%",
          background: "linear-gradient(132.559deg, #FFED43 5.6%, #F29939 106%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          overflow: "hidden",
        }}
      >
        {avatar ? (
          <img
            src={avatar}
            alt={name}
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
          />
        ) : (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <circle cx="12" cy="9" r="4" fill="white" opacity="0.85" />
            <path
              d="M4 21c0-4.418 3.582-8 8-8s8 3.582 8 8"
              stroke="white"
              strokeWidth="1.5"
              fill="none"
              opacity="0.8"
            />
          </svg>
        )}
      </div>
      <div>
        <p
          className="m-0 font-semibold text-xs"
          style={{ color: roleColor, fontFamily: "Poppins, sans-serif" }}
        >
          {role}
        </p>
        <p
          className="m-0 font-medium text-[17px]"
          style={{ color: "#11142D", fontFamily: "Poppins, sans-serif" }}
        >
          {name}
        </p>
      </div>
    </div>
  );
}
