import React from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

import { GlobalReachCard } from "./features/GlobalReachCard";
import { FeeFreeCard } from "./features/FeeFreeCard";
import { CustomProfileCard } from "./features/CustomProfileCard";

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
