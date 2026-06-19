import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function SmartFeaturesHeader() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section
      id="features"
      className="w-full bg-white pt-24 pb-10 text-center"
      aria-label="Smart Features section header"
    >
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className={`fade-in-up${isVisible ? ' visible' : ''} mx-auto px-6 lg:px-[200px]`}
      >
        <h2
          className="font-bold text-white m-0 leading-[68px]"
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontSize: 'clamp(32px, 4vw, 53px)',
            background: 'linear-gradient(135deg, #1e3e85 0%, #52b4da 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Smart Features
        </h2>

        <p
          className={`fade-in-up${isVisible ? ' visible' : ''} delay-200 mt-4 mx-auto text-center`}
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 500,
            fontSize: 'clamp(14px, 1.5vw, 19px)',
            lineHeight: '29px',
            color: 'rgba(17,20,45,0.7)',
            maxWidth: '860px',
          }}
        >
          Actually beard single-origin coffee, twee 90's PBR Echo Park sartorial try-hard
          freegan Portland ennui. Selvage jean shorts 90's, Vice American Apparel try-hard
          food truck Shoreditch.
        </p>
      </div>
    </section>
  );
}
