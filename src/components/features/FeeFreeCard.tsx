import { CheckIcon } from "./SharedIcons";

export const FeeFreeCard = () => (
  <div className="relative flex-shrink-0 w-full max-w-[451px] mx-auto lg:mx-0">
    {/* Main white card */}
    <div
      className="feature-card"
      style={{
        borderRadius: "34px",
        padding: "24px 28px",
        minHeight: "480px",
        position: "relative",
        overflow: "visible",
      }}
    >
      {/* Decorative dot */}
      <div
        style={{
          position: "absolute",
          top: "-11px",
          left: "-11px",
          width: "22px",
          height: "22px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #52B4DA, #1E3E85)",
        }}
        aria-hidden="true"
      />

      {/* Tier header */}
      <div className="mb-6">
        <p
          className="m-0 text-xs font-semibold tracking-widest uppercase"
          style={{
            color: "#808191",
            fontFamily: "Poppins, sans-serif",
            marginBottom: "8px",
          }}
        >
          Your Membership Tier
        </p>
        <p
          className="m-0 font-semibold text-[28px]"
          style={{
            fontFamily: "Poppins, sans-serif",
            background: "linear-gradient(175deg, #52B4DA 5.6%, #1E3E85 106%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            letterSpacing: "1.1111px",
            lineHeight: "24px",
          }}
        >
          Premium
        </p>
      </div>

      {/* Divider label */}
      <p
        className="m-0 text-[10px] font-bold uppercase tracking-[1px] mb-4"
        style={{
          color: "rgba(17,20,45,0.51)",
          fontFamily: "Poppins, sans-serif",
        }}
      >
        Features
      </p>

      {/* Feature list */}
      <div className="flex flex-col gap-[8px] mb-6">
        {[
          "Up to 25 active job posts",
          "Premium Placement & Visibility",
          "Messaging anyone, unlimited",
          "Unlimited invites",
          "View all applicants",
          "Unlimited invites to jobseekers",
        ].map((item) => (
          <div
            key={item}
            className="flex items-center gap-3"
            style={{ height: "36px" }}
          >
            <CheckIcon />
            <span
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 500,
                fontSize: "14px",
                color: "rgba(50,52,69,0.9)",
                lineHeight: "24px",
              }}
            >
              {item}
            </span>
          </div>
        ))}
      </div>

      {/* Payment pill */}
      <div
        className="pill-card flex items-center gap-3"
        style={{
          padding: "10px 16px",
          borderRadius: "36.5px",
          marginTop: "auto",
        }}
      >
        <div
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "40px",
            background:
              "linear-gradient(135deg, rgba(235,237,255,0.48) 0%, rgba(173,184,255,0.48) 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <img src="/assets/b3731ec08afa7e683ba36b7bf8de0e2c26a67121.svg" alt="PayPal" className="w-[24px] h-[28px]" />
        </div>
        <div>
          <p
            className="m-0 font-semibold text-xs whitespace-nowrap"
            style={{ color: "#1E3E85", fontFamily: "Poppins, sans-serif" }}
          >
            Upcoming Payment In…
          </p>
          <p
            className="m-0 font-medium text-[17px]"
            style={{
              color: "#11142D",
              fontFamily: "Poppins, sans-serif",
              lineHeight: "24px",
            }}
          >
            14 Days - $79.99
          </p>
        </div>
      </div>
    </div>

    {/* Floating RR icon badge */}
    <div
      className="absolute float-animation-delayed"
      style={{
        top: "120px",
        right: "-46px",
        width: "91px",
        height: "91px",
        borderRadius: "45.5px",
        background: "linear-gradient(132.559deg, #52B4DA 5.6%, #1E3E85 106%)",
        boxShadow: "14px 41px 50px 0px rgba(49,89,211,0.07)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      aria-hidden="true"
    >
      <img src="/assets/footer-rr-icon.svg" className="w-10 h-8" alt="RR Icon" />
    </div>
  </div>
);
