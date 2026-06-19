import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function SignUpCTA() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.15 });

  return (
    <section
      id="cta"
      className="relative w-full overflow-hidden"
      style={{ minHeight: '610px', background: '#ffffff' }}
      aria-label="Sign up call to action"
    >
      {/* 10% Opacity Gradient Background Layer */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(155.235deg, rgb(87, 153, 235) 5.6274%, rgb(159, 116, 251) 106.18%)',
          opacity: 0.1,
          zIndex: 1,
        }}
        aria-hidden="true"
      />

      {/* Centered 1440px background element container */}
      <div
        className="absolute left-1/2 top-0 w-full h-[610px] -translate-x-1/2 pointer-events-none overflow-hidden"
        style={{ zIndex: 2 }}
      >
        {/* Decorative ellipses (Exact Figma coordinates & assets) */}
        {/* Ellipse 13 (White, opacity 0.3) */}
        <img
          src="/assets/cta-ellipse-13.svg"
          className="absolute left-[-85px] top-[-92px] w-[321px] h-[321px] max-w-none"
          alt=""
        />
        {/* Ellipse 10 (White, opacity 0.3) */}
        <img
          src="/assets/cta-ellipse-10.svg"
          className="absolute left-[1168px] top-[-138px] w-[380px] h-[380px] max-w-none"
          alt=""
        />
        {/* Ellipse 12 (White, opacity 0.3) */}
        <img
          src="/assets/cta-ellipse-12.svg"
          className="absolute left-[297px] top-[299px] w-[493px] h-[493px] max-w-none"
          alt=""
        />
        {/* Ellipse 51 (White, opacity 0.3) */}
        <img
          src="/assets/cta-ellipse-51.svg"
          className="absolute left-[163px] top-[557px] w-[87px] h-[87px] max-w-none"
          alt=""
        />
        {/* Ellipse 49 (Yellow gradient) */}
        <img
          src="/assets/cta-ellipse-49.svg"
          className="absolute left-[263px] top-[31px] w-[53px] h-[53px] max-w-none"
          alt=""
        />
        {/* Ellipse 52 (Yellow gradient) */}
        <img
          src="/assets/cta-ellipse-52.svg"
          className="absolute left-[1120px] top-[532px] w-[29px] h-[29px] max-w-none"
          alt=""
        />

        {/* Left Mockup Card (UI Search window) - Visible on large screens */}
        <div className="hidden lg:block absolute left-[-228px] top-[101px] w-[917px] h-[589px]">
          {/* Outer white card with shadow */}
          <div
            className="w-full h-full bg-white relative"
            style={{
              borderRadius: '40.112px',
              boxShadow: '15.178px 44.449px 108.411px 0px rgba(49, 89, 211, 0.12)',
            }}
          >
            {/* Inner purple card */}
            <div
              className="absolute left-[18px] top-[13px] w-[886px] h-[560px] overflow-hidden"
              style={{
                borderRadius: '30.355px',
                backgroundColor: '#8e80fc',
              }}
            >
              {/* Find Work candidate search graphics */}
              <img
                src="/assets/cta-find-work.png"
                className="absolute left-[204.85px] top-[-1px] w-[681.654px] h-[772.835px] max-w-none"
                alt="Find work candidate interface"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Content wrapper */}
      <div className="relative z-10 mx-auto px-6 lg:px-[200px] min-h-[610px] flex items-center justify-center lg:justify-end">
        {/* Right Text Block */}
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`fade-in-up${isVisible ? ' visible' : ''} max-w-[390px] w-full py-16 lg:py-0 flex flex-col items-start`}
        >
          {/* Tag */}
          <p
            className="m-0 font-semibold tracking-[1px] uppercase text-[#1e3e85] text-[16px] mb-3"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Are you ready?
          </p>

          {/* Heading */}
          <h2
            className="m-0 text-[#11142d] font-bold text-[44px] leading-[57px] mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Help is only a few clicks away!
          </h2>

          {/* Paragraph */}
          <p
            className="m-0 text-[#767784] text-[18px] leading-[33px] mb-8 pr-6"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Click Below to get set up super quickly and find help now!
          </p>

          {/* Custom Get Started CTA Button */}
          <a
            href="#signup"
            id="cta-get-started"
            className="relative block hover:scale-[1.03] active:scale-[0.98] transition-transform duration-200"
            style={{ width: '180px', height: '61px' }}
          >
            {/* Custom arrow button background */}
            <img
              src="/assets/cta-btn-bg.svg"
              className="absolute inset-0 w-full h-full object-contain"
              alt=""
            />
            {/* Button text offset to the right */}
            <span
              className="absolute font-semibold text-[16px] text-[#1e3e85] whitespace-nowrap"
              style={{
                fontFamily: 'Poppins, sans-serif',
                left: '70px',
                top: '50%',
                transform: 'translateY(-50%)',
              }}
            >
              Get Started
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
