import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const CheckIcon = ({ gradient = false }: { gradient?: boolean }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ flexShrink: 0 }}>
    <circle cx="10" cy="10" r="10" fill={gradient ? 'url(#chkGrad)' : 'url(#chkGradPremium)'}/>
    <path d="M6 10.5L9 13.5L14 8" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <defs>
      <linearGradient id="chkGrad" x1="0" y1="0" x2="20" y2="20" gradientUnits="userSpaceOnUse">
        <stop stopColor="#52B4DA"/>
        <stop offset="1" stopColor="#1E3E85"/>
      </linearGradient>
      <linearGradient id="chkGradPremium" x1="0" y1="0" x2="20" y2="20" gradientUnits="userSpaceOnUse">
        <stop stopColor="#5799EB"/>
        <stop offset="1" stopColor="#9F74FB"/>
      </linearGradient>
    </defs>
  </svg>
);

const XIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ flexShrink: 0 }}>
    <circle cx="10" cy="10" r="10" fill="#8ba3cc"/>
    <path d="M7 7L13 13M13 7L7 13" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const LightningIcon = () => (
  <svg width="18" height="28" viewBox="0 0 18 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M10.5 1L1.5 16H9L7.5 27L16.5 12H9L10.5 1Z" fill="white" stroke="white" strokeWidth="0.5" strokeLinejoin="round"/>
  </svg>
);

interface PricingCardProps {
  plan: 'free' | 'premium';
}

function PricingCard({ plan }: PricingCardProps) {
  const isFree = plan === 'free';

  const freeFeatures = [
    { text: '1 Active Job', enabled: true },
    { text: 'Basic List Placement', enabled: true },
    { text: 'Unlimited Job Applicants', enabled: false },
    { text: 'Invite Anyone to Apply to Your Jobs', enabled: false },
  ];

  const premiumFeatures = [
    { text: '25 Active Jobs', enabled: true },
    { text: 'Instant Job Post Approval', enabled: true },
    { text: 'Premium List Placement', enabled: true },
    { text: 'Unlimited Job Applications', enabled: true },
  ];

  return (
    <div
      className="relative flex flex-col rounded-[28px] overflow-hidden transition-transform duration-300 hover:-translate-y-2"
      style={{
        width: '100%',
        maxWidth: '500px',
        minHeight: '343px',
        boxShadow: '-15px 50px 150px 0px rgba(49,89,211,0.12)',
        border: `1px solid ${isFree ? '#F6F4FF' : 'rgba(87,153,235,0.15)'}`,
        background: '#ffffff',
      }}
    >
      {/* Premium badge */}
      {!isFree && (
        <div
          className="absolute top-0 left-8"
          style={{
            background: 'linear-gradient(132.559deg, #52B4DA 5.6%, #1E3E85 106%)',
            borderRadius: '0 0 12px 12px',
            padding: '10px 20px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
          aria-label="Premium plan"
        >
          <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <LightningIcon />
          </div>
          <span style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: '14px', color: 'white' }}>Premium</span>
        </div>
      )}

      <div className="flex h-full">
        {/* Left colored panel */}
        <div
          style={{
            width: '160px',
            minWidth: '160px',
            margin: '32px 0 32px 32px',
            background: isFree
              ? '#ECF2FF'
              : 'linear-gradient(160deg, #e8edff 0%, #d0d8ff 100%)',
            borderRadius: '16px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px 16px',
            height: '180px',
            alignSelf: 'flex-start',
          }}
        >
          <span
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 600,
              fontSize: isFree ? '32px' : '36px',
              lineHeight: '1',
              color: isFree ? '#52B4DA' : '#1E3E85',
              textAlign: 'center',
            }}
          >
            {isFree ? 'Free' : '$79.99'}
          </span>
          <span
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: isFree ? 500 : 700,
              fontSize: isFree ? '20px' : '22px',
              color: isFree ? 'rgba(17,20,45,0.4)' : '#52B4DA',
              marginTop: '8px',
              textAlign: 'center',
            }}
          >
            {isFree ? 'Basic' : '/ mo'}
          </span>
        </div>

        {/* Right content */}
        <div className="flex flex-col flex-1 p-6 pt-8">
          {/* Features list */}
          <div className="flex flex-col gap-3 flex-1">
            {(isFree ? freeFeatures : premiumFeatures).map((feat) => (
              <div key={feat.text} className="flex items-start gap-3">
                {feat.enabled ? <CheckIcon gradient={isFree} /> : <XIcon />}
                <span
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 500,
                    fontSize: '16px',
                    color: feat.enabled ? 'rgba(50,52,69,0.9)' : '#808191',
                    lineHeight: '1.5',
                  }}
                >
                  {feat.text}
                </span>
              </div>
            ))}
          </div>

          {/* CTA button */}
          <a
            href="#signup"
            id={`pricing-cta-${plan}`}
            className="mt-6 w-full text-center no-underline transition-all duration-200"
            style={{
              display: 'inline-block',
              borderRadius: '24px',
              padding: '16px',
              fontSize: '20px',
              fontWeight: 600,
              fontFamily: 'Poppins, sans-serif',
              ...(isFree 
                ? {
                    background: 'transparent',
                    color: '#1E3E85',
                    border: '2px solid #52b4da'
                  }
                : {
                    background: 'linear-gradient(132.559deg, #5799EB 5.6%, #9F74FB 106%)',
                    color: '#ffffff',
                    border: '1.5px solid transparent'
                  }
              )
            }}
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
}

export default function PricingSection() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section
      id="pricing"
      className="w-full bg-white pt-16 lg:pt-24 pb-12 lg:pb-16 relative z-10"
      style={{ marginBottom: '-140px' }}
      aria-label="Pricing plans"
    >
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className=" mx-auto px-6 lg:px-[200px]"
        style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px' }}
      >
        {/* Section title */}
        <h2
          className={`fade-in-up${isVisible ? ' visible' : ''} text-center m-0 mb-14`}
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(28px, 3.5vw, 44px)',
            color: '#11142D',
            lineHeight: '1.25',
          }}
        >
          Help is One Click Away
        </h2>

        {/* Cards grid */}
        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
          <div className={`fade-in-up${isVisible ? ' visible' : ''} delay-200 flex justify-center w-full md:w-1/2`}>
            <PricingCard plan="free" />
          </div>
          <div className={`fade-in-up${isVisible ? ' visible' : ''} delay-400 flex justify-center w-full md:w-1/2`}>
            <PricingCard plan="premium" />
          </div>
        </div>
      </div>
    </section>
  );
}
