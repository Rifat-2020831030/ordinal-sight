import React from "react";
import { CandidatePill } from "./CandidatePill";

export const GlobalReachCard = () => (
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
