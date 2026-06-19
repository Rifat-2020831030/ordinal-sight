import React from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

/* ─── Shared SVGs / Icons ─── */
const CheckIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <circle cx="8" cy="8" r="8" fill="url(#chk)" />
    <path
      d="M4.5 8.5L7 11L11.5 6"
      stroke="white"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id="chk"
        x1="0"
        y1="0"
        x2="16"
        y2="16"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#52B4DA" />
        <stop offset="1" stopColor="#1E3E85" />
      </linearGradient>
    </defs>
  </svg>
);



const PlayIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M7 5L17 11L7 17V5Z" fill="white" />
  </svg>
);

/* ─── Feature 1: Global Reach ─── */
const GlobalReachCard = () => (
  <div className="relative flex-shrink-0 w-full max-w-[451px] mx-auto lg:mx-0">
    {/* Main white card */}
    <div
      className="feature-card relative"
      style={{
        borderRadius: "34px",
        padding: "28px",
        minHeight: "451px",
        display: "flex",
        flexDirection: "column",
        overflow: "visible",
      }}
    >
      {/* Profile image top */}
      <div
        className="rounded-2xl overflow-hidden mb-6"
        style={{ height: '176px' }}
      >
        <img src="/assets/cta-find-work.png" alt="Let's Find Work" className="w-full h-full object-cover object-left-top" />
      </div>

      {/* Candidate pill cards */}
      <div className="flex flex-col gap-4" style={{ flex: "1 1 auto" }}>
        <CandidatePill
          name="Felonious Gru"
          role="Python Developer"
          roleColor="#1E3E85"
          avatar="/assets/guru.png"
        />
        <CandidatePill
          name="Mel Muselphiem"
          role="Front End Wizard"
          roleColor="#52B4DA"
          avatar="/assets/guru.png"
          offset
        />
      </div>

      {/* Floating RR icon badge — positioned right-center of card */}
      <div
        className="absolute float-animation"
        style={{
          top: "100px",
          right: "-46px",
          width: "91px",
          height: "91px",
          borderRadius: "45.5px",
          background: "linear-gradient(132.559deg, #52B4DA 5.6%, #1E3E85 106%)",
          boxShadow: "14px 41px 50px 0px rgba(49,89,211,0.07)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 10,
        }}
        aria-hidden="true"
      >
        <img src="/assets/footer-rr-icon.svg" className="w-10 h-8" alt="RR Icon" />
      </div>
    </div>

    {/* Decorative dot */}
    <div
      className="absolute"
      style={{
        top: "-11px",
        left: "-35px",
        width: "22px",
        height: "22px",
        borderRadius: "50%",
        background: "linear-gradient(135deg, #52B4DA, #1E3E85)",
        zIndex: 10,
      }}
      aria-hidden="true"
    />
  </div>
);

/* ─── Feature 2: Fee-Free Card (membership tier) ─── */
const FeeFreeCard = () => (
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

/* ─── Feature 3: Custom Profile Card ─── */
const CustomProfileCard = () => {
  const tags = [
    "Python Dev",
    "Javascript",
    "Front End",
    "Back End",
    "iOS Development",
    "+12",
  ];
  return (
    <div className="relative flex-shrink-0 w-full max-w-[451px] mx-auto lg:mx-0">
      <div
        className="feature-card"
        style={{
          borderRadius: "34px",
          padding: "24px",
          minHeight: "480px",
          position: "relative",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Decorative dot */}
        <div
          style={{
            position: "absolute",
            top: "-11px",
            left: "-35px",
            width: "22px",
            height: "22px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #52B4DA, #1E3E85)",
          }}
          aria-hidden="true"
        />

        {/* Profile image with video overlay */}
        <div
          className="rounded-2xl overflow-hidden mb-4"
          style={{ height: '176px', position: 'relative' }}
        >
          <img src="/assets/093143066a0755f54b00b4e3297b09f3b9e4136a.png" alt="Profile Mockup" className="w-full h-full object-cover" />
          {/* Video play button overlay */}
          <div
            className="absolute"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "57px",
              height: "57px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #5799eb 0%, #9F74FB 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 20px rgba(87,153,235,0.4)",
              cursor: "pointer",
              zIndex: 10,
            }}
            aria-label="Play intro video"
            role="button"
          >
            <PlayIcon />
          </div>
        </div>

        {/* Skill tags */}
        <div className="flex flex-wrap gap-2 mb-5" style={{ flex: "0 0 auto" }}>
          {tags.map((tag, i) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-lg text-xs font-medium px-3 py-2"
              style={{
                background:
                  "linear-gradient(159.45787898572019deg, rgba(87,153,235,0.1) 5.6274%, rgba(159,116,251,0.1) 106.18%)",
                fontFamily: "Poppins, sans-serif",
                fontWeight: 500,
                fontSize: "12px",
                lineHeight: "21px",
              }}
            >
              <span style={{
                background: "linear-gradient(168.929deg, #336DA6 6.8672%, #1E3E85 106.04%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                {tag}
              </span>
            </span>
          ))}
        </div>

        {/* Feedback pill - pushed to bottom */}
        <div
          className="pill-card flex items-center gap-3"
          style={{
            padding: "10px 16px",
            borderRadius: "36.5px",
            marginTop: "auto",
            flex: "0 0 auto",
          }}
        >
          <div
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              background:
                "linear-gradient(132.559deg, #FFED43 5.6%, #F29939 106%)",
              flexShrink: 0,
              overflow: "hidden",
            }}
          >
            <img
              src="/assets/guru.png"
              alt="Past Client"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
            />
          </div>
          <div>
            <p
              className="m-0 font-semibold text-xs whitespace-nowrap"
              style={{
                color: "#1E3E85",
                fontFamily: "Poppins, sans-serif",
                lineHeight: "21px",
              }}
            >
              Past Client Feedback
            </p>
            <p
              className="m-0 font-medium text-[17px]"
              style={{
                color: "#11142D",
                fontFamily: "Poppins, sans-serif",
                lineHeight: "24px",
              }}
            >
              Best Developer Ever!
            </p>
          </div>
        </div>
      </div>

      {/* Floating Gru avatar badge — right side of card */}
      <div
        className="absolute float-animation"
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
          overflow: "hidden",
          zIndex: 10,
        }}
        aria-hidden="true"
      >
        <img
          src="/assets/guru.png"
          alt="Gru"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center top",
            borderRadius: "45.5px",
          }}
        />
      </div>
    </div>
  );
};

/* ─── Candidate Pill sub-component ─── */
function CandidatePill({
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

/* ─── Feature data config ─── */
interface FeatureData {
  id: string;
  badge: string;
  title: string;
  description: string;
  reverse: boolean;
  card: React.ReactNode;
}

const features: FeatureData[] = [
  {
    id: "feature-global-reach",
    badge: "Global Reach",
    title: "The First Fully Global Job Board, Anywhere, Ever",
    description:
      "RemoteRecruit connects candidates with opportunities around the world. With today's remote-first workforce, you need to be able to find the best jobs and the best people for them, wherever they may be.",
    reverse: false,
    card: <GlobalReachCard />,
  },
  {
    id: "feature-fee-free",
    badge: "Actually Fee Free",
    title: "Fee-Free Forever",
    description:
      "We don't charge you fees and we don't put up paywalls. We're the bridge that connects job opportunities with the best candidates, with no middleman involved.",
    reverse: true,
    card: <FeeFreeCard />,
  },
  {
    id: "feature-custom-profile",
    badge: "Custom Profile",
    title: "Showcase Your Talents",
    description:
      "Personalize your profile with everything that makes you unique. Add an introductory video and other media for a personal touch that stands out to employers and candidates.",
    reverse: false,
    card: <CustomProfileCard />,
  },
];

/* ─── Single Feature Row ─── */
function FeatureRow({ feature }: { feature: FeatureData }) {
  const { ref: textRef, isVisible: textVisible } = useIntersectionObserver({
    threshold: 0.15,
  });
  const { ref: cardRef, isVisible: cardVisible } = useIntersectionObserver({
    threshold: 0.15,
  });

  return (
    <div
      id={feature.id}
      className={`flex flex-col ${
        feature.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      } items-center justify-between gap-12 lg:gap-16`}
    >
      {/* Text side */}
      <div
        ref={textRef as React.RefObject<HTMLDivElement>}
        className={`${feature.reverse ? "fade-in-right" : "fade-in-left"}${
          textVisible ? " visible" : ""
        } flex-1 max-w-[500px] w-full`}
      >
        <span className="feature-badge mb-5 inline-block">{feature.badge}</span>
        <h3
          className="m-0 mb-5"
          style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 500,
            fontSize: "clamp(26px, 3vw, 40px)",
            lineHeight: "1.3",
            color: "#11142D",
          }}
        >
          {feature.title}
        </h3>
        <p
          className="m-0"
          style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 400,
            fontSize: "clamp(15px, 1.5vw, 19px)",
            lineHeight: "35px",
            color: "rgba(17,20,45,0.64)",
          }}
        >
          {feature.description}
        </p>
      </div>

      {/* Card side */}
      <div
        ref={cardRef as React.RefObject<HTMLDivElement>}
        className={`${feature.reverse ? "fade-in-left" : "fade-in-right"}${
          cardVisible ? " visible" : ""
        } flex-shrink-0 w-full lg:w-auto flex justify-center`}
        style={{ maxWidth: "480px" }}
      >
        {feature.card}
      </div>
    </div>
  );
}

/* ─── Main export ─── */
export default function FeatureSections() {
  return (
    <section className="w-full bg-white py-16 lg:py-24" aria-label="Features">
      <div className="mx-auto px-6 lg:px-[186px] flex flex-col gap-20 lg:gap-32">
        {features.map((f) => (
          <FeatureRow key={f.id} feature={f} />
        ))}
      </div>
    </section>
  );
}
