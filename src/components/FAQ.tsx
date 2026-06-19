import { useState } from 'react';
import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Do I have to sign a long-term contract?',
    answer: 'Actually beard single-origin coffee, twee 90\'s PBR Echo Park sartorial try-hard freegan Portland ennui. Selvage jean shorts 90\'s, Vice American Apparel try-hard food truck Shoreditch fap lomo Wes Anderson. Art party Thundercats High Life Tumblr. Actually beard single-origin coffee, twee 90\'s PBR Echo Park sartorial try-hard freegan Portland.',
  },
  {
    id: 'faq-2',
    question: 'Can I pay for a whole year?',
    answer: 'Actually beard single-origin coffee, twee 90\'s PBR Echo Park sartorial try-hard freegan Portland ennui. Selvage jean shorts 90\'s, Vice American Apparel try-hard food truck Shoreditch fap lomo Wes Anderson.',
  },
  {
    id: 'faq-3',
    question: 'What if I need help?',
    answer: 'Actually beard single-origin coffee, twee 90\'s PBR Echo Park sartorial try-hard freegan Portland ennui. Selvage jean shorts 90\'s, Vice American Apparel try-hard food truck Shoreditch fap lomo Wes Anderson. Art party Thundercats High Life Tumblr.',
  },
];

function FAQAccordion({ item, isOpen, onToggle }: { item: FAQItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div
      className="border-b"
      style={{ borderColor: 'rgba(139,163,204,0.3)' }}
    >
      <button
        id={`${item.id}-btn`}
        className="w-full text-left flex items-center justify-between py-6 gap-4 bg-transparent border-none cursor-pointer group"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`${item.id}-answer`}
      >
        <span
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 600,
            fontSize: 'clamp(16px, 1.5vw, 22px)',
            color: '#11142D',
            lineHeight: '1.35',
            transition: 'color 0.2s ease',
          }}
          className={isOpen ? '' : 'group-hover:text-[#1E3E85]'}
        >
          {item.question}
        </span>

      </button>

      {/* Answer */}
      <div
        id={`${item.id}-answer`}
        className={`faq-answer${isOpen ? ' open' : ''}`}
        role="region"
        aria-labelledby={`${item.id}-btn`}
      >
        <p
          className="m-0 pb-6 pr-12"
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 400,
            fontSize: 'clamp(14px, 1.2vw, 16px)',
            lineHeight: '1.8',
            color: 'rgba(17,20,45,0.65)',
          }}
        >
          {item.answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section
      id="faq"
      className="w-full bg-white py-16 lg:py-24"
      aria-label="Common Questions"
    >
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className="mx-auto px-6 lg:px-[200px]"
        style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px' }}
      >
        {/* Heading */}
        <h2
          className={`fade-in-up${isVisible ? ' visible' : ''} m-0 mb-12`}
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 700,
            fontSize: 'clamp(28px, 3.5vw, 44px)',
            color: '#11142D',
            lineHeight: '1.2',
          }}
        >
          Common Questions
        </h2>

        {/* FAQ items */}
        <div className={`fade-in-up${isVisible ? ' visible' : ''} delay-200`}>
          {faqData.map((item) => (
            <FAQAccordion
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onToggle={() => setOpenId(openId === item.id ? null : item.id)}
            />
          ))}
        </div>

        {/* More Questions button */}
        <div className={`fade-in-up${isVisible ? ' visible' : ''} delay-400 mt-10`}>
          <a
            href="#contact"
            id="faq-more-btn"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold transition-all duration-200 no-underline border-2 hover:shadow-lg"
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontSize: '16px',
              color: '#1E3E85',
              borderColor: '#1E3E85',
              background: 'transparent',
              transition: 'background 0.2s ease, color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = 'linear-gradient(132.559deg, #52B4DA 5.6%, #1E3E85 106%)';
              (e.currentTarget as HTMLAnchorElement).style.color = 'white';
              (e.currentTarget as HTMLAnchorElement).style.borderColor = 'transparent';
              (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
              (e.currentTarget as HTMLAnchorElement).style.color = '#1E3E85';
              (e.currentTarget as HTMLAnchorElement).style.borderColor = '#1E3E85';
              (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
            }}
          >
            More Questions
          </a>
        </div>
      </div>
    </section>
  );
}
