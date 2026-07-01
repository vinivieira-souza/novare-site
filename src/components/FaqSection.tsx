'use client';

import { useState } from 'react';
import { ChevronIcon } from '@/assets/icons/Icons';
import { faqItems } from '@/data/site-content';

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="scroll-section scroll-section-faq relative w-full px-6 pt-14 pb-[90px] md:py-[90px]"
    >
      <h2 className="faq-title mx-auto max-w-dvw text-center font-(family-name:--font-jetbrains-mono) text-[clamp(2rem,4vw,3.5rem)] leading-10 font-bold tracking-[-0.0161em] text-white md:max-w-[655px]">
        Perguntas Frequentes
      </h2>

      <div className="faq-list mx-auto mt-12 max-w-[640px] md:mt-[65px]">
        {faqItems.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={item.question}
              className="faq-item border-novare-white-30 overflow-hidden border-b"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="faq-question flex w-full cursor-pointer items-center justify-between gap-4 px-3 py-5 text-left select-none"
              >
                <span className="font-(family-name:--font-poppins) text-sm font-medium text-white">
                  {item.question}
                </span>
                <ChevronIcon
                  className={`size-3 shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : 'rotate-0'
                  }`}
                  strokeWidth={2}
                />
              </button>
              <div
                className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                  isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="faq-answer px-3 pb-5">
                    <p className="text-novare-white-80 font-(family-name:--font-poppins) text-xs md:text-sm font-medium">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
