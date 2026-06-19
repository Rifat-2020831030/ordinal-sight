import React from "react";

export const CheckIcon = () => (
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

export const PlayIcon = () => (
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
